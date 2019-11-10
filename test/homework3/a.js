const http=require("http");
const fs=require("fs");
const url=require("url");
const path=require("path");
const querystring=require("querystring");

// var logincount=1;
http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathName=urlObj.pathname;
    if(pathName=="/"){
        // showCount(req,res);
        showHtml(res);
    }
    else if(pathName=="/login"){
        loginIn(req,res);
    }
    // if(pathName=="/login" && req.method=="GET"){
    //     // showCount(req,res);
    //     showHtml(res);
    // }
    // else if(pathName=="/login" && req.method=="POST"){
    //     loginIn(req,res);
    // }
}).listen(8082);
console.log("server is listening 8081");

var logincount=1;
function showHtml(res){
    var filePath=path.join(__dirname,"./login.html");
    var fileContent=fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fileContent);
}


function loginIn(req,res){
    var dataStr="";
    req.on("data",function(chunk){
        dataStr+=chunk;
    });
    req.on("end",function(){
        var dataObj=querystring.parse(dataStr);
        if(dataObj.username=="zhangsan" && dataObj.pwd=="123"){
            // res.setHeader('Set-Cookie',"username=zhangsan&&logincount="); 
            var cookie=req.headers["cookie"];
            // console.log(cookie);
            if(cookie==undefined){
                var logincount=1;
                res.setHeader('Set-Cookie',"username=zhangsan&&logincount="+logincount); 
                res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
                res.write(dataObj.username+"这是您第1次登录");
                res.end();
            }
            // var cookieList=cookie.split("=");
            // if(cookie==undefined){
            //     // res.setHeader("Set-Cookie","username=zhangsan&&logincount=1");
            //     res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
            //     res.end("<p>zhangsan这是您的第1次登录</p>");
            // }
            // else if(cookie.indexOf("username=")>=0){
            //     logincount=parseInt(cookieList[2]);
            //     logincount++;
            //     console.log(logincount);
            //     cookieList[2]=logincount+"";
            //     cookie=cookieList.join("=");
            //     // res.setHeader("Set-Cookie","username=zhangsan&&logincount="+logincount);
            //     res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
            //     res.write("<p>zhangsan这是您的第"+logincount+"次登录</p>");
            // }
            // else{
            //     showHtml(res);
            // }
        }
        else{
            res.end("login error");
        }
    })
}