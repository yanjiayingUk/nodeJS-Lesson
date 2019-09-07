var a=process.argv[2];
if(a==undefined||a=="-h"){
    console.log("请输入算数运算符");
}
else{
    var sum=eval(a);
    console.log(a+"=%s",sum);
}