const http=require("http");

var server=http.createServer(function(require,res){
    res.write("hello world");
    res.end();
});//第一个参数请求对象，第二个参数响应对象

server.listen(8081);
console.log("server is listening 8081");
//以上仅相当于创建了一个服务端
/*
1.在js文件所在目录shift+鼠标右键 点击打开power shell窗口
2.编译node.js文件 node+文件名
3.每次修改了js文件后，需要重新执行node+文件名
*/