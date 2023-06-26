const http=require('http')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url)
    const q= querystring.parse(parsedUrl.query)
    res.writeHead(200, {'Content-type':'text/plain'})
    res.write(`Hello, ${q.name}`)
    res.end()
})

server.listen(3000,'localhost',()=>{
    console.log("server setup on port 3000")
})