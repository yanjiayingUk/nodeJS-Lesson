//原生模块，核心模块
// const events=require("events");
// const EventEmitter=events.EventEmitter;

// function Dog(dogName,energy){
//     EventEmitter.call(this);
//     this.dogName=dogName;
//     this.energy=energy;
//     var that=this;
//     setInterval(function(){
//         that.emit("bark");
//     },1000)
// }

// Dog.prototype.__proto__=EventEmitter.prototype;

// module.exports=Dog;

const events=require("events");
var EventEmitter=events.EventEmitter;

function Dog(name,energy){
    EventEmitter.call(this);//先实现一遍，改变this指向
    this.name=name;
    this.energy=energy;
}
Dog.prototype.__proto__=EventEmitter.prototype;
module.exports=Dog;
