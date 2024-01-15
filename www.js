const http = require('http');
const fs = require('fs');
const path = require('path');
const NodeMediaServer = require('node-media-server');
//开启推流服务器
const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },
  http: {
    port: 8001,
    allow_origin: '*'
  }
};
const nms = new NodeMediaServer(config);
nms.run();

//网站分发
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // 重定向到index.html
    res.writeHead(302, { 'Location': '/navagation.html' });
    res.end();
    return;
  }

  // 获取访问者的IP地址
  const ip = req.connection.remoteAddress;
  console.log(`Visitor IP: ${ip}`);

  // 读取文件
  const filePath = path.join(__dirname, req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(`File ${req.url} not found!`);
      return;
    }

    // 设置响应 ?
    const extname = path.extname(req.url);
    const contentType = getContentType(extname);
    res.writeHead(200, { 'Content-Type': contentType });

    // 发送文件内 ?
    res.end(data);
  });
});

const port = 1308;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// 根据文件后缀名获取Content-Type
function getContentType(extname) {
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    default:
      return 'text/plain';
  }
}