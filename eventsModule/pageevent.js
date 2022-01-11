const EventEmitter = require("events");
const event = new EventEmitter();
event.on('checkPage',(sc,msg)=>{
    console.log(`Status Code is ${sc} and the page is ${msg}`);
});

event.emit('checkPage',200,"ok"); //code order should be same 


