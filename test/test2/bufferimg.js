const http=require("http");
const path=require("path");
const fs=require("fs");
http.createServer(function(req,res){
    var imgPath=path.join(__dirname,"/2.jpg");
    var imgContent=fs.readFileSync(imgPath);
    var base64Data=imgContent.toString("base64");
    var imgSrc="data:image/jpg;base64,"+base64Data;
    var htmlsrc="<!DOCTYPE html><head></head>"+"<body><img src='"+imgSrc+"'/></body>"+"</html>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlsrc);
    res.end();
}).listen(8081);
console.log("server is listening 8081");