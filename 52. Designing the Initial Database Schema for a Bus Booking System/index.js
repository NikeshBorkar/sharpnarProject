const express=require("express")
const app=express()
const mysql=require("mysql2")

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Nikesh@010",
    database:"bus_booking_system"
})

connection.connect((err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Connection has been created" )
    

async function setupDatabaseSequentially(){

    const UsersTableQuery= `create table users_table(
       id int auto_increment primary key,
       name varchar(255),
       email varchar(255)
    )`
    
    const BusesTableQuery=`create table buses_table(
       id int auto_increment primary key, 
       busNumber varchar(50) not null unique, 
       totalSeats int not null, 
       availableSeats int not null
    )`
    
    const BookingsTableQuery=`create table bookings_Table (
       id int auto_increment primary key, 
       seatNumber int not null
    )`

    const PaymentsTableQuery=`create table payments_table (
       id int auto_increment primary key, 
       amountPaid decimal(10, 2) not null, 
       paymentStatus varchar(255) not null default "pending"
    )`

try {
    await connection.execute(UsersTableQuery);
    await connection.execute(BusesTableQuery);
    await connection.execute(BookingsTableQuery);
    await connection.execute(PaymentsTableQuery)
    
    console.log("All tables created successfully sequentially!");
} catch (error) {
    console.error("Database setup failed:", error.message);
}finally {
    await connection.end();
  }
}
 
 setupDatabaseSequentially();
 
 })

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(3000,()=>{
    console.log("server listen on port:3000")
})