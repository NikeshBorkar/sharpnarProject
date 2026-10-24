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

    const UsersTableQuery= `create table if not exists users_table(
       id int auto_increment primary key,
       name varchar(255) not null ,
       email varchar(255) not null unique
    )`
    
    const BusesTableQuery=`create table if not exists buses_table(
       id int auto_increment primary key, 
       busNumber varchar(50) not null unique, 
       totalSeats int not null, 
       availableSeats int not null
    )`
    
    const BookingsTableQuery=`create table if not exists bookings_Table (
       id int auto_increment primary key, 
       seatNumber int not null
    )`

    const PaymentsTableQuery=`create table if not exists payments_table (
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
}
}
 
 setupDatabaseSequentially();
 
 })

 module.exports=connection