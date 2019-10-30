const http=require("http");
http.createServer(function(req,res){
    var result="";
    req.on("data",function(chunk){
        result+=chunk;
    })
    req.on("end",function(){
        console.log(result);
    })
}).listen(8080);

//服务端收到数据，get是客户端收到数据