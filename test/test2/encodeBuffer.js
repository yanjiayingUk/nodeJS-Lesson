var username=process.argv[2];
var password=process.argv[3];
console.log("用户名："+username+"密码："+password);
if(username!=undefined && password!=undefined){
    var protect=username+":"+password;
    var buf1=Buffer.from(protect,"utf-8");
    var base64=buf1.toString("base64");
    console.log("base64加密"+":"+base64);
}