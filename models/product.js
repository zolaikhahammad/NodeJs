const Sequelize=require('sequelize');
const sequelize=require('../path/database');

const Product=sequelize.define('product',{
    id:
    {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:Sequelize.STRING,
    price:Sequelize.DOUBLE,
    description:Sequelize.STRING
    
});
module.exports=Product;

// const db=require('../path/database');
// const fs=require('fs');
// const path=require('path');
// const p=path.join(
//     __dirname,'../',
//     'data',
//     'products.json');
// const getProductsFromFile=cb=>{
   
//         fs.readFile(p,(err,fileContent)=>{
//             if(err){
//                 cb([]);
//             }
//             else{
//                 return cb(JSON.parse(fileContent));
//             }

//         });
// }
// module.exports=class Product{
//     constructor(_title,_imageUrl,_description,_price){
//         this.id=Math.random().toString();
//         this.title=_title;
//         this.imageUrl=_imageUrl;
//         this.description=_description;
//         this.price=_price;
//     }

//     save(){
//         // getProductsFromFile(products=>{
//         //     products.push(this);
//         //     fs.writeFile(p,JSON.stringify(products),(err)=>{
//         //         console.log(err);
//         //     });
//         // });
//         return db.execute("INSERT INTO Products(title,price,description) VALUES(?,?,?)",
//         [this.title,this.price,this.description])
//     }

//     static fetchAll(cb){
//         //getProductsFromFile(cb);
//         return db.execute("SELECT * FROM products");
       
//     }
//     static findById(id){
//         // getProductsFromFile(products=>{
//         //     const prod=products.find(p=>p.id==id);
//         //     cb(prod);
//         // });
//         return db.execute("SELECT * FROM products WHERE products.id=?",[id]);
//     }

// }