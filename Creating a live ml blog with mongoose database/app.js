//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const homeStartingContent = "Machine Learning is presently the hottest field as it is being used in several other industries, mostly medical. Its pattern identifying ability is greatly working in detecting cancerous cells in a patient at an early stage, so currently ML is on high demand and it has several other plans to introduce in future. To get into such a happening field and to find a stance in such field is surely not an easy task, one has to invest their absolute dedication into learning the field’s basics to essential concepts and regularly practice them. you need to have a good understanding of probability theory, linear algebra, statistics, optimization, and information theory as the basis of Machine Learning.Having a community makes your journey smooth and easy; ";
const aboutContent = "We share resources in here.🤞 lets learn.. 🤗 all the best To our Practitioners🦸";
const contactContent = "Need help? If you're a learner on this platform and have questions or need technical assistance, please email us .";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://adminblog:Test1234@cluster0.dowl6.mongodb.net/blogDB", {useNewUrlParser: true});

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res){

  Post.find({}, function(err, posts){
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
      });
  });
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });


  post.save(function(err){
    if (!err){
        res.redirect("/");
    }
  });
});

app.get("/posts/:postId", function(req, res){

const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){
    res.render("post", {
      title: post.title,
      content: post.content
    });
  });

});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

let port = process.env.PORT;
if (port== null || port == ""){
  port = 3000;
}
app.listen(port, function(){
  console.log("Server started Successfully")
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
