const express=require("express")
const app=express()
const port=3000

const productsRouter=require("./routes/productRoutes")


app.use("/products",productsRouter)


app.listen(port,()=>{
    console.log(`server listen on PORT:${port}`)
})