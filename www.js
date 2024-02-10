const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const NodeMediaServer = require("node-media-server");
const port = 1308;

//开启推流服务器
const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30,
  },
  http: {
    port: 8001,
    allow_origin: "*",
  },
};
const nms = new NodeMediaServer(config);
nms.run();

//初始化
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//设置跨域响应头
function setHeaders(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
}
app.use(setHeaders);
//网页发送系统
app.use(function(req,res,next){
  if(req.path=="/index.html"||req.path=="/"||req.path=="/index"){
    res.redirect("/index/index.html");
  }
  next();
});
app.use(express.static("PC"));

//留言系统
let comments = []; // Array to store comments
app.get("/admin", (req, res) => {
  comments = [];
  res.sendStatus(200);
});
app.get("/comments", (req, res) => {
  res.json(comments);
  // console.log(comments);
});
app.post("/comments", (req, res) => {
  var { name, comment } = req.body;
  comments.unshift({ name, comment });
  res.status(201).json({ message: "Comment added successfully" });
  const ip = req.connection.remoteAddress;
  console.log(`message send ip: ${ip}`);
  console.log(req.body);
});

//管理员密码系统
app.post("/admin/adm.html",(req,res)=>{
  const currentTime = new Date();
  today=String(currentTime.getMonth()+1)+String(currentTime.getDate());
  console.log(today);
  pass=req.query.pass;
  console.log(pass);
  if(pass==today)
  {
    res.status(200).send("AdminWebset.html");
  }
  else{
    res.status(200).send("密码错误");
  }
});

//开启服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//系统检查
function checkPC(req){
  var agentstr = req.headers['user-agent'].toLowerCase();  // nodejs
var agentreg = /(iphone|ipod|ipad|android|symbianos|windows phone|playbook|mobile)/;
var agentph = agentstr.match(agentreg);
if(agentph){
  return false;
}else{
  return true;
}
}