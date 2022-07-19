const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        min:4,
        max:15,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        //min:8,
    },
    coverPhoto:{
        type:String,
        default:"",
    },
    profilePicture:{
        type:String,
        default:"",
    },
    followers:{
        type:Array,
        default:[],
    },
    following:{
        type:Array,
        default:[],
    },
    desc:{
        type:String,
        max:50,
    },
    place:{
        type:String,
        max:20,
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('User',userSchema);