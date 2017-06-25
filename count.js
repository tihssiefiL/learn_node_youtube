/*
-------------导出模块的三种办法
1. 先var obj 然后 module.exports = obj;
2.不var直接 module.exports.obj;
3.先var 然后module.exports = { 
    obj1 : obj1,
    obj2 : obj2
}
*/
module.exports.counter = function(arr){
    return "There are " + arr.length + " elements in this array";
};

module.exports.adder = function(a,b){
    return 'The sum of '+a + ' and ' + b +' is ' + (a+b) ;
}

module.exports.PI = 3.14;

/*
var counter
var adder 
var PI
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.PI = PI;


module.exports = { 
    counter : counter,
    adder : adder
}
*/