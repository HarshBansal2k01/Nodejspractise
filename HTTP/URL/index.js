const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url=="/"){
        // res.write("From write ")
        res.end("home")
    }else if(req.url=="/about"){
        // res.write("From write 2 ")
        res.end("about")
    }else if(req.url=="/contact"){
        // res.write("From write 3 ")
        res.end("contact")
    }else{
        res.writeHead(404, {'Content-type':"text/html"});
        res.end("<h1>404 not found</h1>")
    }
})

server.listen(3000,"localhost",()=>{
    console.log("listening on port 3000")
})