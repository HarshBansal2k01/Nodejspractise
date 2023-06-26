// const http = require('http')
// const url = require('url')
// const queryString = require('querystring')


// const server = http.createServer((req,res) =>{
//     const {pathName, query} = url.parse(req.url)
//     const queryParam = queryString.parse(query)

//     res.writeHead(200,{"Content-Type" : "text/html"})
//     res.end(`My name is ${queryParam.name} and age is ${queryParam.age}`)
// })


// server.listen(3000,"localhost",()=>{
//     console.log("listening on port 3000")
// })

const express = require('express');
const querystring = require('querystring');

const app = express();

// Parse query string parameters
app.get('/hello', (req, res) => {
  const params = querystring.parse(req.query);
  const name = params.name || 'World';
  res.send(`Hello ${name}!`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
