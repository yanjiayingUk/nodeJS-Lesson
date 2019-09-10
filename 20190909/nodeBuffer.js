var buf=Buffer.alloc(10);
console.log(buf);

var buf1=Buffer.from("I love you","utf-8");//将一个utf-8编码的字符串转化为buffer数据
console.log(buf1);
//console.log(buf1.toString("base64"));

var base64Str=buf1.toString("base64");
console.log(base64Str);
var buf2=Buffer.from(base64Str,"base64");
console.log(buf2);
console.log(buf2.toString("utf8"));

//变成 utf-8都要用Buffer.from
//变成其他形式用toString()方法

