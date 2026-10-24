const express=require("express")
const app=express()
const mysql=require("mysql2")

const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Nikesh@010",
    database:"testdb"
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Connection has been created")
    const creationQuery=`create table Students (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(20),
         email VARCHAR(20)
    )`

    connection.execute(creationQuery,(err)=>{
        if(err){
        console.log(err);
        connection.end();
        return;
    }
    console.log("Table is created")
    })
})

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(3000,()=>{
    console.log("server listen on port:3000")
})