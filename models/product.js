
const fs=require('fs');
const path=require('path');
const p=path.join(
    __dirname,'../',
    'data',
    'products.json');
const getProductsFromFile=cb=>{
   
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                cb([]);
            }
            else{
                return cb(JSON.parse(fileContent));
            }

        });
}
module.exports=class Product{
    constructor(_title,_imageUrl,_description,_price){
        this.title=_title;
        this.imageUrl=_imageUrl;
        this.description=_description;
        this.price=_price;
    }

    save(){
        getProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
       
    }

}