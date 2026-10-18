const express=require("express")
const app=express()
const port=3000;



app.get("/products",(req,res)=>{
    res.send("Here is the list of all products.")
})

app.post("/products",(req,res)=>{
    res.send("A new product has been created.")
})

app.get("/categories",(req,res)=>{
    res.send("Here is the list of all categories.")
})

app.post("/categories",(req,res)=>{
    res.send("A new category has been created.")
})

app.use((req,res)=>{
    res.send(`<h1>404 - Page Not Found</h1>`);
})

app.listen(port,()=>{
    console.log(`server listen on PORT:${port}`)
})