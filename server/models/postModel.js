const mongoose = require('mongoose')
const {Schema} = mongoose

const postSchema = new Schema({
    desc:{
        type:String,
        required:true,
        max:50,
    },
    img:{
        type:String,
    },
    likes:{
        type:Array,
        default:[],
    },
    userId:{
        type:String,
        required:true,
        
    }

},{
    timestamps:true,
})

module.exports = mongoose.model('post',postSchema);