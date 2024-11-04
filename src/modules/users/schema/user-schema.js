import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from  'uuid'
const userSchema = new mongoose.Schema ({
    userId: {
        type: String,
        default: uuidv4, // Generate a UUID by default
        unique: true
    },
    username:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
});
// hash password before saving user
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const User = mongoose.model('User', userSchema);
export default User;