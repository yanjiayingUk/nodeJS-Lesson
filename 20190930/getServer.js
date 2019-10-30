const http=require("http");
http.createServer(function(req,res){
    res.end("hello world");
}).listen(8080);
console.log("server is listening 8080");
