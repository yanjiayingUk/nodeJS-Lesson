const http=require('http');
const url=require("url");
const fs=require("fs");
const path=require("path");

http.createServer(function(req,res){
    var urlObj=url.parse(req.url);
    var pathName=urlObj.pathname;
    if(pathName=="/"){
        showIndex(res);
    }
    else if(pathName=="./list"){
        showList(res);
    }
}).listen(8081);
console.log("server is listen 8081");


function showIndex (res){
    var indexPath=path.join(__dirname,"./index.html");
    var fileContent=fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fileContent);
}