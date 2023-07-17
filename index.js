import { createServer } from 'http';
const port = process.env.PORT || 3000;

createServer(function(request, response) {
  if (request.url === '/base') {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({
      "message": "It's the Base!"
    }));
  }
  if (request.url === '/systems') {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({
      "message": "All systems are on!"
    }));
  }
  if (request.url === '/home') {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({
      "message": "Welcome home!"
    }));
  }
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({
    "message": "Hello, World!"
  }));
}).listen(port, () => console.log(`Server running at http://localhost:${port}`));