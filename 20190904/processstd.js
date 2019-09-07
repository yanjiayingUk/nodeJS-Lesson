//stdin是一个标准输入流
/*process.stdin.on("data",function(data){//敲回车，执行当前回调函数
    console.log(data.toString()); 
})*/
var i=0;
process.stdin.on("data",function(data){
    i++;
    if(i==4){
        process.exit(process.pid);
    }
    else{
        console.log(data.toString());
    }
})