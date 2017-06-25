var time = 5;
var timer = setInterval(function(){

    console.log(time);
        time -= 1;
        if (time <= 0){
        clearInterval(timer);
    }
},1000);