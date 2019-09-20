//流是一种数据的传输方式 
//可以将数据从一个地方传输到另一个地方
const fs=require("fs");
const http=require("http");
const path=require("path");

http.createServer(function(req,res){
    var filePath=path.join(__dirname,"/stream.txt");
    var streamReader=fs.createReadStream(filePath);//streamReader是一个可读流对象，从特定文件里读取流数据，可以认为是一个source
    //pipe() 管道
    //res是http的响应对象，res是一个可写流对象
    //destination （数据目标）
    streamReader.pipe(res);
}).listen(8081);

console.log("server is listening 8081")