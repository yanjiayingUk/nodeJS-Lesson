const fs=require("fs");
const path=require("path");

//直接往里边写，不是通过柯杜流导入
var filePath=path.join(__dirname,"/file.txt");
var writeStream=fs.createWriteStream(filePath);
writeStream.write("hello world");
writeStream.end();