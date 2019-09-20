const http=require("http");
const fs = require("fs");
const path =require("path");
const url = require("url");

var filelist = [
    {
        fileType:"folder",
        fileName:"书籍",
        filesize:"-",
        fileTime:"2019-9-1"
    },
    {
        fileType:"folder",
        fileName:"电影",
        filesize:"-",
        fileTime:"2019-9-2"
    },
    {
        fileType:"file",
        fileName:"文本",
        filesize:"30byte",
        fileTime:"2019-9-3"
    }
]

http.createServer((req,res)=>{
    var urlobj = url.parse(req.url);
    var urlpathname = urlobj.pathname;
    if(urlpathname=="/"){
        var htmpath = path.join(__dirname,"index.html");
        fs.readFile(htmpath,(err,data)=>{
            if(err){
                res.writeHead(200,{"Content-Type":"text/text;charset=utf-8"});
                res.end(err);
            }
            else{
                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                res.write(data.toString());
                res.end();
            }
        })
    }
    else if(urlpathname =="/1.png"){
        var imgpath = path.join(__dirname,"1.png");
        fs.readFile(imgpath,(err,data)=>{
            if(err){
                res.end(err);
            }
            else{
                res.writeHead(200,{"Content-Type":"image/png"});
                res.write(data);
                res.end();
            }
        })
    }
    else if(urlpathname=="/getlist"){
        var str=JSON.stringify(filelist);
        var textpath=path.join(__dirname,"getlist");
        var fileId=urlobj.query.files;
        var filename = str[fileId];
        var filep = path.join(__dirname,"/"+filename);
        var read = fs.createReadStream(filep);
        read.pipe(res);
    }
    else if(urlpathname=="/delete"){
        var textpath=path.join(__dirname,"getlist");
        var statObj=fs.statSync(textpath);
        if(statObj.isFile()){
            fs.unlinkSync(textpath);
            alert('该文件已经删除！');
        }
        else{
            delDir(textpath);
        }
    }

    function delDir(textpath){
        var files=fs.readdirSync(textpath);
        for(var i=0;i<files.length;i++){
            pathName=path.join(textpath,files[i]);
            var statObj=fs.statSync(pathName);
            if(statObj.isFile()){
                fs.unlinkSync(pathName);
            }
            else if(statObj.isDirectory()){
                delDir(pathName);
            }
        }
    }
    

    
    
}).listen(8081);