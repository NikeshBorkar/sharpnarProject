const {sendErrorResponse,sendResponse}=require("../utils/response")


const getAllUsers=(req,res)=>{
    res.send("<h1>Fetching all users</h1>")
}

const addUser=(req,res)=>{
    try {
        const {name,email}=req.body;

    if(!name || !email){
        let err=new Error("Name and Email are required")
        err.statusCode=404
        throw err
        // return sendErrorResponse(res,{message:"Name and Email are required",statusCode:400})
    }

    const user={id:1,name,email}

    return sendResponse(res,user,201)
    } catch (error) {
        return sendErrorResponse(res,error)
    }

    
}

const getUserById=(req,res)=>{

    try {
        const user=req.params.id

    if(user>10){
        let err=new Error("User not found")
        err.statusCode=404
        throw err
        // return sendErrorResponse(res,{message:"User not found",statusCode:404})
    }

    return sendResponse(res,user,200)
    } catch (error) {
        return sendErrorResponse(res,error)
    }
    
}

module.exports={getAllUsers,addUser,getUserById}