var express=require("express");
var app=express();
var http=require("http");
var server=http.Server(app);
app.get("/",function(req,res){
	console.log("working!");
});
var port=process.env.PORT||80;
var ip=process.env.IP||"127.0.0.1";
server.listen(port,ip,function(){
	console.log("server is on!");
})