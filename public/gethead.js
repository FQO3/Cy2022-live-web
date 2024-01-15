fetch("http://cyxsh.top:1308/head.html")
  .then((response) => {
    if (response.ok) {
      console.log(response.json);
      return response.text();
    }
    throw new Error("Network response was not ok.");
  })
  .then((data) => {
    // 处理获取到的数据
    console.log(data);
    var element=document.getElementById("header");
    element.innerHTML=data;
  });