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

var sessions={}; //用户状态存储在这里
function loginIn(req,res){
    var formData="";
    req.on("data",function(chunk){
        formData+=chunk;
    })
    req.on("end",function(){
        // console.log(formData);  //querystring可以解析这种字符串,要安装和引入，安装必须在当前目录安装
        var formObj=querystring.parse(formData);
        if(formObj.username=="zhangsan" && formObj.pwd=="123"){
            var session={
                sessionId:(new Date()).getTime()+Math.random(),
                exipire:(new Date()).getTime()+30000,
                userName:"zhangsan"
                // 实际上应该是个动态
            }
            sessions[session.sessionId]=session; // 随机生成的一种方式，用[]而不是.
            res.setHeader("Set-Cookie","sessionId="+session.sessionId);  //吧sessionId响应到客户端
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

    console.log(cookie);
    if(cookie==undefined){
        showLogin(res);
    }    
    var cookieArr=cookie.split(";") //生成一个cookie数组，提取到sessionId对应值
    var cookieObj={};
    for(var i=0;i<cookieArr.length;i++){
        var cookiePair=cookieArr[i].split("=");
        cookieObj[cookiePair[0].trim()]=cookiePair[1];
    }
    var sessionId=cookieObj.sessionId;
    for(var key in sessions){
        if(key==sessionId){
            var session=sessions[key];
            console.log(session);
            if((new Date()).getTime()<session.exipire){
                res.end("home page")
            }
            else{
                showLogin(res);
            }
        }
    }
    // console.log(cookieObj);
}