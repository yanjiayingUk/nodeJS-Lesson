
function circleFun(r){
    a={};
    var circleModule=function(){
        a.circumferense=r*2*3.14;
    }
    var area=function(){
        a.area=3.14*r*r;
    }
    circleModule();
    area();
    console.log(a);
}
module.exports={
    circleFun:circleFun
}