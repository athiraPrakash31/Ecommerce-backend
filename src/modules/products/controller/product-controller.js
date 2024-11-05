import cartRepository from "../../cart/repository/cart-repository.js";
import Cart from "../../cart/schema/cart-schema.js";
import userRepository from "../../users/repository/user-repository.js";
import productRepository from "../repository/product-repository.js";
import productResources from "../resources/product-resources";

const productController = {

    // list all products
    getAllProducts: async (req, res) => {
        try {
            const products = await productRepository.findAllProducts();

            if (products.length === 0) {
                return res.status(404).json(productResources.errorResponse(404, "No products found"));
            }
            res.status(200).json(productResources.successResponse(products, { message: "Products fetches successfully" }));
        } catch (error) {
            res.status(500).json(productResources.errorResponse(500, error.message));
        }
    },


    // add to cart
    addtoCart: async (req, res) => {
        const userId = req.payload;
        console.log("inside the cart functiion");
        const { productId, name, price } = req.body
        const user = await userRepository.findById(userId)
        console.log(user,"user");
        
        try {
            let availabletoAdd = 1
            quantity=availabletoAdd*2

            const existingItem = await cartRepository.findCart(userId);
            console.log(existingItem);
            
            if (existingItem) {
                res.status(406).json("product already exist")
            } else {
                const newProduct = new Cart({
                    productId, 
                    userId,
                    name,
                    price,
                    quantity
                })
                await newProduct.save()
                res.status(200).json(newProduct)
            }

        } catch (error) {
            console.log(error);
        }
    },


    //  logic of buy one get one free
    getOneProduct: async (req, res) => {
        try {
            const productId = req.params;
            const product = await productRepository.findProductById(productId);
            console.log(product, "id..............");
            if (!product) {
                return res.status(404).json(errorResponse(404, "Product not found"));
            }
            let cart = await cartRepository.findCart();
            if (!cart) {
                const cart = new Cart({
                    productId: product._id,
                    selectedProducts: product.name
                });
                await cart.save()
            }
            console.log(cart, "add");
        } catch (error) {

        }

    }
}

export default productController;
