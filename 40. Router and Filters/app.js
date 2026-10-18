const express=require("express")
const app=express()
const port=3000

const orderRoutes=require("./router/order")
const userRoutes=require("./router/users")

app.use("/orders",orderRoutes)
app.use("/users",userRoutes)


app.listen(port,()=>{
console.log(`server listen on PORT:${port}`)
})