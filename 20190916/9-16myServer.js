/**
 *  请求8081
 *  响应列表
 *      <ul>
 *          <li>
 *              <a href='/file?fileId='>文件名</a>
 *          </li>
 *          <li>
 *              <a href='/file?fileId='>文件名</a>
 *          </li>
 *      </ul>
 * 
 *  点击超链接时，将超链接对应的文件内容，响应到页面上显示
 */

 const http = require("http");
const url = require("url");
const path =require("path");
const fs = require("fs");

 http.createServer(httpManager).listen(8080);

 function httpManager(req,res){
     var urlobj = url.parse(req.url,true);      //req.url值是字符串，返回端口后的所有内容
     var pathname = urlobj.pathname;     //端口以后，？之前的内容，为资源路径

     switch(pathname){
         case '/':
             showIndex(res);
             break;
        case '/file':
            showFile(urlobj,res);
            break;
        default:
            res.end("error");
            break;
     }
 }
 var filelist = ["t1.txt","t2.txt"];
 function showIndex(res){
 
    var str = "<ul>";
    for(var i=0;i<filelist.length;i++){
        str+="<li><a href='/file?fileId="+i+"'>"+filelist[i]+"</a></li>";
    }
    str+="</ul>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(str);
    res.end();  
}

function showFile(urlobj,res){
    //得到fileId：  urlobj.query
    var fileId=urlobj.query.fileId;
    var filename = filelist[fileId];
    var filep = path.join(__dirname,"/"+filename);
    var read = fs.createReadStream(filep);
    read.pipe(res);
    res.end();
    // var filec = fs.readFileSync(filep);
    // res.end(filec);
}