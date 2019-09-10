var circle=require("./circleModule2.js");
console.log(circle.c);
//该实例不可再mainModule.js文件中输入半径，完全封闭,在circleModule.js文件中输入半径，而实例五可以
//输入圆的半径