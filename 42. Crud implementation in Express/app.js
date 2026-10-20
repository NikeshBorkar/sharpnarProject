const express=require("express")
const app=express()
const port=3000

const homeRouter=require("./routes/home")
const studentsRouter=require("./routes/students")
const coursesRouter=require("./routes/courses")

app.use("/",homeRouter)
app.use("/students",studentsRouter)
app.use("/courses",coursesRouter)
app.use((req,res)=>{
    res.send("<h1>Page not found</h1>")
})



app.listen(port,()=>{
    console.log(`server listen on PORT:${port}`)
})