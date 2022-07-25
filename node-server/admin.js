const express=require('express');
const router=express.Router();
const path=require('path');
const productController=require('../controllers/products.js')

router.get('/add-product',productController.getAddProduct);
router.post("/product",productController.postAddProduct);

module.exports=router;
//exports.route=router;