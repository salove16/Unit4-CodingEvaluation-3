const express=require("express")
const router=express.Router()
const User=require("../models/userModel")


router.get("/",async(req,res)=>{
    try {
        const page=req.query.page
        const pageSize=req.query.pageSize
        const skip=Math.ceil((page-1)*pageSize)
        const user=await User.find().skip(skip).limit(pageSize).lean().exec()
        return res.send(user)
    } catch (err) {
     return res.send(err) 
    }
})

module.exports=router