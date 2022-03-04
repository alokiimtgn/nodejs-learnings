const express = require("express");
const { json, jsonp } = require("express/lib/response");
const app = express();

app.get("/",(req,res)=>{
    console.log('wwww.alok.com');
    res.send('Welcome');
})

app.get("/about",(req,res)=>{
    console.log('wwww.alok.com');
    res.status(200).send('This About page');
})

app.get("/contact",(req,res)=>{
    res.write('<h1>Alok Kumar</h1>');
    res.send();
})

app.get("/studentData",(req,res)=>{
    console.log(req.headers);
    console.log(req.ip);
    console.log(req.method);
    console.log(req.originalUrl);
    console.log(req.params);
    console.log(req.path);
    console.log(req.url);

    const empList = [{
        id:1,
        name:'Alok Kumar'
    },
    {
        id:2,
        name:'Ritu Raj'
    }
]
    res.send(empList);
})

app.listen(8000,()=>{
 console.log('Listening port at 8000');
});

