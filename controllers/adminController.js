const Product=require('../models/product');
exports.getAllProduct=(req,res,next)=>{
    Product.fetchAll().then(([rowData,fieldData])=>{
        res.render('admin/products',
            {
                prods:rowData,
                hasProducts:rowData.length>0
                ,active_shop:true,
            pageTitle:'admin products',
            path:'/admin/products'});

    }).catch(err=>{console.log(err)});
}

