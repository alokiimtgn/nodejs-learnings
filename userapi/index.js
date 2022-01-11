// Creating an Http Server in NodeJs and perform routing
const http = require("http"); // import http module
const fs = require("fs");

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=="/"){
        res.end("Hello From Alok");
    }else if(req.url=="/users"){
        fs.readFile(`${__dirname}/api.json`,"utf-8",(err,data)=>{
            console.log('Fetched Successfully : '+data);
            res.end("Hello From User Api : "+data);
       });  
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 Page Not Found!</h1>");  // will end error  page
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the Port No 8000");
});