const Goal = require('../models/goalModel.js');
const getGoals=async(req,res)=>{
    console.log(req.user)
    const goals=await Goal.find({user:req.user.id})
    res.status(200).json(goals)
}
const postGoals=async (req,res)=>{try{
    console.log(req.user.id)
    
      const goal=await (await Goal.create({text:req.body.text,userId:req.user.id}))

      return res.status(200).json(goal)
 }
    catch(err){
        console.log(err)
    }
}
const putGoals= async (req,res)=>{
    const goal= await Goal.find({userId:req.user.id})
    goal=req.body
    await goal.save()
    res.status(200).json({message:`put ${goal}`})
}
const deleteGoals=async (req,res)=>{
    await Goal.deleteOne({userId:req.user.id})
    res.status(200).json({message:`delete ${req.params.id}`})
}
module.exports={getGoals,postGoals,putGoals,deleteGoals}