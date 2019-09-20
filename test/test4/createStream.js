var stream=require("stream");
var MyReadable=new stream.Readable();
var arr=["a","b","c","d","e","f","g","h","i","j","k","l","m"
,"n","o","p","q","r","s","t","u","v","w","x","y","z"];
for(var i=0;i<25;i++){
    MyReadable.push(arr[i]);
}
MyReadable.pipe(process.studout);

//流是一种数据的传输方式，可以将数据从一个地方传输到另一个地方