/////core modules http,https (used for launching request),fs,path,os
///require function is used to import module
// function requestListener(request,response){
// }
//http.createServer(requestListener); /////take request listener, function execute for ebery incoming request

// http.createServer(function(req,res){
//     ////anonymous function approach
// });

//const http=require('http');
const express=require('express');
const bodyparser=require('body-parser');
const path=require('path');
const pageNotFoundController=require('../controllers/404.js')
const db=require('../path/database')
const sequelize=require('../path/database')
///handlebars
//const expressHbs=require('express-handlebars');
///handlebars
const app=express(); ///// express function express framework, all about middleware

//app.engine('handlebars',expressHbs({layoutDirs:'views/layout/',defaultLayout:'main-layout'})); /// engine for hbs
//app.set('view engine','handlebars');
app.set('view engine','ejs');
app.set('views','views');

///pug
//app.set('view engine','pug'); ///set()allows us to set value globally on our express application
////pug auto register itself 
//app.set('views','views'); ////we can tell where to find views
//pug
const adminroutes=require('./admin.js');
const clientroutes=require('./shop.js');
// app.use((req,res,next)=>{
//     console.log('in the middleware');
//     next(); ////we have to call next to allow the request to travel on the next middleware in the line

// }); ///to add new middleware function,will be executed for every request, next is a function, has to be excuted to allow the request to travel to the next req

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'../','public'))); ////middleware serve static files, add path to folder add read accesss to
app.use(clientroutes);
app.use('/admin',adminroutes); /////will go to the method starting with the path /admin
app.use(pageNotFoundController.pageNotFound);
// app.use('/add-product',(req,res,next)=>{
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
//     //res.send("<h1> Product Page</h1>"); ///allows us to send response of type ay
   
// });
// app.use("/product",(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/'); 
// });
// app.post("/product",(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/'); 
// });
sequelize.sync().then().catch(err=>{console.log(err)});
app.listen(3000);
// const server=http.createServer(app);
// server.listen(3000); /////starts a process will keep running to listen incoming request