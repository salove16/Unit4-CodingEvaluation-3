const User=require("../models/userModel")

var jwt = require('jsonwebtoken')

require('dotenv').config()


const newToken=(user)=>{
    return jwt.sign({user},process.env.JWT_SECREAT_KEY )
}

const register=async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email})
        if(user)
        {
            return res.status(400).send("email alreday taken")
        }
        user = await User.create(req.body)

        const token=newToken(user)
        return res.status(200).send(user,token)
    } catch (err) {
        return res.status(500).send(err)
    }
}

const login=async(req,res)=>{

    try {
        let user=await User.findOne({email:req.body.email})
        if(!user)
        {
            return res.status(400).send("wrong email")
        }
        const token=newToken(user)
        return res.status(200).send(user,token)
    } catch (err) {
        return res.status(500).send(err)
    }
}


module.exports={register,login}