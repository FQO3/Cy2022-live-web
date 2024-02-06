fetch("http://cyxsh.top:1308/endblock.html")
  .then((response) => {
    if(response.redirected)
    {
      let redirectURL=response.url;
      fetch(redirectURL)
      .then((response)=>{
        // console.log(response.text());
        return response.text();
      })
    }
    if (response.ok) {
      // console.log(response.json);
      return response.text();
    }
    throw new Error("Network response was not ok.");
  })
  .then((data) => {
    // console.log(data);
    var element=document.getElementById("endblock");
    element.innerHTML=data;
  });