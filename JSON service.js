var htttp = require('http');
var fs = require('fs');

var server = htttp.createServer(function(req,res){
    console.log('req was mad: ' + req.url);
    res.writeHead(200,{'Content-Type' : 'application/json'});
    var myJsonObj = {
        name:'Yang',
        job:'student',
        age:'21'
    };
    res.end(JSON.stringify(myJsonObj));
});

server.listen(3000,'localhost');
console.log('the server is listening port 3000!')
