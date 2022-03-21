const express=require("express")
const connect=require("./configs/db")

const app=express()
app.use(express.json())

const {register,login}=require("./controllers/authController")

const registerVlaidator=require("./middleware/registerValidator")



app.use("/register",registerVlaidator,register)
app.use("/login",login)



app.listen(4000,async()=>{
    try {
        await connect()
        console.log("listening to 4000")
        
    } catch (err) {
        console.log(err)
        
    }
})