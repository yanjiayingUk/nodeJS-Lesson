var base64Str ='emhhbmdzYW46MTIzNDU2';
var baseutf8=Buffer.from(base64Str,"base64");
console.log(baseutf8);
console.log(baseutf8.toString("utf8"));