const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const NodeMediaServer = require("node-media-server");
const request = require("request");
const port = 1308;
const mainserver = "http://cyxsh.top";
// const mainserver = "http:/fqo3.site";
const subserver = ["http://fqo3.site", "http://cyxsh.top"];
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
app.use(function (req, res, next) {
  if (req.path == "/index.html" || req.path == "/" || req.path == "/index") {
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
app.post("/admin/adm.html", (req, res) => {
  const currentTime = new Date();
  today = String(currentTime.getMonth() + 1) + String(currentTime.getDate());
  console.log(today);
  pass = req.query.pass;
  console.log(pass);
  if (pass == today) {
    res.status(200).send("AdminWebset.html");
  }
  else {
    res.status(200).send("密码错误");
  }
});
const viewer = {
  url: '',
  viewer: 999
};
app.post("/api/url/:id", async (req, res) => {
  viewer.viewer = 999;
  var code = req.params;
  viewer.url = `http://cyxsh.top:8001/live/${code.id}`;
  const promises = subserver.map(async num => {
    if (num == mainserver) {
      await asksub(`http://127.0.0.1:8001/api/streams/live/${code.id}`, num, code.id);
    }
    else {
      await asksub(`${num}:8001/api/streams/live/${code.id}`, num, code.id);
    }
  });
  await Promise.all(promises);
  console.log(viewer.url);
  res.send(viewer.url);
});

async function asksub(url, domain, code) {
  return new Promise((resolve, reject) => {
    request.get({ url: url, timeout: 5000 }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(domain + body);
        var helth = JSON.parse(body);
        console.log(helth.isLive + " " + helth.viewers + " " + viewer.viewer);
        if (helth.isLive && helth.viewers < viewer.viewer) {
          console.log("in");
          viewer.url = `${domain}:8001/live/${code}.flv`;
          viewer.viewer = helth.viewers;
        }
        else if (!helth.isLive) {
          request.post({ url: `${domain}:1308/api/create/${code}`, timeout: 5000 }, (error, response) => {
            if (!error && response.statusCode === 200) {
              console.log(`【成功】为子服${domain}创建${code}流`);
            } else {
              console.warn(`为子服${domain}创建${code}流【失败】`);
              console.log(error || response.statusMessage);
            }
          });
        }
        resolve();
      } else {
        reject(error);
      }
    });
  });
}

//开启服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//系统检查
function checkPC(req) {
  var agentstr = req.headers['user-agent'].toLowerCase();  // nodejs
  var agentreg = /(iphone|ipod|ipad|android|symbianos|windows phone|playbook|mobile)/;
  var agentph = agentstr.match(agentreg);
  if (agentph) {
    return false;
  } else {
    return true;
  }
}