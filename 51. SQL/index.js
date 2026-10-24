const express=require("express")
const app=express()
const studentRoutes=require("./routes/studentsRoutes")
const db=require("./utils/db-connection")

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/students",studentRoutes)

app.listen(3000,()=>{
    console.log("server listen on port:3000")
})