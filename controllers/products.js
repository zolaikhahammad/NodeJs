const Product=require('../models/product')
exports.getCartView=(req,res,next)=>{
    res.render('shop/cart',
    {
        pageTitle:'Cart',
        path:'/cart',
    });
}
exports.getOrdersView=(req,res,next)=>{
    res.render('shop/orders',
    {
        pageTitle:'Orders',
        path:'/orders',
    });
}
exports.getProductsView=(req,res,next)=>{
    const products=Product.fetchAll(products=>{
        res.render('shop/products-list',
        {
            prods:products,
            hasProducts:products.length>0
            ,active_shop:true,
            pageTitle:'products',
            path:'/products'});
    });
}
exports.getAddProduct = (req,res,next)=>{
    res.render('admin/add-product',
        {
            pageTitle: 'add product',
            path: '/admin/add-product',
            productCSS: true, active_product: true
        });
 }
 exports.postAddProduct=(req,res,next)=>{
    const product=new Product(req.body.title,req.body.imageUrl,req.body.description,req.body.price);
    product.save();
    res.redirect('/'); 
}

exports.getProducts=(req,res,next)=>{
    const products=Product.fetchAll(products=>{
        res.render('shop/products-list',
        {
            prods:products,
            hasProducts:products.length>0
            ,active_shop:true,
            pageTitle:'Shop',
            path:'/'});
    });
}