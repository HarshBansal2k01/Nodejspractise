const express =  require('express')

const app = express()

app.get("/",(req,res)=>{
 
    // res.send("hello")
    res.send("<h1>Hello</h1>")
})  

app.get("/about",(req,res)=>{
    res.send("about us page ")
})

app.listen(3000, ()=>{
    console.log("server started at 3000")
})