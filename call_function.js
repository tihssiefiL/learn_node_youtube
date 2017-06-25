function sayhi(){
    console.log("hi");
}

var saybye = function(){
    console.log("bye");
}

function callFunction(functionName){
    functionName();
}

callFunction(sayhi);
callFunction(saybye);