  const express = require('express')
  require('dotenv').config()
 const jwt = require('jsonwebtoken');
  const app=express()
app.use(express.json()) 
  const posts=[
    {userName:'sami',title:'post1'},
    {userName:'samia',title:'post12'},
    {userName:'samidas',title:'post11'},
    {userName:'samidas',title:'post11'},
    {userName:'samida',title:'post13'},
    {userName:'samidas',title:'post5'},
    {userName:'samida',title:'post2'},
]
  app.get('/posts',authenticateToken,(req,res)=>{
    console.log(req.user)
    res.json(posts.filter(user=>req.body.userName===user.name))
  })
app.post('/login',(req,res)=>{
    // authenticate user
const userName=req.body.name
const user={name:userName}
console.log(user)
const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
console.log(accessToken)
res.json({accessToken})
})

function authenticateToken(req,res,next){
const authHeader=req.headers['authorization']
console.log(req.headers)
const token= authHeader&& authHeader.split(' ')[1]
if(!token)
return res.sendStatus(401)
console.log(token)
jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
    if(err){
        console.log(err)
        return res.sendStatus(403)
    }
    req.user=user.name
    console.log(req.user)
    next()

})}
  app.listen(2000,()=>console.log('a'))