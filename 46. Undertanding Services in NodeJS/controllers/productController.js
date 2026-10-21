
const productService=require("../services/productService")


const getProducts=(req,res)=>{
    const data=productService.getAllProducts()
    res.send(data)
}

const postProducts=(req,res)=>{
    const data=productService.addProduct()
     res.send(data)
}

const getProductsById=(req,res)=>{
    const data=productService.getProductById(req.params)
      res.send(data)
}

module.exports={getProducts,postProducts,getProductsById}