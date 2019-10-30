const http=require("http");
http.createServer(function(req,res){
    // res.writeHead(200,{"Content-Type":"text/html"});
    // Buffer.byteLength获取数据长度
    // res.setHeader("Content-Length",10);
    // res.setHeader("Content-Encoding","gzip"); 服务端进行文件压缩，压缩方式设置
    res.setHeader("Date",(new Date()).toLocaleString());//响应的时间
    res.setHeader("Set-Cookie","name=zhangsan");
    res.statusCode=404;//statusCode可以进行状态码设置
    res.end("hello node")
}).listen(8081);
console.log("server is listening 8081")

// http请求是一种无状态的请求