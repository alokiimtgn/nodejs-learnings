// Creating an Http Server in NodeJs and perform routing
const http = require("http"); // import http module

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=="/"){
        res.end("Hello From Alok");
    }else if(req.url=="/about"){
        res.end("Hello From About");
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 Page Not Found!</h1>");  // will end error  page
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the Port No 8000");
});