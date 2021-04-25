const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    
    res.writeHead(200);
    res.end("response from server - 2");
});

server.listen(3001, 'localhost', () => {
    console.log('running on http://localhost:3001/');
});