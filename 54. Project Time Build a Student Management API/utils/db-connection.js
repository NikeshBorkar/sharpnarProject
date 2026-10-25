const mysql=require("mysql2")


const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Nikesh@010",
    database:"student_management_api"
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Connection has been created")
    const creationQuery=`create table if not exists students (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(30) not null,
         email VARCHAR(30) not null unique,
         age INT not null
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

module.exports=connection