const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../helpers/path');
router.get('/',(req,res,next)=>{
    //res.send("<h1> HELLO FROM EXPRESS</h1>"); ///allows us to send response of type ay
   res.sendFile(path.join(rootDir,'../','views','shop.html'));
});
module.exports=router;