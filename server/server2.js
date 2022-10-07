const express = require('express')
require('dotenv').config()
const jwt=require('jsonwebtoken')
const app=express()
app.use(express.json())
let reTokens=[]
app.post('/token',(req,res)=>{
    const refreshToken=req.body.token

})
app.post('/login',(req,res)=>{
    // authenticate user
    console.log(req.body)
const userName=req.body.name
const user={name:userName}
const accessToken=generateAccessToken(user)
const refreshToken=jwt.sign(user,process.env.REFRESH_TOKEN_SECRET)
reTokens.push(refreshToken)
res.json({accessToken,refreshToken})
})
function generateAccessToken(user){
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'30s'})
}
app.listen(4000,()=>console.log('auth.js'))