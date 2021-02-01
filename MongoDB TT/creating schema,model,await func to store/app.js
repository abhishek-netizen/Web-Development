const mongoose = require("mongoose");
//you have to guve path //something afte url is depreciated warnings
//connection creation and creating a new db
mongoose.connect ("mongodb://localhost:27017/mytut",{ useNewUrlParser: true, useUnifiedTopology: true});
// schema
// A Mongoose schema defines the strcuture of the document
//default values, validators etc..

const playlistSchema  = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

// A Mongoose model is a wrapper on the Mongoose schema.
// A mongoose schema defines the structure of the document.
// default values, validtors etc .. whereas a Mongoose model 
// provides an interface to the database for creating,
// querying, updating, deleting recors, etc.

//collection creation Playlist should be cascal case and it should be singular
const Playlist = new mongoose.model("Playlist", playlistSchema);

//async function to wait untill data get stored
//once after save console log it
const createDocument = async()=>{
    try{
        const reactPlaylist = new Playlist({
            name:"Node JS",
            ctype: "Back end",
            videos: 90,
            author: "node author",
            active: true
        })
        
        const result = await reactPlaylist.save();
        console.log(result)

    }catch(err){
        console.log(err);
    }

}

//call the function
createDocument();