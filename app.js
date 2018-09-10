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
    // open file openfile.txt
    // if not exist create new file
    // w mean is write file
    fs.open('openfile.txt','w',function(err,file){
        if(err) throw err;
        console.log("open file!");
    });
    // write file, replace the specific file and content exists. If not create new file.
    fs.writeFile('write_file.txt','this is written by node js function',function(err,file){
        if(err) throw err;
        console.log('write file by node');
    });
    // if you need to update file you can use.
    // appendFIle() and writeFile()

    // delete file
    fs.unlink('demo_txt.html',function(err){
        if(err) throw err;
        console.log('unlink file');
    });
    // rename file
    fs.rename('renamewritefile.txt','write_file1.txt', function(err){
        // if (err) throw err;
        console.log('rename file');
        // res.write('renamed file');
    });
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');