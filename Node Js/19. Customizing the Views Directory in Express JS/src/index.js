const express = require('express');
const app = express();
const path = require('path')


const templatePath = path.join(__dirname,"../views")


app.set("view engine","hbs");
app.set("views",templatePath);

//to link static file use followinf code
app.use(express.static(templatePath));

//template engine route
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/", (req,res)=>{
    res.send("hello from the express serer")
})

app.listen(8000, ()=>{
    console.log("Listining to the port 8000")
})