const Product=require('../models/product')
exports.getAddProduct = (req,res,next)=>{
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
     //res.send("<h1> Product Page</h1>"); ///allows us to send response of type any
   ///  res.sendFile(path.join(rootDir,'../','views','add-product.html'));
    res.render('add-product',
        {
            pageTitle: 'add product',
            path: '/admin/add-product',
            productCSS: true, active_product: true
        });
 }
 exports.postAddProduct=(req,res,next)=>{
    //console.log(req.body);
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/'); 
}

exports.getProducts=(req,res,next)=>{
    //res.send("<h1> HELLO FROM EXPRESS</h1>"); ///allows us to send response of type ay
    //console.log(adminData.product);
    const products=Product.fetchAll();
    res.render('shop',{prods:products,hasProducts:products.length>0,active_shop:true,pageTitle:'Shop',path:'/'});
   //res.sendFile(path.join(rootDir,'../','views','shop.html'));
   ////to send a response for the pug template we use render method
   //res.render('shop'); //user default template engine, and views path is defined in the view engine
}