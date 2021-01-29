const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request",(req,res)=>{
    var fs = require('fs');
    fs.readFile('data.txt',(err,data)=>{
        if(err) return console.log(err)
        res.end(data.toString())
    });

});

server.listen(8000, '127.0.0.1',()=>{
    console.log("listening on port")
})

/// same purpose as above but redirecting it to the /boom url :: Normal way

const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{   //callback func
    if(req.url === "/boom"){
       var fs = require('fs');
       fs.readFile('data.txt',(err,data)=>{
           if(err) return console.log()
           res.end(data.toString())
       });
    }
  });

  server.listen(8000, '127.0.0.1', ()=>{
      console.log("Listening to the port")
  })

//Streaming way

const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
const rsstream = fs.createReadStream('data.txt');

rsstream.on('data',(chunkdata)=>{
 res.write(chunkdata);
});
rsstream.on('end',()=>{
    res.end();
});
});

server.listen(8000,'127.0.0.1',()=>{
    console.log("up and runnign")
});