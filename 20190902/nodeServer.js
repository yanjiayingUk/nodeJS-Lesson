const http=require("http");
//实例化server
var server=new http.Server();
/*server监听客户端的请求 */
server.on("request",function(req,res){
    res.end("hello world");
})
/*server监听端口 */
server.listen(8082);
console.log("server is listening 8082");