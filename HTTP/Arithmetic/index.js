const http = require('http');
// const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  // const { pathname, query } = url.parse(req.url);
  // const queryParams = querystring.parse(query);
  
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const formData = querystring.parse(body);
      const operation = formData.operation;
      const num1 = Number(formData.num1);
      const num2 = Number(formData.num2);
      let result;
      
      if (operation === 'add') {
        result = num1 + num2;
      } else if (operation === 'subtract') {
        result = num1 - num2;
      } else if (operation === 'multiply') {
        result = num1 * num2;
      } else if (operation === 'divide') {
        result = num1 / num2;
      }
      
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Arithmetic Operation Example</title>
          </head>
          <body>
            <h1>Result: ${result}</h1>
            <a href="/">Go back</a>
          </body>
        </html>
      `);
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Arithmetic Operation Example</title>
        </head>
        <body>
          <h1>Perform an arithmetic operation:</h1>
          <form method="POST" action="/">
            <label>
              Number 1:
              <input type="number" name="num1">
            </label>
            <br>
            <label>
              Number 2:
              <input type="number" name="num2">
            </label>
            <br>
            <label>
              Operation:
              <select name="operation">
                <option value="add">+</option>
                <option value="subtract">-</option>
                <option value="multiply">*</option>
                <option value="divide">/</option>
              </select>
            </label>
            <br>
            <button type="submit">Calculate</button>
          </form>
        </body>
      </html>
    `);
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
