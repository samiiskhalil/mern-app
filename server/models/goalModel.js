const mongoose = require('mongoose')
const goalSchema=mongoose.Schema({
   userId:{type:mongoose.Types.ObjectId,ref:'User'}
    , text:{ 
        type:String,
        required:true,
        
    }
},{timestamps:true})
module.exports=mongoose.model('Goal',goalSchema)