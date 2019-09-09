//你写的
/*var i=1;
var person={};
console.log("name:");
process.stdin.on("data",function(data){
    if(i==1){
        console.log("email:");
        person.Name=data.toString();
    }
    else if(i==2){
        console.log("qq:");
        person.Email=data.toString();
    }
    else if(i==3){
        console.log("Mobile:");
        person.QQ=data.toString();
    }
    else if(i==4){
        person.Mobile=data.toString();
    }
    else{
        console.log(person);
        process.exit(process.pid);
    }
    i++;
})*/

//可爱杨胜强老师写的
var obj={};
var message=["Name","Email","QQ","Mobil"];
var i=1;
console.log(message[0]+":");
process.stdin.on("data",function(data){
    obj[message[i-1]]=data.toString("utf8");
    if(i==4){
        console.log(obj);
        process.exit();
    }
    else{
        console.log(message[i++]+":");
    }
})