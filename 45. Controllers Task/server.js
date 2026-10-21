const express=require("express")
const app=express()
const port=3000
const usersRoutes=require("./routes/userRoutes")
const productsRouter=require("./routes/productRoutes")
const cartsRouter=require("./routes/cartRoutes")

app.use("/users",usersRoutes)
app.use("/products",productsRouter)
app.use("/cart",cartsRouter)

app.listen(port,()=>{
    console.log(`server listen on PORT:${port}`)
})