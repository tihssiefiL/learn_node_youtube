var events = require('events');
var util = require('util');

var person = function (name) {
    this.name = name;
};
util.inherits(person,events.EventEmitter);

var james = new person('james');
var tom = new person('tom');
var mark = new person('mark');
//当时问题，var people = ['james','tom','mark'];,瞎加引号，导致先前 new 的对象变成字符串，使得找不到.on方法
var people = [james,tom,mark];

people.forEach(function(person){
    person.on('speak',function(msg) {
        console.log(person.name + ' sad: ' + msg);
    });
});

james.emit('speak','hi dudes');
tom.emit('speak','hi dudes');
mark.emit('speak','hi dudes');
