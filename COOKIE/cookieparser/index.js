const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const app = express();

// Parse cookies using cookie-parser middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}))

app.post('/set-cookie',(req,res) =>{
  let val = req.body.cookie
  res.cookie('name',val)
  res.send(`<h1>${val}</h1>`)
})

app.get('/',(req,res) =>{

  res.sendFile(__dirname + "/index.html")
  // const name = req.cookies.name ||'world'
  // res.send(` hello ${name}`)

})

app.get('/clear',(req,res) =>{
  res.clearCookie('name')
  res.send("cleared")
})

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
