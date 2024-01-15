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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.use(express.static("public"));

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
