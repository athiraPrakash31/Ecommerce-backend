import express from 'express';
import cors from 'cors';
import db from './config/db.js'
import 'dotenv/config';
import router from './src/routes/router.js';


const Ecommerce = express();
Ecommerce.use((cors({
    origin: 'http://localhost:3000'
})))

Ecommerce.use(express.json());
Ecommerce.use(router);


const PORT = 4000 || process.env.PORT


Ecommerce.listen(PORT,()=>{
    console.log('Ecommerce listening on port '+PORT);
})

Ecommerce.get('/',(req,res)=>{
    res.send('Hello world!');
})