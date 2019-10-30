const https=require("https");
//https是在http基础上进行了SSL加密
//让数据不再明文传输
https.get("https://www.baidu.com",function(res){//https相当于http协议加密
    var result="";
    //res是流的一个结构
    res.on("data",function(chunk){
        result+=chunk;
    })
    res.on("end",function(){
        console.log(result);
    })
})