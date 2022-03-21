const multer  = require('multer')
const path=require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../My-upload"))
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now()
      cb(null,uniquePrefix+'_'+file.originalname)
    }
  })

  function fileFilter (req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    // To reject this file pass `false`, like so:


    if(file.mimetype=='image/png'||file.mimetype=='image/jpge')
    {
        cb(null, true)
    }
    else{
        cb(new error("incorrect"), false)
    }
   
  
    // To accept the file pass `true`, like so:
    
  
    // You can always pass an error if something goes wrong:
    cb(new Error('I don\'t have a clue!'))
  
  }



const options=multer({
    storage,fileFilter,limits:{
        fileSize:1024*1024*5
    }
})

const uploads=options


module.exports=uploads