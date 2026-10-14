const http=require('http')
const routes= require("./routes")

// 1.
// routes.anotherFunction()
// const server=http.createServer(routes.handlerFunction)

//2. && 3. && 4.
routes.testFunction()
 
const server=http.createServer(routes.handler)


let port=3000;

server.listen(port,()=>{
    console.log("server is running")
})