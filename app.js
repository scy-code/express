//加载模块
const express = require("express");
var router=express.Router();
var app = express();

var pas = 234;

app.listen(8080);

app.use("/login.html", express.static("./login.html"))

app.get("/login", function (req, res) {
	console.log(req);
	if (req.query.QQ === 123 && req.query.pas === pas) {
		// 插入数据哭
		res.send([{status: 'ok'}])
	} else {
		res.send([{status: 'err'}])
	}
	// res.send({
	// 	status: 'ok'
	// })
});
