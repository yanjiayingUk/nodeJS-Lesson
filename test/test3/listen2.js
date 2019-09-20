var Radio=require("./radio2.js");
var one=process.argv[2];
var two=process.argv[3];
var radio1=new Radio(one,two);

function play(){
    console.log(this.name+" "+this.fre+"opened");
}
function stop(){
    console.log(this.name+" "+this.fre+"closed");
}

radio1.on("music",play);
radio1.on("music2",stop);
radio1.emit("music");
setTimeout(function(){
    console.log("lalala...");
    radio1.emit("music2");
},2000)
