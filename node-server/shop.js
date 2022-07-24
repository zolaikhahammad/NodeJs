const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../helpers/path');
const adminData=require('./admin')
router.get('/',(req,res,next)=>{
    //res.send("<h1> HELLO FROM EXPRESS</h1>"); ///allows us to send response of type ay
    //console.log(adminData.product);
    const product=adminData.product;
    res.render('shop',{prods:product,hasProducts:product.length>0,active_shop:true});
   //res.sendFile(path.join(rootDir,'../','views','shop.html'));
   ////to send a response for the pug template we use render method
   //res.render('shop'); //user default template engine, and views path is defined in the view engine
});
module.exports=router;