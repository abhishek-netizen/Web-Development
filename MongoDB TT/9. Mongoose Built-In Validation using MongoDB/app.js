const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/mytut",{useNewUrlParser: true, useUnifiedTopology:true});

const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,  ///Validators
        unique : true,
        lowercase:true,
        trim: true, // space remover
        minlength: [2, "Minimum 2Letter"],    //min leanth and custo msg
        maxlength:30,
        enum:["reactjs"]

    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
  
})

const Playlist  = new mongoose.model("Playlist", playlistSchema);

const createDocument = async()=>{
    try{
        const todayPlaylist = new Playlist({
            name:"nodejs",   //these gaps will be corrected
            ctype: "todayType",
            videos: 50,
            author: "todayAuthor",
            active: true
        })
        
      //Insert single 
        const result = await todayPlaylist.save();
        console.log(result)
    }catch(err){
       console.log(err)
    }
}
createDocument();


