var c={circumference:"circumference",area:"area"};
var a=1;
function Circumference(){
    c.circumference=a*2*3.14;
}
Circumference();
function area(){
    c.area=3.14*a*a;
}
area();
console.log(c);
module.exports={
    c:c
}