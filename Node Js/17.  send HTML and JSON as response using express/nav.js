const { json } = require('express');
const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>HOME route</h1>")
})
//with status code
app.get("/",(req,res)=>{
    res.status(200).send("<h1>HOME route</h1>")
})

// res.write() - Multiple HTML element 
// res.send() - send all those elemets once

app.get("/",(req,res)=>{
    res.write("<h1>HOME route one</h1>");
    res.write("<h1>HOME route two</h1>");
    res.send();
})

// sending object it happebs in .send({})
// in web i will get JSON.
app.get("/object", (req,res)=>{
    res.send({
        id:1,
        city:'Bengaluru',
        temp: '24.5°c'
    })
})

//sending array of an object .send([{}])
app.get("/arrayofobject", (req,res)=>{
    res.send([{
        id:1,
        city:'Bengaluru',
        temp: '24.5°c'
    },
    {
        id:2,
        city:'Delhi',
        temp: '35.5°c'
    }
])
})

//same thing you can send by mentioning .json([{}])
// i will get same ouput as above
app.get("/json", (req,res)=>{
    res.json([{
        id:1,
        city:'Bengaluru',
        temp: '24.5°c'
    },
    {
        id:2,
        city:'Delhi',
        temp: '35.5°c'
    },
    {
        id:3,
        city: 'America',
        temp: '25.55'
    }
])
})

//comparing json and res.send({})
// the methods are identical when an object or array is passed.
// but res.json() will also convert non-object,
// such as null and undefined, which are not valid json.



app.listen(8000, ()=>{
    console.log("listening to the port 8000")
})
