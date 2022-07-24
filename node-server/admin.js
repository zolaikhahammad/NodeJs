const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../helpers/path');
const products=[];
router.get('/add-product',(req,res,next)=>{
   // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
    //res.send("<h1> Product Page</h1>"); ///allows us to send response of type any
  ///  res.sendFile(path.join(rootDir,'../','views','add-product.html'));
   res.render('add-product',{pageTitle:'add product',path:'/admin/add-product',productCSS:true,active_product:true});
});
router.post("/product",(req,res,next)=>{
    //console.log(req.body);
    products.push({title:req.body.title});
    res.redirect('/'); 
});

//module.exports=router;
exports.route=router;
exports.product=products;