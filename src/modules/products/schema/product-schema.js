import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true
    },
    price:{
        type:String,
        required: true,
    },
    quantity:{
        type:Number,
        require:true
    }
})
const Product = mongoose.model('Product', productSchema);
 export default Product;