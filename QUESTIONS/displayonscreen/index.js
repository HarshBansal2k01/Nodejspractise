// const express = require("express")
// const app = express();
// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({extended:true}))

// app.get('/',(req,res) =>{
//     res.sendFile(__dirname + "/index.html")
// })

// app.post('/submit',(req,res)=>{
//     var name = req.body.name
//     var state = req.body.state

//     res.send(`
//         <h1>${name}</h1>
//         <h1>${state}</h1>
//     `)
// })

// app.listen(3000,()=>{console.log("connected")})

const http = require("http");
const querystring = require("querystring");

const server = http.createServer();

server.on("/",(req,res)=>{
          res.write(`
            <!DOCTYPE>
            <html >
                <head>
                    <title>Document</title>
                </head>
                <body>
                <form action="/submit" method="POST">
                    <label for="">Name
                    <input type="text" name="name">
                    </label>
                    <label for="">state
                    <input type="text" name="state">
                    </label>
                    <button type="submit">submit</button>
                </form>
                </body>
            </html>
            `)
            res.end();
})





// const server =  http.createServer((req, res) => {
//   if (req.method === "POST" ) {
//     var body = "";
//     res.on("data", (chunk) => {
//       body += chunk.toString();
//     });
//     res.on("end", () => {
//       let formdata = querystring.parse(body);
//         console.log(formdata.name)
//         console.log(formdata.state)
//     });
//     res.end();
// 
//       res.writeHead(200,{"Content-Type" :"text/html"})
//       res.write(
//         `
//         <!DOCTYPE>
//         <html>
//             <head>
//                 <title>yoyo</title>
//             </head>
//             <body>
//                 <h1>${formdata.name}</h1>
//                 <h1>${formdata.state}</h1>
//             </body>
//         </html>

//         `
//       )
//     });
//   } else {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(
//       `
//             <!DOCTYPE>
//             <html >
//                 <head>
//                     <title>Document</title>
//                 </head>
//                 <body>
//                 <form action="/submit" method="POST">
//                     <label for="">Name
//                     <input type="text" name="name">
//                     </label>
//                     <label for="">state
//                     <input type="text" name="state">
//                     </label>
//                     <button type="submit">submit</button>
//                 </form>
//                 </body>
//             </html>
//             `
//     );
//   }
//   res.end()
// });


server.listen(3000, () =>{
    console.log("running 3000")
})