const http = require ('http');

const port = 3000;
const server = http.createServer(requestHandler);

function requestHandler(req, res) {
    res.write('Hello World');
    res.end();
}

server.listen(port, () => console.log('Server listening on port', port));