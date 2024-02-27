const http = require('node:http');
const hostname = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, res) => {
  const body = 'Hello Holberton School!';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.write(Buffer.from(body));
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
