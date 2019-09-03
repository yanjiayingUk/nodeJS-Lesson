//1.引入http原生模块
const http=require("http");
const fs=require("fs");
const path=require("path");
//2.创建一个服务器
var  server=http.createServer(function(req,res){//客户端发起请求访问8081端口执行这段函数
    //4.当客户端的http请求发起的时候，才会执行回调函数里面的内容
    var htmlPath=path.join(__dirname,"/view/index.html");//这样就可以适用任何系统了
    var htmlContent=fs.readFileSync(htmlPath);
    console.log(htmlPath);
    htmlContent=htmlContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
    //res.end("接收到了客户端请求");
})
//3.服务监听一个端口
server.listen(8081);
console.log("server is listening 8081");
//ctrl+c在终端退出上回请求