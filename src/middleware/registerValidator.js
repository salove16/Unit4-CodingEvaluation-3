const { body, validationResult } = require('express-validator');
const express = require('express');
const upload=require("../middleware/upload")
const router = express.Router();



router.post("/",
body("firstName")
.not()
.isEmpty()
.isLength({min:3,max:30})
.withMessage("invalid"),
body("lastName")
.not()
.isEmpty()
.isLength({min:3,max:30})
.withMessage("invalid"),
body("age")
.not()
.isEmpty()
.isNumeric
.withMessage("age must be number between 1 to 150")
.custom((value)=>{
    if(value<=1||value>=150)
    {
        return true
    }
}),
body("email")
.not()
.isEmpty()

.withMessage("invalid")
.isEmail()
.withMessage("invalid"),
upload.single("profileImage"),
async(req,res)=>{
    try {
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()})
    } 
    return next()
}
    catch (err) {
        console.log(err)
    }
})

module.exports=router