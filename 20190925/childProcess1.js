console.log("hello node"+process.argv[2]);
process.send({
    "date":"20190912"
});

//process.on也能接收到信息