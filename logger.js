//Everything here is wrapped by a function called Moudle Wrapper Function
// (function (exports, reuire, module, __filename, __dirname) {

    //The code below resides inside this wrapper which is why if you run node app.js 
    //you will see the console logs result too
//})

console.log(__filename)
console.log(__dirname)
const EventEmitter = require('events')

let url = "http://mylogger.io/log";

class Logger extends EventEmitter {
    log (msg){
        //send an HTTP request
        console.log(msg)
        // Raise an event, this wont do anything if we don't register a listener for it, line 39
        this.emit("messageLogged", {id: 1, url: 'http://'})  // often when we raise an event we also want to send some data about that event 
    // Which is called Event Arguments which comes as a second parameter to the emit method.
    
    // emit means making a noise, or prduce somthing, in this case I am signaling tha and event has happened
    }
}


module.exports = Logger; // This will export this function as an object inisde the exports 

// If you want to use the function as is then you export it:
//module.exports = log;

