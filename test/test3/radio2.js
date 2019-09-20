const events=require("events");
var EventEmitter=events.EventEmitter;

function Radio(name,fre){
    EventEmitter.call(this);
    this.name=name;
    this.fre=fre;
}
Radio.prototype.__proto__=EventEmitter.prototype;
module.exports=Radio;