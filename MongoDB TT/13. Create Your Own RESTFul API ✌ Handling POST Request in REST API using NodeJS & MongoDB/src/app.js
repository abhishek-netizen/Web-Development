const express  = require('express');
//requiring database 
require("./db/connection")
const app = express();
const Student = require('./models/students');
const port = process.env.PORT || 8000

app.use(express.json());

//create a new students
app.post("/students",(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body) //getting from postman
    user.save().then(()=>{
        res.status(200).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    }) //saving to database
    res.send("Hello from the student side")
})

app.listen(port,()=>{
    console.log(`listening at ${port}`);
})