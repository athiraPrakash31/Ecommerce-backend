import mongoose from 'mongoose';
const cartSchema = new mongoose.Schema ({
   
   
    selectedProducts: {
        type: [String],
        default:[]
    }
});



const Cart = mongoose.model('Cart', cartSchema);
export default Cart;