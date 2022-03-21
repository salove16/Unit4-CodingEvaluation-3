const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:false},
    age:{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    profileImage:{type:String,required:true}
},
{
    timeStamps:true,
    versionKey:false
})

const User=mongoose.model("user",userSchema)



module.exports=User