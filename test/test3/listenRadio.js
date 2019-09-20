const radiofile=require("./radio.js");
var a=process.argv[2];
var b=process.argv[3];
var start=radiofile.radio(a,b);
console.log(start.play());
console.log(start.stop());
