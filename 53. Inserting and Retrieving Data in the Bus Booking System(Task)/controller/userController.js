const db=require("../utils/db-connection")

const getAllUsers=(req,res)=>{
  const fetchQuery=`select * from users_table`
  db.execute(fetchQuery, (err, result)=>{
    if(err){
        console.log(err.message)
        res.status(500).send(err.message)
        db.end()
        return
    }
    console.log(`fetch all user length$ ${result.length}`)
    console.table(result);
    res.status(200).json({
      message: "Users successfully fetched",
      count: result.length,
      users: result
    });;
  })
}

const addUser=(req,res)=>{
   const {name,email}=req.body
   const insertQuery=`insert into users_table (name,email) values (?,?)`;

   db.execute(insertQuery,[name,email],(err)=>{
    if(err){
        console.log(err.message)
        res.status(500).send(err.message)
        db.end()
        return
    }
    console.log(`Value has been inserted`)
    res.status(200).send(`User with name:- ${name} successfully added`);
   })
}

module.exports={getAllUsers,addUser}