
function circleFun(r){
    a={};
    var circleModule=function(){
        a.circumferense=r*2*Math.PI;
    }
    var area=function(){
        a.area=Math.PI*r*r;
    }
    circleModule();
    area();
    console.log(a);
}
module.exports={
    circleFun:circleFun
}