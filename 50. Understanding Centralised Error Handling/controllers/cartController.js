const {sendErrorResponse,sendResponse}=require("../utils/response")

const getCartForUser=(req,res)=>{
     try {
        const userId=req.params.userId

    if(userId>10){
        let err=new Error("Cart not found")
        err.statusCode=404
        throw err
        // return sendErrorResponse(res,{message:"cart not found",statusCode:404})
    }

    return sendResponse(res,user,200)
    } catch (error) {
        return sendErrorResponse(res,error)
    }
    
}

const addProductToCart=(req,res)=>{

    try {
        const userId=req.params.userId
        const {productName,value}=req.body;

    if(!userId || !productName || !value){
        let err=new Error("userId, productName and value are required")
        err.statusCode=404
        throw err
        // return sendErrorResponse(res,{message:"userId, productName and value are required",statusCode:400})
    }

    const user={id:userId,productName,value}

    return sendResponse(res,user,201)
    } catch (error) {
        return sendErrorResponse(res,error)
    }


}

module.exports={getCartForUser,addProductToCart}