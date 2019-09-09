//你自己写的
/*function Bomb(){
    this.message="bomb!!!"
    this.explode=function(){
        console.log(this.message);
    }
}
var bomb=new Bomb();
setTimeout(function(){
    bomb.explode();
},2000);*/

//老师写的
function Bomb(){
    this.message="bomb!!!";
}
Bomb.prototype.explode=function(){
    console.log(this.message);
}
var bomb=new Bomb();
//setTimeout(bomb.explode,2000);//setTimeout也相当于一个方法，相当于嵌套了一个方法
setTimeout(bomb.explode.bind(bomb),2000);