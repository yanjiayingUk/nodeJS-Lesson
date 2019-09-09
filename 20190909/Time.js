var timerId=setTieout(function(){
    console.log("game over");
},3000);

timerId.unref();//延迟执行不再调用回调函数，阻止延迟执行或者定时执行回调函数的执行
//clearTimeout(timerId);

var timerId=setInterval(function(){
    console.log("game over");
},2000);

timerId.unref();
timerId.ref();//恢复