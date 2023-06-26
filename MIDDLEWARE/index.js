const express = require('express')

const app = express()

// global to everyone
app.use(logger)

app.get('/',(req,res,next)=>{
    console.log("home")
    res.send("home paage")

})



app.get("/users",auth,(req,res)=>{
    console.log("users")
    res.send("Users  page")
    
})

function logger(req,res,next){
    console.log("log")
    next()
}
// specific auth
function auth(req,res,next){
   if(req.query.admin === 'true'){
    next();
   }else{
    res.send("No auth")
   }
}

app.listen(3000, ()=>{
    console.log("listening on 3000")
})