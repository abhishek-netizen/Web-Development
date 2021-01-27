//Require fs module for nodeJs
const fs = require("fs")
// //write a new file as read.txt
fs.writeFileSync("read.txt","Good morning")
// //if you write again, it will overwrites it
fs.writeFileSync("read.txt","Good night")

//Append to the existing data inside the file.
fs.appendFileSync("read.txt", "Good morning");

//rename
fs.renameSync("read.txt","readwrite.txt");

// fs.readFileSync("read.txt");

const buf_data = fs.readFileSync("read.txt");

//if you print this you will get a buffering data
console.log(buf_data)

//if you want to get the data then do stringify

console.log(buf_data.toString())