//1.引入http原生模块
const http=require("http");
const fs=require("fs");
const url=require("url");
const path=require("path");
//2.创建一个服务器，只要有http请求，访问端口，就会执行回调函数里面的内容
var  server=http.createServer(function(req,res){//客户端发起请求访问8081端口执行这段函数
    //req.url表示url地址中，端口以后的内容
    //例：https://hao.360.com/?a1004
    //指  /?a1004
    //使用了url.parse将req.url转化为了对象，对象提取pathname
    //pathname即过来的资源的请求路径
    var urlObj=url.parse(req.url);//req.url表示/及后边的资源路径等等端口以后的所有内容
    var urlPathName=urlObj.pathname;
    //根据资源路径可以决定执行到了哪一段代码
    if(urlPathName=="/favicon.ico"){
        res.end();
    }
    if(urlPathName=="/"){//把网页响应到客户端
        //4.当客户端的http请求发起的时候，才会执行回调函数里面的内容
        var htmlPath=__dirname+"\\view\\index.html";//绝对路径拼接得到一个路径，绝对路径用\，防止转义字符用\\
        var htmlContent=fs.readFileSync(htmlPath);
        //console.log(htmlPath);
        htmlContent=htmlContent.toString("utf8");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(htmlContent);
        res.end();
        //res.end("接收到了客户端请求");
    }
    else if(urlPathName=="/js/index.js"){//如果是js文件，将js文件响应回去
        var jsPath=path.join(__dirname,"/js/index.js");//先进行路径拼接
        var jsContent=fs.readFileSync(jsPath);
        //console.log(jsPath);
        res.writeHead(200,{"Content-Type":"text/javaScript"});
        res.write(jsContent);
        res.end();
    }
});
//3.服务监听一个端口
server.listen(8081);
console.log("server is listening 8081");
//ctrl+c在终端退出上回请求