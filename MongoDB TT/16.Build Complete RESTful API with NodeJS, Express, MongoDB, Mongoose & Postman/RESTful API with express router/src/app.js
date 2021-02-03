const express = require("express");
const router = require('./routers/Men')
const app = express();
// requiring connection to mongo
require("../src/db/conn")

const port = process.env.PORT || 3000;
//using json data in express and calling through postman
app.use(express.json())

//calling the router all the url's are stored over there
app.use(router);


app.listen(port, ()=>{
    console.log(`listening at ${port}`)
})