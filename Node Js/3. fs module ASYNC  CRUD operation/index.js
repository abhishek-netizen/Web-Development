// fs module Asyncronus way.
//Async main rule is they must have callbacks.

const fs = require("fs");

// passing anonymous call back function as argumnets
fs.writeFile("test.txt", "Async data writing", (err)=>{
  console.log("successfull wrote");
  console.log(err);
});

// lets append
fs.appendFile("test.txt"," appending for sure",(err)=>{
    console.log("successfull")
    console.log(err)
})

//remember while reading we must pass two argument
// and error always must be your first arg
//for buffer
fs.readFile("test.txt",(err,data)=>{
    console.log(data);
})

//for non-buffer
fs.readFile("test.txt","UTF-8",(err,data)=>{
    console.log(data);
})