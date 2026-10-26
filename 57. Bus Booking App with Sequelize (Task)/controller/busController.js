const db=require("../utils/db-connection")
const Buses=require("../models/buses")
const { Op } = require('sequelize');

const addBus=async(req,res)=>{
   

    try {

     const{busNumber,totalSeats,availableSeats}=req.body

     const Bus=await Buses.create({
      busNumber:busNumber,
      totalSeats:totalSeats,
      availableSeats:availableSeats
     });

     console.log("Value has been inserted")

     res.status(201).send(`bus with busNumber:- ${busNumber} successfully added`)

  } catch (error) {
    res.status(500).send(`unable to make an entry error:-${error.message}`)
  }
       
}

const getAllBusesGreterthanSpeNum= async(req,res)=>{
    
     try {
      const {seats}=req.params
     const buses= await Buses.findAll({
  where: {
    availableSeats: {
      [Op.gt]: seats,
    },
  },
})
    
     if(buses.length==0){
    res.status(200).send(`buses tabel is empty`)
  }
  
  console.log('All buses:', JSON.stringify(buses, null, 2));
  res.status(200).json({
    message:"busess has been fetched",
    buses:buses
  })
  
  } catch (error) {
    res.status(500).send(`unable to fetch Users error:-${error.message}`)
  }
}


module.exports={addBus,getAllBusesGreterthanSpeNum}