var htttp = require('http');
var fs = require('fs');
var server = htttp.createServer(function(req,res){
    console.log('req was mad: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname  + '/index.html').pipe(res);
    }
    else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname  + '/contact.html').pipe(res);
    }
    else if(req.url === '/api/jsons'){
        var obj = {
            name:'lol',
            name2:'lol2'
        };
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(JSON.stringify(obj));
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname  + '/404.html').pipe(res);

    }
});

server.listen(3000,'localhost');
console.log('the server is listening port 3000!')
