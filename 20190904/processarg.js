/*
1.传入命令行参数，是一个算术运算式 1*2+3
2.程序将算术运算式计算得到结果，并且在控制台输出1*2+3=5；  eval()
3.程序判断一下是否传入 了命令行参数，如果没有传入控制输出，“命令行参数错误！”；
*/
//以下是你自己的错误示范
if(process.argv[2]==undefined){
    console.log("命令行参数错误！")
}
else{
    var sum=1*2+process.argv[2];
    console.log("1*2+"+process.argv[2]+"="+sum);
}