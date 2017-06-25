var fs = require('fs');
var http = require('http');

var myReadStream = fs.createReadStream(__dirname + '/readable_test.txt','utf8');

myReadStream.on('data',function(chunk){
    console.log('new chunk recesive:');
    console.log(chunk);
});
