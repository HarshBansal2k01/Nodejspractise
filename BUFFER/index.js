const buf = Buffer.from("hey")
console.log(buf)
console.log(buf[0])
console.log(buf[1])
console.log(buf[2])
console.log(buf.toString())

// ALLOCATING SIZE

const buff = Buffer.alloc(4)
buff.write("sdwq")
console.log(buff.toString())

buff[0] = 111;
console.log(buff.toString())