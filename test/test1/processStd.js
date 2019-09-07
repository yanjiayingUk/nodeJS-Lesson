var i=1;
var person={
    Name:"a"
};
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
})