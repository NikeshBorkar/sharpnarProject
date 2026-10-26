const db=require("../utils/db-connection");
const Users=require("../models/users")

const getAllUsers= async(req,res)=>{
  try {
    const users= await Users.findAll()
    
     if(users.length==0){
    res.status(200).send(`users tabel is empty`)
  }
  
  console.log('All users:', JSON.stringify(users, null, 2));
  res.status(200).json({
    message:"users has been fetched",
    users:users
  })
  
  } catch (error) {
    res.status(500).send(`unable to fetch Users error:-${error.message}`)
  }
}

const addUser= async (req,res)=>{

   try {
    
     const {email,name}=req.body;

     const User=await Users.create({
      email:email,
      name:name
     });

     console.log("Value has been inserted")

     res.status(201).send(`Users with name:- ${name} is successfully created!`)

  } catch (error) {
    res.status(500).send(`unable to make an entry error:-${error.message}`)
  }
  
}

module.exports={getAllUsers,addUser}