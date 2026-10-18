const express=require("express")
const routes=express.Router()

routes.get("/",(req,res)=>{
    res.send("All Users")
})

routes.post("/",(req,res)=>{
    res.send("Create New User")
})

module.exports=routes