const http = require('http');

const hostname = 'localhost';
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'content_type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log('server running');
});
