//引入event模块
const events=require("events");
//实例化event对象
//console.log(events);
var eventEmitter=new events.EventEmitter();
//绑定事件，事件监听
eventEmitter.on("hello",function(arg1,arg2){//讲on改成once则第二次触发不执行，once表示只触发一次执行
    console.log("hello world");
    console.log(arg1,arg2);
})
//触发事件,可以进行参数的传递，可以进行多次事件的触发
eventEmitter.emit("hello","node","good");
eventEmitter.emit("hello");