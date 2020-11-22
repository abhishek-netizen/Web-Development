//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash") // for lowercase and kababic urls


const homeStartingContent = "Machine Learning is presently the hottest field as it is being used in several other industries, mostly medical. Its pattern identifying ability is greatly working in detecting cancerous cells in a patient at an early stage, so currently ML is on high demand and it has several other plans to introduce in future. To get into such a happening field and to find a stance in such field is surely not an easy task, one has to invest their absolute dedication into learning the field’s basics to essential concepts and regularly practice them. With my practical experience, I have realized that you need to have a good understanding of probability theory, linear algebra, statistics, optimization, and information theory as the basis of Machine Learning. I took as much time as one year to learn the basic subjects. Though you don’t need mastery skills in these subjects once you have a confident focus on these basic topics, it will make your next journey smooth and easy";
const aboutContents = "Here we publish the articles which may ease your pain by reducing your valuable study time.🧑‍💻We publish our own articles as well as the articles if the user requests us to publish in here.🤞 For that user has to contact us by clicking the contact button on your right corner and filling all details and hitting the send button.So yeah collect all your pieces together, lets learn.. 🤗 all the best To our Practitioners🦸."
const contactContent = "Need help? If you're a learner on this platform and have questions or need technical assistance, please email us .";



const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

//home
app.get("/",function(req,res){
  res.render("home",{
    startingContent:homeStartingContent,
    posts:posts
  });

})

//ABOUT
app.get("/about",function(req,res){
  res.render("about",{aboutContenter:aboutContents});
})

//Contact

app.get("/contact",function(req, res){
  res.render("contact",{contactMe:contactContent});
})

//Compose get request
app.get("/compose",function(req, res){
   res.render("compose");
})

//Compose post request
app.post("/compose",function(req, res){
    const post = {
      title: req.body.postTitle,
      content: req.body.postBody
    };

    posts.push(post);
    res.redirect("/");

});

//For dinamic url for the individual blog posts
app.get("/posts/:postName", function(req,res){
  const requestedTitle = _.lowerCase([req.params.postName]);

  posts.forEach(function(post){
    const storedTitle = _.lowerCase([post.title]);

    if (storedTitle === requestedTitle) {
    res.render("post", {
      title: post.title,
      content: post.content
    });
    }
  });



})





app.listen(3000, function() {
  console.log("Server started on port 3000");
});
