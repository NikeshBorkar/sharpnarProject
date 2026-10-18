const express=require("express")

const routes=express.Router();

routes.get("/",(req,res)=>{
    res.send("All Orders")
})

routes.post("/",(req,res)=>{
    res.send("Create New Order")
})

module.exports=routes