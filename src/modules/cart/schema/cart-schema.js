import mongoose from 'mongoose';
const cartSchema = new mongoose.Schema ({
   
    productId:{
        type:String,
        require:true
    },
    name: {
        type: String,
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    userId:{
        type:String,
        required:true,
       
    }
});



const Cart = mongoose.model('Cart', cartSchema);
export default Cart;