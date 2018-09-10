var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    // read demo_html.html file
    fs.readFile('demo_html.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
    // create demo_txy.html
    fs.appendFile('demo_txt.html','hello randika',function(err){
        if(err) throw err;
        console.log('Saved');
    });
    
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');