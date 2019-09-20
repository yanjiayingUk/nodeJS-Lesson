const fs=require("fs");
const path=require("path");

var filePath=path.join(__dirname,"/file.txt");
// 删除文件unlinkSync(文件路径)
fs.unlinkSync(filePath);//删除的必须是个文件