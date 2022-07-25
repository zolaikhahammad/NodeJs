const express=require('express');
const router=express.Router();
const productController=require('../controllers/products.js')

router.get('/',productController.getProducts);
router.get('/cart',productController.getCartView);
router.get('/orders',productController.getOrdersView);
router.get('/products',productController.getProductsView);
module.exports=router;