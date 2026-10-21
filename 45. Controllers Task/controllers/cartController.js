const getCartForUser=(req,res)=>{
    res.send(`<h1>Fetching cart for user with ID: ${req.params.userId}</h1>`)
}

const addProductToCart=(req,res)=>{
    res.send(`<h1>Adding product to cart for user with ID: ${req.params.userId}</h1>`)
}

module.exports={getCartForUser,addProductToCart}