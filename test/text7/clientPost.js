const http=require("http");
const querystring=require("querystring");

var options={
    host:"localhost",
    port:8081,
    method:"post"
};

var userName=process.argv[2];
var pwd=process.argv[3];
var postData={userName:userName,pwd:pwd};
postData=querystring.stringify(postData);//将对象转化成字符串

var req=http.request(options,function(res){
    //响应后执行这个回调函数
})

req.write(postData);//写入
req.end();