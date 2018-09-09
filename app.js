var http = require('http');
var dt = require('./count.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(3000); 
console.log("WebPage is runnig on port 3000");