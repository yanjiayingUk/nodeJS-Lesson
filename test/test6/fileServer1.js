/*
    请求localhost:8081
    响应列表
    <ul>
        <li>
            <a href="/file?fileId=">文件名称</a>
        </li>   
        <li>
            <a href="/file?fileId=">文件名称</a>
        </li>
    <ul>
    点击超链接时，将超链接对应的文件内容，相应到页面上显示
    点击不同链接，响应不同内容
*/

const http=require("http");
const url=require("url");
const path=require("path");
const fs=require("fs");
http.createServer(httpManager).listen(8081);

function httpManager(req,res){
    var reqObj=url.parse(req.url,true);
    // console.log(reqObj);
    var pathName=reqObj.pathname;//资源路径：端口以后问号之前的内容
    switch(pathName){
        case "/":
            showIndex(res);
            break;
        case "/file":
            showFile(reqObj,res);//根据id得到读哪个文件
            break;
        default:
            res.end("error");
            break;
    }
}
var fileList=["t1.txt","t2.txt"];
function showIndex(res){
    var str="<ul>";
    for(var i=0;i<fileList.length;i++){
        str+="<li><a href='/file?files="+i+"'>"+fileList[i]+"</a></li>";
    }
    str=str+"</ul>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(str);
    res.end();
}
// req.query.fileId
// function showFile(reqObj,res){
//     var fileId=reqObj.query.files;
//     var fileName=fileList[fileId];
//     var filePath=path.join(__dirname,"/"+fileName);
//     var fileContent=fs.readFileSync(filePath);
//     console.log(fileName);
//     res.end(fileContent);
// }
function showFile(urlobj,res){
   
    //得到fileId：  urlobj.query
    var fileId=urlobj.query.files;
    var filename = fileList[fileId];
    var filep = path.join(__dirname,"/"+filename);
    console.log(filep);
    var read = fs.createReadStream(filep);
    read.pipe(res);
}