const express=require("express")
const router=express()
const productsControllers=require("../controllers/productController")

router.get("/",productsControllers.getProducts)

router.post("/",productsControllers.postProducts)

router.get("/:id",productsControllers.getProductsById)

module.exports=router