const http=require("http");
const fs=require("fs");
const path=require("path");


var filePath=path.join(__dirname,"/data.json");
var fileContent=fs.readFileSync(filePath);
var content=JSON.parse(fileContent);

http.createServer(function(req,res){
  console.log(content);
}).listen(8081);
