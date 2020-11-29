//jshint esversion:6
//reason to mention above line is,
//When relying upon ECMAScript 6 features such as const, you should set this option so JSHint doesn't raise unnecessary warnings.

const express = require("express");
const bodyParser = require("body-parser");
//Using database to store
const mongoose = require("mongoose");
const _ = require("lodash");


// i am using express js in my app
const app = express();
// embedding ecma js for multiple html rendering

const items = ["buy food","eat food","cook food"]

const workItems = [];

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

//connect mongoose
//mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});
mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});
//creating item schema
const itemsSchema = {
   name:String
}
//creating a mongoose model
const Item = mongoose.model("Item",itemsSchema);
//creating the documents
const item1 = new Item({
  name:"welcome to your todo list"
});
const item2 = new Item({
  name:"Hit the + button to add a new item"
});
const item3 = new Item({
  name:"<-- hit this to delete an item"
});
//lets put all three things into an array
const defaultItems = [item1,item2,item3];
//lets use insert function in to insert all these items at a time

const listSchema = {
  name:String,
  items:[itemsSchema]
}

const List = mongoose.model("List", listSchema);



app.get("/", function(req, res) {

      Item.find({},function(err,foundItems){
               if (foundItems.length ===0 ){
                 Item.insertMany(defaultItems, function(err){
                   if(err){
                     console.log(err);
                   }else{
                     console.log("congo insertion done successfully!")
                   }
                 });
                 res.redirect("/")
               }else{
                 res.render("list", {listTitle: "Today",newListItems: foundItems});
               }
      });
    });

// Dynamic url
    app.get("/:customListName",function(req, res){
      const customListName = _.capitalize(req.params.customListName);

      List.findOne({name:customListName},function(err,foundList){
        if(!err){
          if(!foundList){
            //create a new list
            const list = new List({
              name:customListName,
              items:defaultItems
            });
            list.save();
            res.redirect("/" + customListName)
          }else{
          res.render("list", {listTitle: foundList.name,newListItems: foundList.items});
        }
      }
      });
    })




    app.post("/", function(req, res){
        const itemName  = req.body.newItem;
        const listName = req.body.list;

        const item = new Item({
          name:itemName
        });

        if (listName === "Today"){
          item.save();
          res.redirect("/")
        }else{
          List.findOne({name:listName},function(err,foundList){
            foundList.items.push(item);
            foundList.save();
            res.redirect("/" + listName);
          })
        }

    });

    app.post("/delete",function(req,res){
      const checkedItemId = req.body.checkbox;
      const listName = req.body.listName;
      if (listName === "Today"){
        Item.findByIdAndRemove(checkedItemId, function(err){
          if(!err){
            console.log("succesfully deleted the checked item")
            res.redirect("/");
          }
        });
      }else{
        List.findOneAndUpdate({name:listName},{$pull:{items:{_id:checkedItemId}}}, function(err,foundList){
          if(!err){
            res.redirect("/" + listName);   
          }
        });
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
