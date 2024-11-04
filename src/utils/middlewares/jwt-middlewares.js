import jwt from 'jsonwebtoken';
import 'dotenv/config';

const jwtMiddleware = {

    jwtMiddleware :async(req,res,next)=>{
        console.log("Inside jwt middleware");
        
        try{
    
            // get the token
            const token =await req.headers['authorization'].slice(7)
            console.log(token);
            // token verificatiion
            const jwtVerification = jwt.verify(token,process.env.JWT_SECRET)
            console.log(jwtVerification,'verify');
            req.payload = jwtVerification.userId
            console.log(req.payload);
            next()    
        }
        catch(error){
            res.status(401).json({"AuthorizationError":error.message})
        }
    }
     
}
export default jwtMiddleware;