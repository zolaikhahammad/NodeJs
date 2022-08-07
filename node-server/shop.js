const express=require('express');
const router=express.Router();
const productController=require('../controllers/products.js')


router.get('/',productController.getProducts);

router.get('/products',productController.getProductsView);
router.get('/products/:productId',productController.getProduct);

router.get('/cart',productController.getCartView);
router.get('/orders',productController.getOrdersView);
router.post('/cart',productController.PostCart);
module.exports=router;