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


// By using deleteDocument
const deleteDocument = async(_id)=>{
   try{
    const result = await Playlist.deleteOne({_id});
    console.log(result);
   }catch(err){
       console.log(err);
   }
}
deleteDocument("60183d1a535475178c860d75");

// By using findByIdAndDelete

const deleteDocument = async(_id)=>{
      try{
        const result = await Playlist.findByIdAndDelete({_id});
        console.log(result);
      }catch(err){
        console.log(err)
      }
}
deleteDocument("6018412148d90d2f74ce9ff8")