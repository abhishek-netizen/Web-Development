const http = require('http');
const fs = require('fs');
const datas = fs.readFileSync('data.json','utf-8')
const dataObj = JSON.parse(datas)

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("<h1>Home route</h1>")
    }else if(req.url ==="/data"){
        res.end(fs.readFileSync('data.json','utf-8'))
        // this part is not working
    }else if(req.url === '/one'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const something = (dataObj.map(({company})=>company))
        console.log(something)
        res.end(something)
    }else{
        res.writeHead(404,{'content-type':'text/html'});
        res.end('<h1>404. page not found </h1>')
    }
});

server.listen(8000, "127.0.0.1",()=>{
    console.log("listening to the port 8000")
})