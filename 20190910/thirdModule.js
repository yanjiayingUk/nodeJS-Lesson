/*
nom(node package manager)包管理器
会有大量第三方上传的模块
它是一个远端的模块的服务器
*/
//npm install 模块名
//npm install 模块名 --save-dev 可以把要安装的信息存到package.json
//回车，就回去npm服务器上查找该模块，如果存在该模块
//就会下载到当前目录的node_modules文件夹中
//①需要网络  ②需要该模块在npm上实际存在
const now=require("date-now");
console.log(now);
console.log(now());//得到的是时间戳
console.log(Date.now());