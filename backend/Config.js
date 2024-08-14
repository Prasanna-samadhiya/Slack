const mongoose=require("mongoose")
const dotenv=require("dotenv")

const DBconnect=async()=>{
    await mongoose.connect(process.env.URI).then(
    ()=>{console.log("DB connected")
}).catch((err)=>{
    console.log(err)
})
}

module.exports=DBconnect