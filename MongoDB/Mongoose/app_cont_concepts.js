//jshint esversion:6
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser:true,useUnifiedTopology: true},);


//Creating Schema
const fruitSchema = new mongoose.Schema({
  name:String,
  rating: {
    type:Number,
    min:1,
    max:10
  },
  review: String
});

//Use schema to create a model
//like database
const Fruit = mongoose.model("Fruit",fruitSchema);

//like table or you can call as collections
const fruit = new Fruit({
  name:{
    type:String,
    required:[true,"please check your database no name specified!"]
  },
  rating:2,
  review:"Pretty solid as Fruit"
});

fruit.save()

/*const Kiwi = new Fruit({
  name:"Kiwi",
  rating:15,
  review:"Kiwi kiwi kiwi"
});

fruit.save()
const Orange = new Fruit({
  name:"Orange",
  rating:10,
  review:"orange color"
});

const Banaana = new Fruit({
  name:"Banaana",
  rating:12,
  review:"ghgh"
});*/

//Insert alll 3 fruits
/*Fruit.insertMany([Kiwi,Orange,Banaana],function(err){
  if(err){
    console.log(err);
  }else{
    console.log("successfully inserted to db")
  }
})*/

//Read from the database

/*Fruit.find(function(err,fruits){
  if (err){
    console.log(err);
  }else{
    //console.log(fruits);
//foreach looop to loop through to get all the fruits names
mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name)
    })
  }
})*/

//Update something on database
//update this id name to peach
/*Fruit.updateOne({_id:"5fc143eb43c693352c60f7c2"},{name:"Peach"},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("done!")
  }
})
*/

//Delete something on the Fruit database
/*Fruit.deleteOne({name:"Orange"},function(err){
  if(err){
    console.log(err)
  }else{
    console.log("Done deleted!!")
  }
})*/

//Delete something in the People database
// same as above but first define the people

//Observe carefully the favfruite
const personSchema = new mongoose.Schema({
  name:String,
  age:Number,
  favoriteFruit:fruitSchema
})

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name:"pineapple",
  score:9,
  review:"cool fruit"
})

pineapple.save()


const person = new Person({
  name:"Amy",
  age:12,
  favoriteFruit:pineapple
});

person.save()

/*People.deleteMany({name:John},function(err){
  if(err){
    console.log(err)
  }else{
    console.log("done deleted John!")
  }
});*/




//fruit.save()
