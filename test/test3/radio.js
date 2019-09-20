const events=require("events");
const util = require('util');//该模块上有一个。。。方法
function radio(name,frequercy) {
    this.name=name;
    this.frequercy=frequercy;
    var that=this;
    this.play = function (that) {
        console.log(this.name+" "+"this.frequercy"+" opened");
        setInterval(function(){
            that.emit("lalalala");
        },2000)
    }
    this.stop=function(that){
        console.log(this.name+" "+"this.frequercy"+" closed");
    }
}
util.inherits(radio, events);
module.exports = radio;

//一下老师实例
function Parent(name){
    this.name=name;
}
Parent.prototype.show=function(){
    console.log(this.name);
}
function Child(){

}
util.inherits(Child,Parent);

/*
    三种继承方试：
    1.Parent.call(this)  
    Child.prototype.__proto__=Parent.prototype
    2.Child extends Parent{}
    3.util.inherits(Child,Parent)
*/