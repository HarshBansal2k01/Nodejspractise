// const http = require('http')
// const querystring = require('querystring')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{

//     if(req.method === "POST"){
//         let body = ''
//         req.on('data',(chunk) =>{
//             body += chunk.toString()
//         })

//         req.on('end',()=>{
//             let formData = querystring.parse(body)
//             console.log(formData.name)
//             console.log(formData.city)
//             console.log(formData.state)

            

//             fs.writeFile('created.txt',formData.name + formData.city+ formData.state,(err) =>{
//                 if(err){
//                     console.log(err)
//                 }
//                 console.log("done")
//             })




//             res.writeHead(200,{'Content-Type' : 'text/html'})
//             res.end("file created")
//         })

//     }
//     else{
//         res.writeHead(200,{"Content-Type" : "text/html"})
//         res.end(
//             `
//                 <!DOCTYPE>
//                 <html>
//                     <head>
//                         <title>yoyoy</title>
//                     </head>
//                     <body>
//                         <form method="POST" action="/">
//                             <label>
//                                 Name
//                                 <input type="text" name = "name">
//                             </label>
//                             <label>
//                                 City
//                                 <input type="text" name = "city">
//                             </label>
//                             <label>
//                                 State
//                                 <input type="text" name = "state">
//                             </label>
//                             <button type="submit">Submit</button>
//                         </form>
//                     </body>
//                 </html>
//             `
//         )
//     }
// })


// server.listen(3000,()=>{console.log("runnning 3000")})


const express = require("express")
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')


app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res) =>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/',(req,res) =>{

    var name = req.body.name
    var city = req.body.city
    var state = req.body.state

    fs.writeFile('created.txt', name + city + state, (err) =>{
        if(err){
            console.log(err)
        }
        console.log("done")
    })
    res.send("done")
})


app.listen(3000, ()=>{
    console.log("running 3000")
})