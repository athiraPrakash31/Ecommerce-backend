import Product from "../schema/product-schema.js";

const productRepository = {

    findAllProducts : async()=>{
     return Product.find()
    },
    findProductById : async(productId)=>{
        return Product.findOne({productId})
    }


}

export default productRepository;