// var Dog=require("./dogBark.js");


// var doga=new Dog("taidi",5);
// var dogb=new Dog("zangao",8);
// doga.on("bark",function(){
//     if(this.energy>=0){
//     console.log(this.dogName+" barked! energy:"+this.energy);
//     this.energy=this.energy-1;
//     }
// })

// dogb.on("bark",function(){
//     if(this.energy>=0){
//     console.log(this.dogName+" barked! energy:"+this.energy);
//     this.energy=this.energy-1;
//     }
// })

var Dog=require("./dogBark.js");
// console.log(Dog);
var dog1=new Dog("teddy",5);
var dog2=new Dog("zangao",8)

function barkFun(){
    console.log(this.name+" barked! energy:"+this.energy);
}

dog1.on("bark",barkFun);
dog2.on("bark",barkFun);
setInterval(function(){
    if(dog1.energy>=0){
        dog1.emit("bark");
    }
    if(dog2.energy>=0){
        dog2.emit("bark");
    }
    else{
        clearInterval(intervalId);
    }
    dog1.energy=dog1.energy-1;
    dog2.energy=dog2.energy-1;
},1000)
