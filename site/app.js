var http = require('http')  // Import statement. Imports 'http' module.
let port = 3000;

// .createServer takes function expression as eventh listener for when
// an event comes in
http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello world!');
}).listen(port);

console.log(`Server started on localhost:${port}; press Ctrl-C to terminate....`);
