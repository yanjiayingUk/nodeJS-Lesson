//程序的异步执行
const fs=require("fs");
const path=require("path");
var filePath=path.join(__dirname,"/file.txt");
fs.readFile(filePath,function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})
console.log("end!!!");