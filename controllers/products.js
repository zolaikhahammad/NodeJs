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
    // const products=Product.fetchAll(products=>{
    //     res.render('shop/products-list',
    //     {
    //         prods:products,
    //         hasProducts:products.length>0
    //         ,active_shop:true,
    //         pageTitle:'products',
    //         path:'/products'});
    // });
    // Product.fetchAll().then(([rowData,fieldData])=>{
    //     res.render('shop/products-list',
    //     {
    //         prods:rowData,
    //         hasProducts:rowData.length>0
    //         ,active_shop:true,
    //         pageTitle:'products',
    //         path:'/products'});

    // }).catch(err=>{console.log(err)});
    Product.findAll().then( result=>{
        res.render('shop/products-list',
            {
                prods:result,
                hasProducts:result.length>0
                ,active_shop:true,
                pageTitle:'products',
                path:'/products'});
            }).catch(err=>{console.log(err)})
}
exports.getProduct=(req,res,next)=>{
    // const products=Product.fetchAll(products=>{
    //     const prodId=req.params.productId;
    //     // Product.findById(prodId,_product=>{
    //     //     res.render('shop/product-detail',
    //     //     {
    //     //         product:_product,
    //     //         pageTitle:'Product Details',
    //     //         path:''
    //     //     });
    //     // })
        
    // });
    const prodId=req.params.productId;
    // Product.findById(prodId).then(([rowData])=>{
    //     res.render('shop/product-detail',
    //     {
    //         product:rowData[0],
    //         pageTitle:'Product Details',
    //         path:''
    //     });
    // }).catch(err=>{console.log(err)});
    Product.findAll({where:
        {id: prodId}}).then(rowData=>{
        res.render('shop/product-detail',
        {
            product:rowData[0],
            pageTitle:'Product Details',
            path:''
        });
    }).catch(err=>{console.log(err)});
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
    const prodId=req.params.productId;
        Product.findById(prodId).then(([rowData,fieldData])=>{
            res.render('admin/edit-product',
            {
                product:rowData,
                pageTitle:'Edit Product',
                path:'admin/edit-product',
                editing:editMode
            });
        })
 }
 exports.postAddProduct=(req,res,next)=>{
    // const product=new Product(req.body.title,req.body.imageUrl,req.body.description,req.body.price);
    // product.save().then(()=>{
    //     res.redirect('/');
    // }).catch(err=>{console.log(err)});
    Product.create({
        title:req.body.title,
        price:req.body.price,
        description:req.body.description
    }).then().catch(err=>{console.log(err)});
     
}

exports.getProducts=(req,res,next)=>{
    // const products=Product.fetchAll(products=>{
    //     res.render('shop/products-list',
    //     {
    //         prods:products,
    //         hasProducts:products.length>0
    //         ,active_shop:true,
    //         pageTitle:'Shop',
    //         path:'/'});
    // });

    // Product.fetchAll().then(([rowData,fieldData])=>{
    //     res.render('shop/products-list',
    //         {
    //             prods:rowData,
    //             hasProducts:rowData.length>0
    //             ,active_shop:true,
    //             pageTitle:'Shop',
    //             path:'/'});

    // }).catch(err=>{console.log(err)});

    Product.findAll().then( result=>{
        res.render('shop/products-list',
            {
                prods:result,
                hasProducts:result.length>0
                ,active_shop:true,
                pageTitle:'Shop',
                path:'/'});
            }).catch(err=>{console.log(err)})

}