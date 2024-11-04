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

    //  logic of buy one get one free
    getOneProduct: async (req, res) => {
        const { productId } = req.params;

        try {

            const product = await productRepository.findProductById(productId);
            if (!product) {
                return res.status(404).json(errorResponse(404, "Product not found"));
            }
            if(product.name == "Cool Water"){
              let items = product.quantity
        
              const selectedQuantity = items.filter(item=>cart.seinclude(item))
                if(selectedQuantity.length>0){
                    console.log("selected quantity");
                    
                }
              
              
            }
            
           

        } catch (error) {
            console.log(error);

        }
    }
}

export default productController;
