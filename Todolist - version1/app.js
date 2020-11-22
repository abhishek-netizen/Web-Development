//jshint esversion:6
//reason to mention above line is,
//When relying upon ECMAScript 6 features such as const, you should set this option so JSHint doesn't raise unnecessary warnings.

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


// i am using express js in my app
const app = express();
// embedding ecma js for multiple html rendering

const items = ["buy food","eat food","cook food"]

const workItems = [];

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req, res) {


    let day = date.getDate();

      res.render("list", {listTitle: day,newListItems: items});

    });

    app.post("/", function(req, res){

      let item = req.body.newItem;

      if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
      } else {
        items.push(item);
        res.redirect("/");
      }



    });

    app.get("/work",function(req,res){
      res.render("list",{
        listTitle:"Work List", newListItems:workItems
      });
    });

    app.post("/work",function(req,res){
      let item = req.body.newItem;
      workItems.push(item);
      res.redirect("/work");
    });


    app.get("/about",function(req,res){
      res.render("about");
    });



    //var currentday = today.getDay();
    //if (currentday == 6 || currentday == 0) {
    //day = "weekend"
    //res.sendFile(__dirname + "/weekend.html");
    //res.render("list",{kindOfDay:day})
    //}else{
    //day = "weekday"
    //res.sendFile(__dirname + "/weekday.html");
    //res.render("list",{kindOfDay:day})
    //}
    //});


    app.listen(3000, function() {
      console.log("server up and running at port 3000")
    })
