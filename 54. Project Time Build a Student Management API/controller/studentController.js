
const db=require("../utils/db-connection");

const addEntries=(req,res)=>{
   const {email,name,age}=req.body;
   const insertQuery=`insert into students (email,name,age) values (?,?,?)`;

   db.execute(insertQuery,[email,name,age],(err)=>{
    if(err){
        console.log(err.message)
        res.status(500).send(err.message)
        db.end();
        return;
    }
    console.log("Value has been inserted")
    res.status(200).send(`Student with name:- ${name} successfully added`);
   })
}

const fetchAllStudents=(req,res)=>{
  const fetchQuery=`select * from students`
  db.execute(fetchQuery, (err, result)=>{
    if(err){
        console.log(err.message)
        res.status(500).send(err.message)
        db.end()
        return
    }
    
     if(result.length==0){
        console.log("student table is empty")
        res.status(200).send(`student table is empty`);
        return;
    }

    const studentData=JSON.stringify(result[0])
    console.log(`fetch all students:-$ ${studentData}`)
    console.table(result);

    res.status(200).json({
      message: "students successfully fetched",
      count: result.length,
      students: result
    });;
  })
}

const getStudentWithId=(req,res)=>{
  const {id}=req.params
  const fetchQuery=`select * from students where id=?`
  db.execute(fetchQuery,[id],(err, result)=>{
    if(err){
        console.log(err.message)
        res.status(500).send(err.message)
        db.end()
        return
    }

    if(result.length==0){
        console.log("student not found")
        res.status(404).send(`student not found wiht this id:-${id}`);
        return;
    }

    const studentData=JSON.stringify(result[0])
    console.log(`fetch student:- ${studentData}`)
    console.table(result);

    res.status(200).json({
      message: "student successfully get",
      student: result
    });;
  })
}


const updateEntry=(req,res)=>{
  const {id}=req.params;
  const {name,email}=req.body;
  const updateQuery=`update students set name=?, email=? where id=?`;

  db.execute(updateQuery,[name,email,id],(err,result)=>{
    if(err){
        console.log(err.message)
        res.status(500).send(err.message)
        db.end();
        return;
    }
    if(result.affectedRows===0){
        res.status(404).send("student not found");
        return;
    }

    
    console.log(`student has been updated`)

    res.status(200).send("student  has been updated succcessfully")
  })
}

const deleteEntry=(req,res)=>{
  const {id}=req.params;
  const deleteQuery=`delete from students where id=?`;

  db.execute(deleteQuery,[id],(err,result)=>{
    if(err){
        console.log(err.message)
        res.status(500).send(err.message)
        db.end();
        return;
    }
    if(result.affectedRows===0){
        res.status(404).send("student not found");
        return;
    }

    console.log(`student has been deleted`)

    res.status(200).send(`student with id:- ${id} is deleted`)
  })
}


module.exports={addEntries,fetchAllStudents,getStudentWithId,updateEntry,deleteEntry}