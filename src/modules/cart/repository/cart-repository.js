import Cart from "../schema/cart-schema.js"

const cartRepository = {
     findCardProduct: async(selectedProducts)=>{
        return Cart.find(selectedProducts)
     },
     findCart: async(userId)=>{
        return Cart.findOne({userId})
     }
}
export default cartRepository;