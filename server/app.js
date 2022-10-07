const express = require('express')
require('dotenv').config()
const app=express()
const port=process.env.PORT||8000
app.use('/api/goals',require('./routes/goalRoutes.js'))
app.listen(port,()=>{
    console.log('server connected on port '+port)
})