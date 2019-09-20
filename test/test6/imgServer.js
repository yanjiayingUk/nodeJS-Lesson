const http=require("http");
const fs=require("fs");
const url=require("url");
http.createServer(httpManager).listen(8081);

function httpManager(req,res){//不同请求获取不同资源
    // fs.readFile("./1.png",function(err,data){
    //     res.writeHead(200,{"Content-Type":"image/png"});
    //     res.write(data);
    //     res.end();
    // })
    var urlObj=url.parse(req,url);
    var pathName=urlObj.pathname;
    if(pathName=="/"){
        var fileContent=fs.readFileSync("index.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(fileContent);
        res.end();
    }
    else if(pathName=="/getlist"){
        var list=[{"username":"zhangsan","age":20}];
        var str=JSON.stringify(list);
        res.end(str);
    }
}
console.log("server is listening 8081");
//JSON.path