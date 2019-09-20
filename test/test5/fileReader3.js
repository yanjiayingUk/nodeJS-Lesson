const http=require("http");
const path=require("path");
const fs=require("fs");
http.createServer(function(req,res){
    if(process.argv[2]==undefined){
        var streamReader=fs.createReadStream(process.argv[1]);
        streamReader.pipe(res);
    }
    else{
        var filepath=path.join(__dirname,"/"+process.argv[2]);
        if(fs.existsSync(filepath)){
            var streamReader2=fs.createReadStream(filepath);
            streamReader2.pipe(res);
        }
        else{
            res.end("该文件不存在")
        }
    }
}).listen(8081)
console.log("server is listening 8081");