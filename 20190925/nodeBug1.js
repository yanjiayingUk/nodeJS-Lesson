// var username="zhangsan";
// username();//TypeError

// const fs=require("fs");
// fs.readFileSync(true);//TypeError:特定方法的参数必须是特定类型的变量

//debugger设置断点
//node inspect(debug) 文件名
//c 到断点后继续执行
//watch('变量名')查看变量值的变化
//watchers 查看监听的变量
//unwatch('变量名')
//restart 重启脚本

// try catch 没有办法捕获异步操作回调函数的异常
//只能捕获在同步代码中的异常

const fs=require("fs");

try{
    // fs.show();
    fs.readFile(__filename,function(err,data){
        //错误对象err处理错误操作异常的
        if(err){
            console.log("error");
        }
        else{
            console.log(data);
        }
    })
}
catch(error){
    console.log(error.message);
}

//可以处理全局的异常
process.on("uncaughtException",function(err){
    if(err){
        console.log(err);
    }
})