const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/mytut",{useNewUrlParser: true, useUnifiedTopology:true});

const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type:Date,
        default: Date.now()
    }
})

const Playlist  = new mongoose.model("Playlist", playlistSchema);

// const createDocument = async()=>{
//     try{
//         const todayPlaylist = new Playlist({
//             name:"today",
//             ctype: "todayType",
//             videos: 50,
//             author: "todayAuthor",
//             active: true
//         })
        
//         const tomPlaylist = new Playlist({
//             name:"tom",
//             ctype: "tomType",
//             videos: 55,
//             author: "tomAuthor",
//             active: true
//         })
        
//         const dayaftPlaylist = new Playlist({
//             name:"dayAftTom",
//             ctype: "dayaftType",
//             videos: 60,
//             author: "tomAuthor",
//             active: true
//         })
//         //INSERT MANY COLLECTIONS
//         const result = await Playlist.insertMany([todayPlaylist,tomPlaylist,dayaftPlaylist])
//         console.log(result)
//     }catch{
//        console.log(err)
//     }
// }

// createDocument();

const getDocument = async()=>{
    try{
    const result = await Playlist
    .find({author: "node author"})
    .select({name: 1})    //ascending sort
    .select({name: -1})   //desceding sort 
    .sort()
    .countDocuments()     //gives the number of count
    .limit(5)             //Fetch limited number of documents from the collection
    console.log(result)
    }catch(err){
        console.log(err);
    }
}

getDocument();