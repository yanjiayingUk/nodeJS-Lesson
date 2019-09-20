const http=require("http");
const path=require("path");
const fs=require("fs");
http.createServer(function(req,res){
    if(process.argv[2]==undefined){
        // var filepath2=path.join(__dirname,"/fileReader1.js");
        // var streamReader=fs.createReadStream(filepath2);
        // streamReader.pipe(res);
        var str="";
        //fs.readFile()是一个一部方法，执行到该句不会等待文件读取完成，就直接执行
        // 后边的语句。
        // 回调函数是等到文件读取完成之后才执行
        fs.readFile(process.argv[1],function(err,data){//异步读取，不会等待
            if(err){
                console.log(err);
            }
            else{
                str=data.toString();//读文件读到的是buffer数据
                res.end(str);
            }
        })
    }
    else{
        var filepath=path.join(__dirname,"/"+process.argv[2]);
        if(fs.existsSync(filepath)){
            // var streamReader2=fs.createReadStream(filepath);
            // streamReader2.pipe(res);
            fs.readFile(filepath,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                    res.end(data.toString());
                }
            })
        }
        else{
            res.end("该文件不存在")
        }
    }
}).listen(8081)
console.log("server is listening 8081");