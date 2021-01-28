
//Create your own server using node.JS

const http = require("http");

const server = http.createServer((req,res)=>{   //callback func
  if(req.url === "/"){
     res.end("Home rout bro")
  }else if(req.url === "/about"){
      res.end("you are in about page")
  }else
  res.writeHead(404, {"Content-type":"text/html"});
res.end("<h1>404 error, page not found</h1>")

});

server.listen(8000, "127.0.0.1",()=>{
    console.log("listening to the port number 8000")    //observe, call back func as parameter
});

