import express from 'express';
import productController from '../modules/products/controller/product-controller.js';
import userController from '../modules/users/controller/user-controller.js';

const router = express.Router();
 router.get ('/allProducts', productController.getAllProducts);
 router.post('/register',userController.register);
 router.post('/login',userController.login);
 router.get('/getOneProduct/:id', productController.getOneProduct)

 export default router;