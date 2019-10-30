const cheerio=require("cheerio");

// const $=cheerio.load("<div>hello spider</div>")
// $("h1").text("hello node");
// console.log($.html());//在node程序里边都可以操作HTML文档

const $=cheerio.load("<ul><li>li node1</li><ul>");
$("ul").append("<li>li node2</li>");
$("li").each(function(index,el){
    console.log($(this).text());
});
