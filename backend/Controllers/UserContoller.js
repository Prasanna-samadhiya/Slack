const jwt=require("jsonwebtoken")
const usermodel=require("../Modals/User/UserModal")
const dotenv=require("dotenv") 
const bcrypt=require("bcrypt")
dotenv.config()

const Authentication=async(req,res,next)=>{
     const {my_token}=req.cookies
     authtoken=my_token
     if(!authtoken){
        res.status(500).json({
            message:"User not logged in yet",
            UserLogged:false
        })
     }
     const decoded=jwt.verify(authtoken,process.env.SECRET)
     console.log(decoded)
     req.user=await usermodel.findById(decoded.id)
     console.log(req.user)
     next()
}

const UserRegister=async(req,res)=>{
      try
      {
        const {username,fullname,email,password}=req.body
        const result=await usermodel.create({username,fullname,email,password})
        res.status(201).json(result)
      }catch(err){
        console.log(err)
      }
}

const UserLogin=async(req,res)=>{
     try{
       const {email,password}=req.body
       const result=await usermodel.findOne({email:email})
       if(!result){
         res.status(401).json({
            message:"User not found",
            LoggedIn:"failed"
         })
       }
       const match=bcrypt.compare(password,result.password)
       if(!match){
        res.status(401).json({
            message:"Write correct password"
        })
       }

       const payload = {
        id: result._id,
        name: result.username,
        };
  
      const token=jwt.sign(
        payload,
        process.env.SECRET,
        { expiresIn: 86400 } );
      return res.cookie("my_token",token,{expiresIn:"2h"}).status(200).json({
        message:"Logged in successful",
        user:result
      })
    
       
     }catch(err){
        console.log(err)
     }
}

const GetAllusers=async(req,res)=>{
     try{
       const result= await usermodel.find()
       if(!result){
        res.status(401).json({
            message:"no users yet"
        })
       }
       res.status(201).json(result)
     }catch(err){
        console.log(err)
     }   
}

module.exports={UserRegister,UserLogin,GetAllusers,Authentication}