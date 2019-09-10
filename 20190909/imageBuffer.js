const http=require("http");
const fs=require("fs");
const path=require("path");
/*
1.将图片的二进制数据转化为base64字符串编码格式，将base64字符编码直接存到网页中，浏览器可以识别
该编码，将该编码转化为一个图片进行显示
2.适用于图片较小的情况，减少http请求数量，提高页面性能
*/
http.createServer(function(req,res){
    var imgPath=path.join(__dirname,"/1.jpeg");
    var imgBuffer=fs.readFileSync(imgPath);
    var base64Data=imgBuffer.toString("base64");
    var imgSrc="data:image/jpeg;base64,"+base64Data;
    var htmlSrc="<!DOCTYPE html><head></head>"+"<body><img src='"+imgSrc+"' /></body>"+//实验证明，这些就是一个大字符串中间部分"和,可去掉
    "</html>";
    //console.log(base64Data);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlSrc);
    res.end();
}).listen(8081);

console.log("server is listening 8081");