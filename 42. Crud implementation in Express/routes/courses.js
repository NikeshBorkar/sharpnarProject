const express=require("express")
const router=express.Router()

const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];

router.get("/",(req,res)=>{
    const list=courses.map(item=>item.name).join(", ")
    res.send(`<h1>Courses: ${list}</h1>`)
})

router.get("/:id",(req,res)=>{
    const course=courses.filter(item=>item.id==req.params.id)
    if(course.length>0){
    const courseDiscription=`${course[0].name}, Description:${course[0].description}`
    res.send(`<h1>Course: ${courseDiscription}</h1>`)
    }else{
     res.send(`<h1>Course not found</h1>`)
    }
})

module.exports=router