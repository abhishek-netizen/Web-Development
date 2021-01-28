
//Create your own server using node.JS

const http = require("http");

const server = http.createServer((req,res)=>{   //callback func
res.end("Hello from the other side")
});

server.listen(8000, "127.0.0.1",()=>{
    console.log("listening to the port number 8000")    //observe, call back func as parameter
});

