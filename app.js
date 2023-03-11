//const logger = require("./logger");

//logger.log("Hello")

// If I want to work with Path it's much easier to use the path module as opposed to working with strings
const path = require('path')

let pathObj = path.parse(__filename)
console.log(pathObj)

// Gets info for the cureent OS using the OS module 
const os = require('os')
let totalMemory = os.totalmem();
let freeMemory = os.totalmem();
// Before nide we couldn't get those information in Javascript 
console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)

// File system Module 

const systemFile = require('fs')
const files = systemFile.readdirSync("./"); // will return the files and folder in the current folder [in Array]
console.log(files)

// This is Async 
systemFile.readdir('./', (error, files) => {
    if (error) console.log("Error", error)
    //else console.log("Result", files)
})

//Event module 
// Event emitter 

const EventEmitter = require('events') // Uppercase is a convention that indicates that this Event Emitter is a class not a function
// A class is container for a bunch of related methods and properties.
//const emitter = new EventEmitter() // This is the object that will be used in our application, not the EvenEmitter class 
                                    


// The order is important if I register the listener after calling the emit method nothign will happned, 
// Because when we call the emit method it iterates over all the registered listeners and calls them synchronous.


const Logger = require("./logger");
const logger = new Logger();

//Register a listner
logger.on("messageLogged",  (eventArgu) =>{ // Takes two arguments, the first one is the name of the event, the secondis a function that will
    // the acutal listener and that function will be called when the event is raised.
                                    // eventArgu is the data that comes from the emitter in line 48 
    console.log("Listener called ", eventArgu)
}); // or emitter.addListner they are the same 


logger.log('message')


//HTTP module 
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write("Hello world from Node.js");
        res.end();
    }
    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log("Listening on port 3000...");