const http = require('http');

const server = http.createServer((req, res) => {
    // Write a response with HTTP status code 200 (OK) and Content-Type header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send your name as the response
    res.write('Babu Ghadei');
    
    // End the response
    res.end();
});

// Make the server listen on port 4000
server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
