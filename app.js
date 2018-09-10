var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    fs.readFile('demo_html.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
    
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');