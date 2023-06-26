// const http = require('http');

// const server = http.createServer((req, res) => {
//   // Set the cookie with the name "myCookie" and value "myValue"
//   res.setHeader('Set-Cookie', 'name=cookies');
    
//   res.end('Cookie set!');
// });

// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });


const http = require('http');

const server = http.createServer((req, res) => {
  // Check if the request contains a cookie with the name "myCookie"
  if (req.headers.cookie && req.headers.cookie.includes('myCookie')) {
    // Clear the cookie by setting its value to an empty string and setting its expiration to a past date
    res.setHeader('Set-Cookie', 'myCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC;');
    res.end('Cookie cleared!');
  } else {
    // Set the cookie with the name "myCookie" and value "myValue"
    res.setHeader('Set-Cookie', 'myCookie=myValue');
    res.end('Cookie set!');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});



// give a code for duplex stream using node js
