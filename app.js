var http = require('http');
var dt = require('./count.js');

var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTIme());
    res.end();
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');