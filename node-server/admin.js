const express=require('express');
const router=express.Router();
const productController=require('../controllers/products.js')
const adminController=require('../controllers/adminController')

router.get('/add-product',productController.getAddProduct);
router.get('/products',adminController.getAllProduct);
router.post("/product",productController.postAddProduct);
router.get('/edit-product/:productId',productController.getEditProduct);
module.exports=router;
//exports.route=router;