const fs=require("fs");
const path=require("path");

var filePath=path.join(__dirname,"/file.txt");
//fids文件描述符（唯一标识文件）
//openSync(文件路径，打开方式)
var fid=fs.openSync(filePath,"r+");
//实例化了一个buf 30个字节
var buf=Buffer.alloc(10)//初始化一个buffer数据
var len=fs.statSync(filePath).size;//得到当前文件字节数
fs.readSync(fid,buf,0,len,0);
console.log(buf.toString());
fs.closeSync(fid);