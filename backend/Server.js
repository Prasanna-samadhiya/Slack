const express=require("express")
const app=express()
const Userrouter=require("./Routes/UserRoute")
const Channelrouter=require("./Routes/ChannelRoute")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors=require("cors")
const cookieParser=require("cookie-parser")
const DBconnect = require("./Config")
dotenv.config()
app.use(express.json())
app.use(cookieParser())
DBconnect()

app.use("/user",Userrouter)
app.use("/channel",Channelrouter)



app.listen(process.env.PORT,(req,res)=>{
    console.log('listening to 5000')
})