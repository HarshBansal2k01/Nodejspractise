const fs = require('fs')
const zlib = require('zlib')
const fileName = "./text.txt"
const compress =  zlib.createGzip()
const decompress =  zlib.createGunzip()

const readStream = fs.createReadStream(fileName)

const compressFile = (fileName)=>{
    var newFile =  fileName + ".gz"

    const writeStream  = fs.createWriteStream(newFile)
    readStream.pipe(compress).pipe(writeStream)
}
const decompressFile = (fileName)=>{
    var newFile =  fileName.replace(".gz","")

    const writeStream  = fs.createWriteStream(newFile)
    readStream.pipe(decompress).pipe(writeStream)
}

if(/gz$/.test(fileName) === true){
    decompressFile(fileName)
}
else{
    compressFile(fileName)
}