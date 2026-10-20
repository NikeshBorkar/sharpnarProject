const express=require("express")
const router=express.Router()

const students = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

];

router.get("/",(req,res)=>{
    const list=students.map(item=>item.name).join(", ")
    res.send(`<h1>Students: ${list}</h1>`)
})

router.get("/:id",(req,res)=>{
    const student=students.filter((item)=>item.id==req.params.id)
    
        if(student.length>0){
            const studentName=student[0].name
          res.send(`<h1>Student: ${studentName}</h1>`)
        }else{
          res.send('<h1>Student not found</h1>')
        }
    
})

module.exports=router