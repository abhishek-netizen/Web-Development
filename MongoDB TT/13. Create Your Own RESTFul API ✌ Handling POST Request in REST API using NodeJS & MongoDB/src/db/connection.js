const mongoose = require('mongoose');
// to use below code we have to reuire them in express file

//thing after local host is database name
mongoose.connect("mongodb://localhost:27017/students-api",{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("connection is successfull")
}).catch((e)=>{
    console.log("No connection");
})
