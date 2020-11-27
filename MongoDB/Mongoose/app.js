//jshint esversion:6
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser:true,useUnifiedTopology: true},);


//Creating Schema
const fruitSchema = new mongoose.Schema({
  name:String,
  rating: Number,
  review: String
});

//Use schema to create a model
//like database
const Fruit = mongoose.model("Fruit",fruitSchema);

//like table or you can call as collections
const fruit = new Fruit({
  name:"Apple",
  rating:7,
  review:"Pretty solid as Fruit"
});


const Kiwi = new Fruit({
  name:"Kiwi",
  rating:15,
  review:"Kiwi kiwi kiwi"
});

const Orange = new Fruit({
  name:"Orange",
  rating:10,
  review:"orange color"
});

const Banaana = new Fruit({
  name:"Banaana",
  rating:12,
  review:"ghgh"
});

//Insert alll 3 fruits
Fruit.insertMany([Kiwi,Orange,Banaana],function(err){
  if(err){
    console.log(err);
  }else{
    console.log("successfully inserted to db")
  }
})

//Read from the database

Fruit.find(function(err,fruits){
  if (err){
    console.log(err);
  }else{
    console.log(fruits);
  }
})

//fruit.save()
