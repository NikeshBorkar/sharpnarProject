const http=require('http')
const fs=require('fs')
 
const server=http.createServer((req,res)=>{
  
    const url=req.url;
    const method=req.method;

    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');

         fs.readFile('message.txt',(err,data)=>{
                   if(data==undefined){
                     res.end(`<p>${data}</p>
                          <form action="/message" method="POST">
                          <label>Name:</label>
                          <input type="text" name="message"></input>
                          <button type="submit">Send</button>
                          </form> 
                    `);
                   }else{

                   console.log(data.toString());

                    res.end(`<p>${data.toString()}</p>
                          <form action="/message" method="POST">
                          <label>Name:</label>
                          <input type="text" name="message"></input>
                          <button type="submit">Send</button>
                          </form> 
                    `);
                   }
                })

    }else{
        if(req.url==="/message"){
            res.setHeader('Content-Type','text/html');
            let body=[]

            req.on('data',(chunks)=>{
                console.log(chunks)
                 body.push(chunks)

            })

            req.on('end',()=>{
                let buffer=Buffer.concat(body)
                console.log(buffer.toString())
                let formData=buffer.toString().split("=");
                console.log(formData)

                const formValues=formData[1];

                fs.writeFile('message.txt',formValues,(err)=>{
                    res.statusCode=302;
                    res.setHeader('Location','/')
                    res.end()
                })
            })
        }
    }


})

let port=3000;

server.listen(port,()=>{
    console.log("server is running")
})