const express=require("express")
const { CreateChannel } = require("../Controllers/ChannelController")
const { Authentication } = require("../Controllers/UserContoller")

const router=express.Router()

router.post("/createchannel",Authentication,CreateChannel)

module.exports=router