var c={circumference:"circumference",area:"area"};
var a=1;
function Circumference(){
    return a*2*Math.PI;
}
c.circumference=Circumference(1);
function area(){
    return Math.PI*a*a;
}
c.area=area(1);
module.exports={
    c:c
}