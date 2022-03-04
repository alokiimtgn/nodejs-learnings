// API : api is a service that provide thae data upon request
const http = require("http"); // import http module
const fs = require("fs");
// Read data from local Json File and store in a variable , so it can served upon request 
const userData = fs.readFileSync(`${__dirname}/api.json`,"utf-8");
const userArray = JSON.parse(userData);
   
// Creating an Http Server
const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=="/"){
        res.end("Hello From Alok");
    }else if(req.url=="/users"){
       /* fs.readFile(`${__dirname}/api.json`,"utf-8",(err,data)=>{
            console.log('Fetched Successfully : '+data);
            res.end("Hello From User Api : "+data);
       });This code is moved on top  */
       res.writeHead(200,{"content-type":"application/json"}); // to inform the browser about the data we are dealing with
       res.end("Hello From User , Api All Users : "+userData+".");
    }else if(req.url=="/firstUser"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end("Hello From User Api : "+userArray[0].name+".");
     }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 Page Not Found!</h1>");  // will end error  page
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the Port No 8000");
});