//程序阻塞 或者 同步执行
const fs=require("fs");
const path=require("path");
var fillePath=path.join(__dirname,"./file.txy");
var fileContent=fs.readFileSync(filePath);
console.log(fiileContent);
console.log("end!!!");