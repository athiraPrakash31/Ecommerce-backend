import User from '../schema/user-schema.js';

const userRepository = {
    findById:async(userId)=>{
        return await User.findOne({userId: userId})
    },
    findByEmail:async(email) => {
        return User.findOne({email});
    },
    createUser:async(data) => {
        const user = new User(data);
        return user.save();
    }
}
export default userRepository;