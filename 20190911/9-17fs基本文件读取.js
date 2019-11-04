const fs = require("fs");
const path = require("path");

var fp=path.join(__dirname,"/file.txt");

/**
 * fid为文件标识
 * openSync(文件路径，打开方式)
 * readSync(文件标识，要放进的buffer变量，偏移量(放入buffer的位置)，读取文件长度，)
 */
var fid=fs.openSync(fp,"r+");   //返回值为文件描述符(文件标识)
var buffer = Buffer.alloc(5000);  //初始化一个30字节的buffer数据
var len = fs.statSync(fp).size;  //statSync()得到文件一系列信息    .size得到文件字节数
fs.readSync(fid,buffer,0,len,0);    
console.log(buffer.toString());
fs.closeSync(fid);

