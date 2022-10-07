const getGoals=(req,res)=>{
    req.status(200).json({message:'fetch goals'})
}
const postGoals=(req,res)=>{
    req.status(200).json({message:'fetch goals'}) 
}
const putGoals=(req,res)=>{
    res.status(200).json({message:`put ${req.params.id}`})
}
const deleteGoals=(req,res)=>{
    res.status(200).json({message:`delete ${req.params.id}`})
}
module.exports={getGoals,postGoals,putGoals,deleteGoals}