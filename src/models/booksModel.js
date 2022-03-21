const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    likes:{type:Number,required:true},
    coverImage:{type:String,required:true},
    content:{type:String,required:false},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
    
    
},
{
    timeStamps:true,
    versionKey:false
})

const Book=mongoose.model("book",bookSchema)



module.exports=Book