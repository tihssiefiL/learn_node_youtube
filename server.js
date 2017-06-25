var htttp = require('http');

var server = htttp.createServer(function(req,res){
    console.log('req was mad: ' + req.url);
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end('Hey man!');
});

server.listen(3000,'localhost');
console.log('the server is listening port 3000!')
