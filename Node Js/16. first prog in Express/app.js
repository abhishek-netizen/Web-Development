//require module
const express = require('express');
//create an application using requried module
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello from the express</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h1>Hello world from the about page</h1>")
})

app.listen(8000,()=>{
    console.log("listening the port at 8000")
})

















//get-read
//post-create
//put-update
//delete-delete

//app.get(route, callback)
// the callback func has 2 paramters, req and res
//the req object represents HTTP req and 
// Has properties for the request query string, paramters and body,
//HTTP headers, etc

//similarly, the response object represents the HTTP response
// that the Express app sends when it recievers an HTTP requests


