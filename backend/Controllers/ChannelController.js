const channelmodel=require("../Modals/Channel/ChannelModal")
const userModel=require("../Modals/User/UserModal")
const {UndefinedHandler,ErrorHandler,CorrectHandler}=require("../Utilities/utilites")

const CreateChannel=async(req,res)=>{
    const user=req.user
    if (!user){

        return res.status(401).json ({
            success : false,
            message : "Not logged in yet "
        })

      }

    const authUser = await userModel.findById(user._id)
    const {name,description}=req.body

    if (!name) {
        return res.status(400).json ({
            success : false,
            message : "Channel Name is required!!! "
        })
   }
   const NewChannel = await channelmodel.create ({
            
    name : name,
    description : description ? description : "",
    createdBy : authUser._id

})

if (!NewChannel){

   return res.status(400).json ({
       success : false,
       message : "Channel could not be created "
   })
    
}

//  Applyinhg data Association between channel and user model :-
 authUser.channels.push(NewChannel._id)

 await authUser.save()

 return res.status(201).json ({
    success : true,
    message : "Channel Created SuccessFully",
    NewChannel
 })


}

module.exports={CreateChannel}