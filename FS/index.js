const fs = require("fs");

// fs.writeFileSync('file1.txt',"Welcome")
// fs.writeFileSync('file1.txt',"Welcome 123")

// fs.appendFileSync('file1.txt',"adding more")

// const data  = fs.readFileSync('file1.txt')
// console.log(data.toString())

// fs.renameSync('file1.txt','file2.txt')

// ASYNC FS

// fs.writeFile('async.txt',"this is async file", (err) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("done")
//     }
// })

// fs.appendFile('async.txt',"\nmore to it",(err) =>{
//     console.log(err)
// })

// fs.readFile('async.txt',"UTF-8",(err,data) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// MAKE FOLDER

fs.mkdir('assets/file2',(err)=>{
    if(err){console.log(err)}
    console.log("file created")
})

// remove folder

// fs.rmdir('assets',(err)=>{
//     if(err){console.log(err)}
//     console.log("delete")
// })

// if (!fs.existsSync("assets")) {
//   fs.mkdir("assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file created");
//   });

// } else {
//   fs.rmdir("assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("delete");
//   });
// }


//DELETING A FILE

// fs.unlink('file2.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("deleted")
// })

// if(fs.existsSync("./assets/async1.txt")){
//     fs.unlink('./assets/async1.txt',(err,data) =>{
//         if(err){
//             console.log(err)
//         }
//         console.log("deleted")
//     })
// }