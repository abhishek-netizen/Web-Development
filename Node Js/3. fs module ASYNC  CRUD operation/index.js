// fs module syncronus way.

const fs = require('fs');

//To create a folder
const path = require('path');
fs.mkdir(path.join(__dirname,'test'),(err)=>{
    if(err){
        return console.log(err);
    }
    console.log("Directory created successfully ")
})
or
fs.mkdirSync('test')

//Create a file and write to it
fs.writeFileSync("test.txt","writing a file");

// append the data to existing data in the file
fs.appendFileSync("test.txt", "adding this extra piece of data to the file");

//Read data and you will get buffer
const d_read = fs.readFileSync("test.txt")
console.log(d_read.toString())

//Incase if you want to read without buffer data add utf
const content = fs.readFileSync('test.txt', 'utf8');
console.log(content)

//Rename your file
fs.renameSync("test.txt","newTest.txt");

//To delelte file
fs.unlinkSync("read.txt");

//To remove directory.
fs.rmdirSync()