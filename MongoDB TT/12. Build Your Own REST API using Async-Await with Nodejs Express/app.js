const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/mytut",{useNewUrlParser: true, useUnifiedTopology:true});
const validator = require('validator')

const PlaylistSchema = new mongoose.Schema({
    name: String,
    place: String,
    phone: Number,
    email:{
        type: String,
        validate(value){
            if(validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    }
})

const Playlist = new mongoose.model("Playlist",PlaylistSchema);

const createDocument = async()=>{
    const Datalist = new Playlist({
        name: "tony Stark",
        place: "us",
        phone:78978,
        email: 'raghavan@gmail'
    })
    const result = await Datalist.save();
    console.log(result)
}

createDocument();