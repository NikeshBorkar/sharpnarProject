const express=require("express")
const router=express()
const productsControllers=require("../controllers/productController")

router.get("/products",productsControllers.getAllProducts)

router.post("/products",productsControllers.addProduct)

router.get("/products/:id",productsControllers.getProductById)

module.exports=router