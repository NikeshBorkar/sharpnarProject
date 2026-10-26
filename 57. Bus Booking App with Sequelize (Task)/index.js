const express=require("express")
const app=express()
const db=require("./utils/db-connection")
const userRoute=require("./routes/usersRoutes")
const busRoute=require("./routes/busesRoutes")

const userModel=require("./models/users");
const busModel=require("./models/buses");
const bookingModel=require("./models/bookings")
const paymentModel=require("./models/payments")

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/users",userRoute)
app.use("/buses",busRoute)


db.sync({force:false}).then(()=>{
   app.listen(3000,()=>{
    console.log("server listen on port:3000")
   })
}).catch((err)=>{
    console.log(err)
})