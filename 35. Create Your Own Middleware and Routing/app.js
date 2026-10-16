const express=require("express");
const app=express();
const PORT=3000;


app.use("/welcome",(req,res,next)=>{
  req.user="Guest";
  next();
})


app.get("/welcome",(req,res)=>{
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
})


app.listen(PORT,()=>{
    console.log(`server listen on port:${PORT}`)
})