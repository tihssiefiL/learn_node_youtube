var fs = require('fs');

var myWriteableStream = fs.createWriteStream(__dirname + '/writeable_test.txt',);

myWriteableStream.write('hello!','utf8');
myWriteableStream.end();
myWriteableStream.on('finish',function(){
    console.log('write success!');
});
