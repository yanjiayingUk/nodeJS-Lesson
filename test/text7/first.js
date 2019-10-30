/*
    1.创建server 读取index.html响应到客户端显示.
    2.在页面中发起ajax请求获取数据，服务端接收到ajax请求
      去猫眼网站上爬取页面内容，使用cheerio来解析得到需要
      的数据，存储到数组里面，响应到客户端，用循环得到movie
      的id，name，orange
    3.在ajax回调函数中使用响应到的数据，拼接到页面上显示
*/
const https=require("https");

var apiurl="https://maoyan.com/films";
apiurl=encodeURI(apiurl);
https.get(apiurl,function(res){
    var result="";
    res.on("data",function(chunk){
        result+=chunk;
    });
    res.on("end",function(){
        var $=cheerio.load(result);
        var movieList=[];
        $(".movie-item-title a").each(function(){
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
    })
})