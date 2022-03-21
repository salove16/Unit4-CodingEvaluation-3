const mongoose=require("mongoose")

const commentSchema=mongoose.Schema({
    body:{type:Number,required:true},
  
    bookId:{type:mongoose.Schema.Types.ObjectId,ref:"book",required:true},
    bookId:{type:mongoose.Schema.Types.ObjectId,ref:"book",required:true}
    
    
},
{
    timeStamps:true,
    versionKey:false
})

const Comment=mongoose.model("book",commentSchema)



module.exports=Comment