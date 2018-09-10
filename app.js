// add upper-case module using cmd, npm install upper-case

var http = require('http');
var uc = require('upper-case')

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc('Hello do it'));
    res.end();
})
server.listen(3000,'127.0.0.1'); 
console.log('now listening to port 3000');