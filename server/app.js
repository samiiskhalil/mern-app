const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const {protect}=require('./middleware/authMiddleware.js')
const {errorHandler}=require('./middleware/errorMiddleware.js')
const app=express()
mongoose.connect(process.env.MONGO_CONNECTION,(err)=>console.log(err),()=>console.log('connected'))
app.use(errorHandler)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/goals',protect)

const port=process.env.PORT||8000
app.use('/api/goals',require('./routes/goalRoutes.js'))
app.use('/api/users',require('./routes/userRoutes.js'))
app.listen(port,()=>{
    console.log('server connected on port '+port)
})