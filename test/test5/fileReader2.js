// const http=require("http");
// const path=require("path");
// const fs=require("fs");
// http.createServer(function(req,res){
//     if(process.argv[2]==undefined){
//         var filepath2=path.join(__dirname,"/fileReader2.js");
//         var streamReader=fs.createReadStream(filepath2);
//         streamReader.pipe(res);
//     }
//     else{
//         var filepath=path.join(__dirname,"/"+process.argv[2]);
//         if(fs.existsSync(filepath)==true){
//             fid=fs.openSync(filepath,"r+");
//             var buffer=Buffer.alloc(5000);
//             var len=fs.statSync(filepath).size;
//             fs.readSync(fid,buffer,0,len,0);
//             console.log(buffer.toString());
//             fs.closeSync(fid);
//         }
//         else{
//             console.log("该文件不存在")
//         }
//     }
// }).listen(8081)

const http=require("http");
const path=require("path");
const fs=require("fs");
var fileName=process.argv[2];
http.createServer(function(req,res){
    if(fileName==undefined){
        fs.open(process.argv[1],"r+",function(err,fd){//fd是文件描述符,r+表示读写的方式打开
            var statObj=fs.statSync(process.argv[1]);
            var buf=Buffer.alloc(statObj.size);
            fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){//这参数也太多了吧
                if(err){
                    console.log(err);
                }
                else{
                    res.end(buf.toString());
                }
            });
        })
    }
    else{
        var filepath=path.join(__dirname,"/"+process.argv[2]);
        if(fs.existsSync(filepath)){
            fs.open(filepath,"r+",function(err,fd){
                var statObj=fs.statSync(filepath);
                var buf=Buffer.alloc(statObj.size);
                fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.end(buf.toString());
                    }
                });
            })
        }
        else{
            res.end("该文件不存在")
        }
    }
}).listen(8081)
console.log("server is listening 8081");