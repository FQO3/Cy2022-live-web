const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const NodeMediaServer = require("node-media-server");
const request = require("request");
const port = 1308;
const mainserver = "http://cyxsh.top";
// const mainserver = "http:/fqo3.site";
const subserver = ["http://cyxsh.top","http://hejie.cyxsh.top","http://hld.cyxsh.top", "http://hnd.cyxsh.top", "http://fqo3.site"];
//                  内蒙               贺捷家                    范鸿喆服                王颢然家                 我家
const uploadsubserver = [80, 100, 40, 80, 40];
const view = [];
const stream = 4320;
const backup = ["http://pdx.cyxsh.top", "http://lax.cyxsh.top"];
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
  pass = req.query.pass;
  if (pass == today) {
    res.status(200).send("viewers.html");
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
  viewer.url = `http://cyxsh.top:8001/live/${code.id}.flv`;
  const promises = subserver.map(async (num, index) => {
    if (num == mainserver) {
      await asksub(`http://127.0.0.1:8001/api/streams/live/${code.id}`, num, code.id, index);
    }
    else {
      await asksub(`${num}:8001/api/streams/live/${code.id}`, num, code.id, index);
    }
  });
  await Promise.all(promises);
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`为${ipAddress}分配使用${viewer.url}`);

  // if(viewer.url.includes("cyxsh"))  viewer.url=`http://192.168.1.8:8001/live/${code.id}.flv`

  res.send(viewer.url);
});

async function asksub(url, domain, code, index) {
  return new Promise((resolve, reject) => {
    request.get({ url: url, timeout: 1000 }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var helth = JSON.parse(body);
        console.log(`${domain}观看人数: ${helth.viewers}人`);
        if (helth.isLive && helth.viewers >= view[index]) {
          console.log(`${domain}的观看人数已满，跳过分配`);
        }
        else if (helth.isLive && helth.viewers < viewer.viewer) {
          viewer.url = `${domain}:8001/live/${code}.flv`;
          viewer.viewer = helth.viewers;
          // console.log("in"+domain);
        }
        else if (!helth.isLive) {
          request.post({ url: `${domain}:1308/api/create/${code}`, timeout: 3000 }, (error, response) => {
            if (!error && response.statusCode === 200) {
              console.log(`【成功】为子服${domain}创建${code}流`);
            } else {
              console.log(`为子服${domain}创建${code}流【失败】`);
              console.log(error || response.statusMessage);
            }
          });
        }
      }
    }).on('error', (error) => {
      console.log(`无法连接至${domain}，或连接超时`);
    });
    resolve();
  });
}
//开启服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  uploadsubserver.map((num, index) => {
    view[index] = Math.floor(num * 1024 / stream);
  });
  console.log(view);
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