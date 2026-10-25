
const db=require("../utils/db-connection");
const Students=require("../models/students")

const addEntries= async (req,res)=>{

  try {
     const {email,name}=req.body;
     const student=await Students.create({
      email:email,
      name:name
     });
     res.status(201).send(`Student with name:- ${name} is successfully created!`)
  } catch (error) {
    res.status(500).send(`unable to make an entry error:-${error.message}`)
  }
  
}

const updateEntry= async (req,res)=>{

  try {
  const {id}=req.params;
  const {name}=req.body;

  const student=await Students.findByPk(id);
  if(!student){
    res.status(404).send(`student with id:-${id} is not found`)
  }
  student.name=name
  await student.save()

  res.status(200).json({
    message:"student has been updated",
    student:student
  })

  } catch (error) {
    res.status(500).send(`student can not be updated errr:-${error.message}`)
  }
  
  
}

const deleteEntry= async (req,res)=>{

  try {
     const {id}=req.params;
     const student=await Students.destroy({
      where:{
        id:id
      }
     })
    
     if(!student){
      res.status(404).send(`student with id:-${id} is not found`)
     }
    
     res.status(200).send(`student has been deleted with id:-${id}`)


  } catch (error) {
    res.status(500).send(`student can not be deleted errr:-${error.message}`)
  }
  
}


module.exports={addEntries,updateEntry,deleteEntry}