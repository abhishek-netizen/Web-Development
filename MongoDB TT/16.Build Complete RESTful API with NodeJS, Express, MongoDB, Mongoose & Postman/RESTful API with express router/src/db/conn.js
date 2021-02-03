const mongoose = require('mongoose');

//connecting to mongoose database.  olympics is a database name
mongoose.connect("mongodb://localhost:27017/olympics",{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log("No connection successfull");
})
