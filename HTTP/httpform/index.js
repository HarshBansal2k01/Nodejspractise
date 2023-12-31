const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      let formdata = querystring.parse(body);
      console.log(formdata.fname);
      console.log(formdata.lname);

      res.writeHead(200, { "Content-type": "text/plain" });
      res.end(`Name entered is ${formdata.fname} ${formdata.lname}`);
    });
  } else {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(    ` <!DOCTYPE html>
    <html> 
      <head><title>form</title></head>
      <body>
        <form method='POST' action="/">
            <label>Fname <input type="text" name="fname"></label>
            <label>Lname <input type="text" name="lname"></label>
            <button type="submit">Submit</button>
        </form>
      </body>
    </html>`)
  }
});

server.listen(3000, "localhost", () => {
  console.log("listening on 3000");
});
