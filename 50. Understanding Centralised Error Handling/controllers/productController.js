const {sendErrorResponse,sendResponse}=require("../utils/response")

const getAllProducts=(req,res)=>{
    res.send("<h1>Fetching all products</h1>")
}

const addProduct=(req,res)=>{
      try {
        const {productName,value}=req.body;

    if(!productName || !value){
        let err=new Error("productName and value are required")
        err.statusCode=404
        throw err
        // return sendErrorResponse(res,{message:"productName and value are required",statusCode:400})
    }

    const user={id:1,productName,value}

    return sendResponse(res,user,201)
    } catch (error) {
        return sendErrorResponse(res,error)
    }
}

const getProductById=(req,res)=>{
      
    try {
        const user=req.params.id

    if(user>10){
        let err=new Error("Product not found")
        err.statusCode=404
        throw err
        // return sendErrorResponse(res,{message:"Product not found",statusCode:404})
    }

    return sendResponse(res,user,200)
    } catch (error) {
        return sendErrorResponse(res,error)
    }
    
}

module.exports={getAllProducts,addProduct,getProductById}