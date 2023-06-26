const fs  = require("fs")

const obj = {
    harsh : "harsh",
    bansal : "bansal"
}

const  json = JSON.stringify(obj)
// console.log(json) 

fs.writeFile('file1.json',json, (err)=>{
    console.log("done");
});

const read = fs.readFile('file1.json','UTF-8', (err,data) =>{
    console.log(data)
    const ObjOrg = JSON.parse(data);
    console.log(ObjOrg)
})

