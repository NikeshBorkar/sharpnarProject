const express=require("express")
const app=express()
const db=require("./utils/db-connection")
const userRoute=require("./routes/usersRoutes")
const busRoute=require("./routes/busesRoutes")

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/users",userRoute)
app.use("/buses",busRoute)


app.listen(3000,()=>{
    console.log("server listen on port:3000")
})