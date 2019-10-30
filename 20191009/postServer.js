const http=require("http");
const fs=require("fs");
const url=require("url");
const querystring=require("querystring");

http.createServer(function(req,res){
    var urlObj=url.parse(req.url);
    if(urlObj.path=="/"){
        var fileContent=fs.readFileSync("postform.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(fileContent);
    }
    else if(urlObj.path=="/pf"){
        var dataStr="";
        req.on("data",function(chunk){
            dataStr+=chunk;
        })
        req.on("end",function(){
            var dataObj=querystring.parse(dataStr);
            console.log(dataObj);
            res.end("username:"+dataObj.username+" pwd"+dataObj.pwd);
        })
        //post数据只能这么提取，get中的数据可以从url中吸收
    }
}).listen(8082);
console.log("server is listening 8082");