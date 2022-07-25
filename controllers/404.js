exports.pageNotFound=(req,res,next)=>{
    // res.status(404).send("<h1> 404 Page not found</h1>");
   // res.sendFile(path.join(rootDir,'../','views','404.html'));
 
   /////sending th pug file
   res.status(404).render('404',{pageTitle:'Page not found',path:''})
 }