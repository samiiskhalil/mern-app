const mongoose = require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'please add password']
    },
    email:String,
    password:String

},{
    timestamps:true
})
module.exports=mongoose.model('User',userSchema)