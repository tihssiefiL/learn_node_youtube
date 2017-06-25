var fs = require('fs');
//同步读写
var read = fs.readFileSync('readfile.txt','utf8');
console.log(read);

var write = fs.writeFileSync('writefile.txt','write success!');
console.log(fs.readFileSync('writefile.txt','utf8'));
//异步读写
var fsReadCallback = fs.readFile('readfile.txt','utf8',function(error,data){
    console.log('callbackdata: ' + data);
});

var write = fs.writeFile('writefile.txt','write success!',function(error,data){
    console.log("异步写入成功");
});
