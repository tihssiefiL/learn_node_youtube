var fs = require('fs');
fs.writeFileSync('fileCreateTest.txt','writed');

//删除文件

setTimeout(function() {

   fs.unlink('fileCreateTest.txt'); 

}, 1000);

//创建文件夹

setTimeout(function() {
   fs.mkdirSync('testmkdir'); 
}, 2000);
//删除文件夹

setTimeout(function() {

    fs.rmdirSync('testMkdir');

}, 3000);
