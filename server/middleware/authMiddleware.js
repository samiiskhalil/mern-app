const jwt = require('jsonwebtoken');
const User=require('../models/userModel.js')
const protect=async(req,res,next)=>{
   
    if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer'))
    try{
            //geet token from header
        
           const   token=req.headers['authorization'].split(' ')[1]
           if(!token)
              return res.send('not authorized no token')
                 const decoded=jwt.verify(token,process.env.JWT_SECRET)
                 req.user=await User.findById(decoded.id).select('-password')
                next()
        }
               catch(err){
               return res.json({succes:false,err:err.message})
               
            }                 }   
module.exports={protect}