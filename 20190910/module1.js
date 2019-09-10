//原生模块，跟随node安装环境安装就存在的模块
//引用关键字require("模块")
//require得到的是一个就够复杂的对象，可以通过该对象调用相应的方法，辅助完成编程任务
const http=require("http");//http模块就是这个环境具备的
const fs=require("fs");
const path=require("path");
http.createServer(function(req,res){
    console.log(fs);
    var filePath=path.join(__dirname,"/module1.js");
    res.end("hello world");
}).listen(8081);