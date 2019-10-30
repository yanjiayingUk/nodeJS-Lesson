const http=require("http");
const fs=require("fs");
const path=require("path");


http.createServer(function(req,res){
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
    var filePath=path.join(__dirname);
    var files=fs.readdirSync(filePath);
    var obj=[];
    var j=0;
    for(var i=0;i<files.length;i++){
        var fileObj={};
        var childPath=path.join(filePath,files[i]);
        var statObj=fs.statSync(childPath);
        if(statObj.isFile()){//判断文件，文件夹
            fileObj.fileName=files[i];
            fileObj.fileSize=statObj.size.toString();
            
            obj[j]=fileObj;
            j++;
        }
        else if(statObj.isDirectory()){
            continue;
        }
    }
    obj=JSON.stringify(obj);
    console.log(obj);
}