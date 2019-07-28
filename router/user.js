var express=require("express");
var router=express.Router();
//创建get 路由
router.get("/index", function (req, res) {
    //res.send("连接index路由器成功");
    if(req.query.ename){res.send(req.query);}
    else{res.send("err")};
})

module.exports=router;