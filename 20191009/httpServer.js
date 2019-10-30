//第二种创建Server的方式
const http=require("http");
const server=new http.Server();
server.listen(80081);
server.on("request",function(req,res){
    res.end("hello node");
})