const http=require('http')

 
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end(`<h1>hello</h1>
            <h1>Sharpner</h1>`)
    }
})


let port=3000;

server.listen(port,()=>{
    console.log("server is running")
})