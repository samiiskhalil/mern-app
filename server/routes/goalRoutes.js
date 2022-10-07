const express = require('express')
const {getGoals, postGoals,putGoals, deleteGoals}=require('../controllers/goalsController.js')
const router=express.Router()
 router.get('/',getGoals=>{
    res.send('s')
 })
 router.post('/',postGoals)
 router.put('/:id',putGoals)
 router.delete('/:id',deleteGoals)
module.exports=router