const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.send("<h1> HELLO FROM EXPRESS</h1>"); ///allows us to send response of type ay
   
});
module.exports=router;