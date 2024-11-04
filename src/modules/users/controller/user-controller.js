import userRepository from "../repository/user-repository.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const userController = {
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body;
            const existingEmail = await userRepository.findByEmail();
            if (existingEmail) {
                return res.status(400).json({ message: "Email is already existed"});
            }
            const user = await userRepository.createUser({ username, email, password })
            res.status(201).json({ message: 'User registered successfully', user });

        } catch (error) {
            res.status(500).json({ message: error.message });

            console.log(error, "Failed to register");

        }
    },
    login:async(req,res) => {
        try {
            const { email, password } = req.body;
             // Find user by email
        const user = await userRepository.findByEmail(email);
        if (!user) {
            return res.status(400).json({ message: "email not found"});
        }
           // Compare the password with the stored hashed password
           const isPasswordValid = await bcrypt.compare(password, user.password);
           if (!isPasswordValid) {
               return res.status(400).json({ message: "password is incorrect" });
           }
            // Generate JWT token with role information
        const token = jwt.sign({ userId: user.userId}, process.env.JWT_SECRET);

        res.status(200).json({ message: 'Login successful',user, token });
        } catch (error) {
            res.status(500).json({ message: error.message });

        }
    }

}

export default userController;