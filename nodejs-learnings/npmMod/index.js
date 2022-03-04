// npm init : to create package.json, it stores the info about the dependencies which are being used.
// package lock.json - stores detailed information about dependencies
// npm install chalk - will install chalk
// js object vs json : In Json key have "" but in object key dont have "",so package.json file is a jsonfile
// To install globally npm install nodemon -g
// nodemon willl auto rerun the server after each change

const valid = require("validator"); //import validator
const res = valid.isEmail("alokiimtgn@gmail.com");
if(res){
    console.log("Valid Email Address");
}else{
    console.log("InValid Email Address");
}
