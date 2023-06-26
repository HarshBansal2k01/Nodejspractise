const express =  require('express')
const EventEmitter = require('events')
const app = express()
const event = new EventEmitter()

let cnt=0;

event.on('count',() =>{
    cnt++;
    console.log(cnt)
})

app.get('/', (req,res) =>{
    res.send("hellow")
    event.emit('count')
})
app.get('/a', (req,res) =>{
    res.send("hellow")
})
app.get('/b', (req,res) =>{
    res.send("hellow")
})


app.listen(3000, ()=>{
    console.log("running 3000")
})