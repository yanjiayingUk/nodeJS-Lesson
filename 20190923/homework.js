const http=require("http");
const fs=require("fs");
const path=require("path");
const url=require("url");


http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathName=urlObj.pathname;
    switch(process.argv[2]){
        case "list":
            showList(res);
            break;
        case "mkdirfolder":
            fs.mkdirSync("folder");
            break;
        default:
            console.log("命令行参数错误");
    }
}).listen(8081)

function showList(res){
    // var list=[];
    var filePath=path.join(__dirname);
    var files=fs.readdirSync(filePath);
    console.log(files)
    var obj=[];
    for(var i=0;i<files.length;i++){
        var fileObj={};
        var childPath=path.join(filePath,files[i]);
        var statObj=fs.statSync(childPath);
        if(statObj.isFile()){//判断文件，文件夹
            fileObj.fileName=files[i];
            fileObj.fileSize=statObj.size;
            console.log(fileObj);
        }
        else if(statObj.isDirectory()){
            continue;
        }
    }
}