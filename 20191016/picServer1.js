const http=require('http');
const url=require("url");
const fs=require("fs");
const path=require("path");

http.createServer(function(req,res){
    var urlObj=url.parse(req.url);
    var pathName=urlObj.pathname;
    if(pathName=="/"){
        showIndex(res);
    }
    else if(pathName=="./list"){
        showList(res);
    }
    // else if(pathName.indexOf(".png")>=0){
    //     showImg()
    // }
    else if(pathName=="/image.png"){
        showImg(res);
    }
    else if(pathName=="/upload"&&req.method=="POST"){
        // POST,DELETE,GET都大写
        uploadFile(req,res);
    }
    // 把图片响应回去
    else if(pathName.indexOf("upload")>=0 && req.method=="GET"){
        var imgSrc=path.join(__dirname,pathName);
        var imgContent=fs.readFileSync(imgSrc);
        res.writeHead(200,{"Content-Type":"image/png"});
        res.end(imgContent);
    }
    else if(pathName=="/getlist"){
        var files=fs.readdirSync(__dirname+"\\upload");
        var fileStr=JSON.stringify(files);
        res.end(fileStr);
    }
}).listen(8081);
console.log("server is listen 8081");


function showIndex (res){
    var indexPath=path.join(__dirname,"./index.html");
    var fileContent=fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fileContent);
}

function showImg(res){
    var imgPath=path.join(__dirname,"/image.png");
    var imgContent=fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.end(imgContent);
}

function showList(res){
    var listPath=path.join(__dirname,"./list.html");
    var fileContent=fs.readFileSync(listPath);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end(fileContent);
}


function uploadFile(req,res){
    var dataStr="";
    req.setEncoding("binary");
    req.on("data",function(chunk){
        dataStr+=chunk;
    })
    req.on("end",function(){
        var totalArr=dataStr.split("\r\n");
        var bufArr=totalArr.slice(4,totalArr.length-2);
        var imgData="";
        for(var i=0;i<bufArr.length;i++){
            imgData+=bufArr[i]+"\r\n";
        }
        var buf=Buffer.from(imgData,"binary")
        var timer=(new Date()).getTime();
        fs.writeFileSync(__dirname+"\\upload\\"+timer+".png",buf,{"encoding":"binary"});
        res.end("submit sucess");
    })
}
// 地址栏中发起http请求      get
// 超链接发起http           get
// 提交表单发起请求         get请求，post请求都可
// ajax发起请求            可以是get也可以是post
//  <link href="" />       get请求 
// <script src>            get
// <image src="""></image>   get
// <image url="">           get


// get请求，向服务器传递的参数都在url里面呈现
// http://localhost:8081/detail?newId=1&newType=1
// var urlObj=url.parse(req.url,true);
// urlObj.query.newId


// post请求，数据存储在请求体里面，提交表单
// req.on("data",function(chunk){})
// req.on("end",function(){})
