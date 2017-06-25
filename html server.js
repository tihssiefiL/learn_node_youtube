var htttp = require('http');
var fs = require('fs');

var server = htttp.createServer(function(req,res){
    console.log('req was mad: ' + req.url);
    res.writeHead(200,{'Content-Type' : 'text/html'});
    var htmlReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
    htmlReadStream.pipe(res);
});

server.listen(3000,'localhost');
console.log('the server is listening port 3000!')
