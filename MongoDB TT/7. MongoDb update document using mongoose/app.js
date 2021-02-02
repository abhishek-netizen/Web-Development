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
//-------------------------------------Update-----------------------------------

//Update by using updateOne

const updateDocument = async(_id)=>{
    const result = await Playlist.updateOne({_id},{
            $set:{
                name:"Angular"
            }
    });
    console.log(result)
}
updateDocument("60183d1a535475178c860d75");


// Update by using findByIdAndUpdate
// you should include depreciated warning  useFindAndModify: false
// and also you should include new : true to update old with new

const updateDocument = async (_id)=>{
  
    try{
        const result = await Playlist.findByIdAndUpdate({_id},{
            $set:{
                name: "SQL"
            }
        },{
            useFindAndModify: false
        })
        console.log(result)
    }catch(err){
        console.log(err)
    }


}
// Calling
updateDocument("60183d1a535475178c860d75");

//Insertion of new:true

const updateDocument = async (_id)=>{
  
    try{
        const result = await Playlist.findByIdAndUpdate({_id},{
            $set:{
                name: "NOSQL"
            }
        },{
            new:true,
            useFindAndModify: false
        })
        console.log(result)
    }catch(err){
        console.log(err)
    }


}

// Calling
updateDocument("60183d1a535475178c860d75");