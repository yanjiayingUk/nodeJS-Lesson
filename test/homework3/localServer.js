const http=require("http");
const url=require("url");
const path=require("path");
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
            loginIn(req,res);
            break;
        case "/home":
            showHome(req,res);
            break;
    }
}).listen(8082);
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
        var formObj=querystring.parse(formData);
        if(formObj.username=="zhangsan" && formObj.pwd=="123"){
            var cookie=req.headers["cookie"];
            if(cookie==undefined){
                var logincount=1;
                res.setHeader('Set-Cookie',"username=zhangsan&&logincount="+logincount); 
                res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
                res.write(formObj.username+"这是您第1次登录");
                res.end();
            }
            else{
                var a=cookie.split("=");
                var logincount=parseInt(a[2]);
                logincount++;
                res.setHeader('Set-Cookie',"username=zhangsan&&logincount="+logincount); 

                res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
                res.write(formObj.username+"这是您第"+logincount+"次登录");
                res.end();
            }
        }
        else{
            res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
            res.write("用户名、密码错误");
            res.end();
        }
    })
}

function showHome(req,res){
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

// 若关掉服务，重新启动程序，则之前的登录次数还在
// HTTP Cookie是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。
// 存储在客户端
