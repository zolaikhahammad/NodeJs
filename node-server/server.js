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
const app=express(); ///// express function express framework, all about middleware
app.use((req,res,next)=>{
    console.log('in the middleware');
    next(); ////we have to call next to allow the request to travel on the next middleware in the line

}); ///to add new middleware function,will be executed for every request, next is a function, has to be excuted to allow the request to travel to the next req
app.use((req,res,next)=>{
    console.log('in another the middleware');
    res.send("<h1> HELLO FROM EXPRESS</h1>"); ///allows us to send response of type ay
   
});
app.listen(3000);
// const server=http.createServer(app);
// server.listen(3000); /////starts a process will keep running to listen incoming request