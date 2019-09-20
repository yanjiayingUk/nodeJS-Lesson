const fs=require("fs");
const path=require("path");
fs.mkdirSync("hello");//创建文件夹

var list=fs.readdirSync(__dirname);//当前目录下所有文件，文件夹
console.log(list);

var files=fs.readdirSync(path.join(__dirname,"/hello"));//看看里边有没有其它文件
fs.unlinkSync(path.join(__dirname,"/hello/"+files[0]));//看看其它文件夹里有没有其它文件
fs.rmdirSync(path.join(__dirname,"/hello"));//如果文件夹里有东西，报错，只能删除空文件夹