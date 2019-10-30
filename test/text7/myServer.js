const http=require("http");

http.createServer(function(req,res){
    var str="";
    req.on("data",function(chunk){
        str+=chunk;
    })
    req.on("end",function(){
        console.log(str);
    })
}).listen(8081);
console.log("server is listenging 8081");
//先启动服务端（这个）再启动客户端