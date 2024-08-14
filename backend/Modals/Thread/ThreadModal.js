const mongoose=require('mongoose')


const ThreadSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    messages:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "message"
        }
    ]
},{timestamps:true})

const User = mongoose.model('Threads', ThreadsSchema);
module.exports = User;