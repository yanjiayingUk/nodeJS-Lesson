const http=require("http");
const fs=require("fs");
const url=require("url");
const https=require("https");
const cheerio=require("cheerio");

http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathName=urlObj.pathname;
    if(pathName=="/"){
        var fileContent=fs.readFileSync("index.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(fileContent);
        res.end();
    }
    else if(pathName=="/getlist"){
        https.get("https://maoyan.com/films",function(resObj){//和上边res重名，改成resObj
            var result="";
            resObj.on("data",function(chunk){
                result+=chunk;
            });
            resObj.on("end",function(){
                var $=cheerio.load(result);
                var movieList=[];
                $(".movie-item-title a").each(function(){//遍历
                    var movie={};
                    movie.movieId=$(this).attr("data-val").slice(9,-1);
                    movie.movieName=$(this).text();
                    //movie.movieOrange=$(this).parent().next();
                    if(isNaN(parseInt($(this).parent().next().text()))){
                        movie.movieRange="暂无评分";
                    }
                    else{
                        movie.movieRange=$(this).parent().next().children("")
                    }
                    movie.movieRange=="暂无评分";
                    console.log(movie);
                    movieList.push(movie);
                })
                res.end(result);
            })
        })
    }
}).listen(8081)
console.log("server is listening 8081");