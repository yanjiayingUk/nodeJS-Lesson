const stream=require("stream");

var reader=new stream.Readable();//得到一个可读的流
reader.push("hello");
reader.push("world");
reader.push(null);
reader.pipe(process.stdout);