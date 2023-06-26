// const fs = require("fs")

// const readStream = fs.createReadStream('./input.txt','UTF-8')
// const writeStream = fs.createWriteStream('./write.txt')
// // const writeStream1 = fs.createWriteStream('./writePipe.txt')
// readStream.on('data',(chunk) =>{
//     // console.log("NEW CHUNK")
//     // console.log(chunk)
// writeStream.write('\nNew Chunk\n')
// writeStream.write(chunk)
// })


// // readStream.pipe(writeStream1)
const { Duplex } = require('stream');

// Create a new duplex stream
const myDuplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
  read(size) {
    // Simulating receiving data from some outside source
    if (this.number === undefined) {
      this.push('1');
      this.number = 1;
    } else if (this.number === 1) {
      this.push('2');
      this.number = 2;
    } else if (this.number === 2) {
      this.push('3');
      this.number = undefined;
    } else {
      this.push(null);
    }
  },
});

// Pipe the stream to stdout to see the output
myDuplexStream.pipe(process.stdout);
