const fs=require('fs');
const path=require('path');
const p=path.join(
    __dirname,'../',
    'data',
    'carts.json');
module.exports=class Cart{
   static addproduct(id,productPrice){
    fs.readFile(p,(err,fileContent)=>{
        let cart={};
        cart.product=[];
        cart.totalPrice=0;
        if(!err && fileContent.length!=0){
            cart=JSON.parse(fileContent);
            
        }
        const existingProductIndex=cart.product.findIndex(prod=>prod.id==id);
        const existingProduct=cart.product[existingProductIndex];
        let updatedProduct;
        if(existingProduct){
            updatedProduct={...existingProduct};
            updatedProduct.qty=updatedProduct.qty+1;
            cart.product=[...cart.product,updatedProduct];
            cart.product[existingProductIndex]=[updatedProduct];
        }else{
            updatedProduct={};
            updatedProduct.id=id;
            updatedProduct.qty=1;
            cart.product=[...cart.product,updatedProduct];
        }
       cart.totalPrice=cart.totalPrice+Number.parseInt(productPrice) ;
       fs.writeFile(p,JSON.stringify(cart),err=>{
        console.log(err);
       })
    });

   }
}