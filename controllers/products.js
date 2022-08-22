const Product=require('../models/product')
const Cart=require('../models/carts.js')
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
exports.PostCart=(req,res,next)=>{
    var prodId=req.body.productId;
    Product.findById(prodId,(product)=>{
        Cart.addproduct(prodId,product.price)
    });
    console.log(prodId);

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
exports.getProduct=(req,res,next)=>{
    const products=Product.fetchAll(products=>{
        const prodId=req.params.productId;
        Product.findById(prodId,_product=>{
            res.render('shop/product-detail',
            {
                product:_product,
                pageTitle:'Product Details',
                path:''
            });
        })
    });
}
exports.getAddProduct = (req,res,next)=>{
    res.render('admin/add-product',
        {
            pageTitle: 'add product',
            path: '/admin/add-product',
            pageTitle:'Add Product',
            productCSS: true, 
            active_product: true,
            editing:false
        });
 }
 exports.getEditProduct = (req,res,next)=>{
    const editMode=req.query.edit;
        const products=Product.fetchAll(products=>{
            const prodId=req.params.productId;
            Product.findById(prodId,_product=>{
                res.render('admin/edit-product',
                {
                    product:_product,
                    pageTitle:'Edit Product',
                    path:'admin/edit-product',
                    editing:editMode
                });
            })
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