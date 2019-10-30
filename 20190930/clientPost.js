const http=require("http");
const querystring=require("querystring")//将对象转化成服务器端能接收的数据结构

var infor={"user":"zhangsan"};
var str=querystring.stringify(infor);//将对象转化成字符串

var options={
    host:"localhost",
    port:8080,
    path:"/",
    method:"post"
}
var req=http.request(options,function(res){

})

req.write(str);
req.end();