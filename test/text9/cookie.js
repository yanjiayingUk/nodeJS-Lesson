const http=require("http");
const url=require("url");
// 获取文件路径
const path=require("path");
// 读取文件内容
const fs=require("fs");
const querystring=require("querystring");

http.createServer((req,res)=>{
    var urlObj=url.parse(req.url,true);
    var pathName=urlObj.pathname;
    switch(pathName){
        case "/":
            showLogin(res);
            break;
    }
}).listen(8081);
console.log("server is listening 8081");


