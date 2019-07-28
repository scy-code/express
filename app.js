//加载express模块
var express = require("express");
//加载路由
var a = require('./router/user');
var bodyParser=require("body-parser");
//创建对象
var app = express();
app.use(bodyParser.urlencoded({ extended: false })) 
app.use('/abc',express.static("./publiv.html"))
//监听接口
app.listen(9000);

//创建post路由
app.post("/public", function (req, res) {

res.send(req.body.ff);
});
//挂载路由
app.use("/user", a);
