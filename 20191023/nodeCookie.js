const http=require("http");
const url=require("url");
// 获取文件路径
const path=require("path");
// 读取文件内容
const fs=require("fs");
const querystring=require("querystring");


http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathName=urlObj.pathname;
    switch(pathName){
        case "/":
            showLogin(res);
            break;
        case "/login":
            // 需要接收数据，请求对象，响应对象都传进来
            loginIn(req,res);
            break;
        case "/home":
            showHome(req,res);
            break;
    }
}).listen(8081);
console.log("server is listening 8081")

function showLogin(res){
    var filePath=path.join(__dirname,"login.html");
    var fileContent=fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent)
    res.end();
}

function loginIn(req,res){
    var formData="";
    req.on("data",function(chunk){
        formData+=chunk;
    })
    req.on("end",function(){
        // console.log(formData);  //querystring可以解析这种字符串,要安装和引入，安装必须在当前目录安装
        var formObj=querystring.parse(formData);
        if(formObj.username=="zhangsan" && formObj.pwd=="123"){
            // 可以设置多个cookie
            res.setHeader('Set-Cookie',"username=zhangsan;max-age=60"); //max-age以秒为单位,设置cookie时间
            res.end("login sucess");
        }
        else{
            res.end("login error");
        }
    })
}

function showHome(req,res){
    // 获得请求对象携带的Cookie
    // console.log(req.headers["cookie"]); //根据这个判断之前是否登陆过，重复的处理一下

    var cookie=req.headers["cookie"];
    if(cookie==undefined){
        showLogin(res);
    }
    else if(cookie.indexOf("username=")>=0){
        res.end("home page");
    }
    else{
        showLogin(res);
    }
}