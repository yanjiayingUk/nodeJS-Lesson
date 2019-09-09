const http=require("http");
const fs=require("fs");//读文件内容用到的模块
const path=require("path");//读路径使用兼容性的方法，用到了path模块
var server=http.createServer(function(req,res){
    var htmlPath=path.join(__dirname,"/views/view.html");
    console.log(htmlPath);//输出文件路径
    var htmlContent=fs.readFileSync(htmlPath);//读到的是一个二进制数据
    htmlContent=htmlContent.toString("utf8");//转化成字符串
    res.writeHead(200,{"Content-Type":"text/html"})//使用res响应，(响应状态码,响应内容，类型)
    res.write(htmlContent);
    res.end();
});
server.listen(8080);//出现all ready什么的说明端口被占用了，可以换一个或者关闭该端口
console.log("server is listening 8080");
