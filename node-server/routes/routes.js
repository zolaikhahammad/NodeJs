const file=require('fs');
const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;

    if(url==='/') {
        res.write('<html>'); /////to write in response
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); ///end 
    }
    if(url==='/message' && method==='POST'){
        const body=[]; /// we can never reassing but with push we adding in th backend
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk); /////this will run until all chunks are read
    
        }); ////listen to certain events, fires whenever new chunk is in the request
        req.on('end',()=>{
            ///buffer is bus stop to interact with the chunks
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody);
            const message=parsedBody.split('=')[1];
            file.writeFile('message.txt',message,err=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                res.end();
                return res;
            }); ///sync will block execution
           
        });
        
    
        //////request data is sent in stream of buffer
        ///we user buffers, consider as bus stop to track bus
        ///construct to hold multiple chunks until they are fully parsed
    
      //  res.writeHead(302,{});
    }
    // console.log(req.url,req.method,req.headers);
    // res.setHeader('Content-Type','text/html');
    // res.write('<html>'); /////to write in response
    // res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    // res.write('</html>');
    // res.end(); ///end the response and send it back to client
};
//module.exports=requestHandler;
// module.exports={
//     handler:requestHandler
// }

exports.handler=requestHandler;
exports.someText="Hard Coded Text";