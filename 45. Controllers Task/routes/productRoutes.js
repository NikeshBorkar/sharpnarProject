const express=require("express")
const router=express()
const productsControllers=require("../controllers/productController")

router.get("/",productsControllers.getAllProducts)

router.post("/",productsControllers.addProduct)

router.get("/:id",productsControllers.getProductById)

module.exports=router