const http=require("http");
http.get("http://localhost:8080",function(res){
    var result="";
    //res是流的一个结构
    res.on("data",function(chunk){
        result+=chunk;
    })
    res.on("end",function(){
        console.log(result);
    })
})