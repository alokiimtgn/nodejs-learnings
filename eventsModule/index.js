// Events Module

const EventEmitter = require("events");
const event = new EventEmitter();

event.on('Say My Name',()=>{
console.log("Your Name is Alok");
});

event.on('Say My Name',()=>{
    console.log("Your Name is Noopur Srivastava");
});

event.on('Say My Name',()=>{
        console.log("Your Name is Priya");
});


event.emit('Say My Name'); // mupliple callback are being called from single event:Say My name