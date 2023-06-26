const http = require("http");


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    middleware(req, res, () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("hellow world");
      console.log("hellow")
    });
  } else if (req.url === "/users") {
    middleware(req, res, () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("users world");
      console.log("users")
    });
  }
});

const middleware = (req, res, next) => {
    console.log("middleware");
    next();
  };

server.listen(3000, () => {
  console.log("runnig 3000");
});
