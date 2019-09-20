
// const fs=require("fs");
// const path=require("path");
// var i=1;
// var arr=["请输入要创建的文件夹：","请输入要创建的文件：","请输入要删除的文件："]
// console.log(arr[0]);
// process.stdin.on("data",function(data){
//     console.log(arr[i]+":");
//     var data1=data.toString("utf8");
//     if(i==0){
//         console.log(arr[1]);
//         fs.mkdirSync(data1);
//     }
// })
const path=require("path");
const fs=require("fs");

console.log("创建文件夹：");
process.stdin.on("data",function(data){
    var cmd=data.toString();
    var cmdArr=cmd.split(" ");
    switch(cmdArr[0]){
        case "mkdir":
            fs.mkdirSync(cmdArr[1].slice(0,-2));
            break;
        case "touch":
            var filePath=path.join(__dirname,"/filedir/file.txt");
            fs.writeFileSync(filePath,"hello node");
            break;
        case "delete":
            var filePath=path.join(__dirname,"/filedir/file.txt");
            fs.unlinkSync(filePath);
            break;
        default:
            console.log("something erro");
            break;
    }
})