const Product=require('../models/product');
exports.getAllProduct=(req,res,next)=>{
    const products=Product.fetchAll(products=>{
        res.render('admin/products',
        {
            prods:products,
            hasProducts:products.length>0
            ,active_shop:true,
            pageTitle:'admin products',
            path:'/admin/products'});
    });
}

