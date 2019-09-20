const events=require("events");
const EventEmitter=events.EventEmitter;

//继承了实例化的方法
function Dog(dogName){
    //1.执行一遍父构造函数，并且this指向子构造函数
    EventEmitter.call(this);//this指向，当前子构造函数
    this.dogName=dogName;
    var that=this;
    setT(function(){
        that.emit("bark");
    },3000)
}
//2.子构造函数继承父构造函数prototype上面的相关方法
Dog.prototype.__proto__=EventEmitter.prototype;//继承了原型上的方法

var dog=new Dog("kitty");
dog.on("bark",function(){
    console.log(this.dogName+" can bark");
})