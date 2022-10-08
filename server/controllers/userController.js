const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const asyncHandler=require('async-handler')
const User=require('../models/userModel.js')
const loginUser=async(req,res)=>{
const {email,password}=req.body
const user=await User.findOne({email})
if(user&&(await bcrypt.compare(password,user.password)))
return res.json({user,token:genToken(user.id)})
return res.send('invalid credentials')
}
const registerUser=async(req,res)=>{
  
    const {name,password,email}=req.body
const salt=await bcrypt.genSalt(10)
const hashedPassword=await bcrypt.hash(password,salt)
const user= await User.create({name,email,password:hashedPassword})
res.json({user,token:genToken(user.id)})
}
const getMe=async(req,res)=>{
    res.json(req.user)
}
const genToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})
}
module.exports={registerUser,loginUser,getMe}