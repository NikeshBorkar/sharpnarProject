const getAllProducts=()=>{
    return "<h1>Fetching all products</h1>"
}

const addProduct=(req,res)=>{
     return "<h1>Adding a new product</h1>"
}

const getProductById=(req)=>{
      return `<h1>Fetching product with ID: ${req.id}</h1>`
}

module.exports={getAllProducts,addProduct,getProductById}