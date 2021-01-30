const express = require('express');
const app = express();
const path = require('path')

const staticPath = path.join(__dirname,"../public")
console.log(__dirname) //C:\Users\hp\Desktop\learnnode\express tut\src
console.log(staticPath) //C:\Users\hp\Desktop\learnnode\express tut\public

//to link static file use followinf code
app.use(express.static(staticPath));

app.listen(8000, ()=>{
    console.log("Listining to the port 8000")
})