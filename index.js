import { createServer } from 'http';
const port = process.env.PORT || 3000;

createServer(function(request, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({
    "message": "Hello, World!"
  }));
}).listen(port);

console.log(`Server running at http://localhost:${port}`);