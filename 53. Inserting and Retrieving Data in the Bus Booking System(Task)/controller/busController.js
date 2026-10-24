const db=require("../utils/db-connection")

const addBus=(req,res)=>{
   const{busNumber,totalSeats,availableSeats}=req.body
   const insertQuery=`insert into buses_table (busNumber,totalSeats,availableSeats) values (?,?,?)`

   db.execute(insertQuery,[busNumber,totalSeats,availableSeats],(err)=>{
    
    if(err){
       console.log(err.message)
       res.status(500).send(err.message)
       db.end()
       return;
     }

     console.log("Value has been inserted")
     res.status(200).send(`bus with busNumber:- ${busNumber} successfully added`)
   })
       
}

const getAllBusesGreterthanSpeNum=(req,res)=>{
    const {seats}=req.params
    const fetchQuery=`select * from buses_table where availableSeats > ${seats}`
  db.execute(fetchQuery, (err, result)=>{
    if(err){
        console.log(err.message)
        res.status(500).send(err.message)
        db.end()
        return
    }
    console.log(`fetch all buses length$ ${result.length}`)
    console.table(result);
    res.status(200).json({
      message: "buses successfully fetched",
      count: result.length,
      users: result
    });;
  })
}


module.exports={addBus,getAllBusesGreterthanSpeNum}