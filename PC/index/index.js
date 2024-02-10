//改变窗口大小时调整图片大小
window.onload = resizeImages;
window.onresize = resizeImages;

function resizeImages() {
    $(function (e) {
        var screenWeight = document.documentElement.clientWidth;
        var screenHeight = document.documentElement.clientHeight;
        $("[name=pageImg]").css("width", screenWeight).css("height", screenHeight);
        $("#pageUl").css("bottom", screenHeight >> 1);
    });
}

var index = 1;
var curIndex = 1;
var wrap = document.getElementById("wrap");
var main = document.getElementById("main");
var hei = document.body.clientHeight;
wrap.style.height = hei + "px";
var obj = document.getElementsByTagName("div");
for (var i = 0; i < obj.length; i++) {
    if (obj[i].className == 'page') {
        obj[i].style.height = hei + "px";
    }
}
var pageNum = document.querySelectorAll(".page").length;
//如果不加时间控制，滚动会过度灵敏，一次翻好几屏
var startTime = 0, //翻屏起始时间  
    endTime = 0,
    now = 0;
//浏览器兼容      
if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
    document.addEventListener("DOMMouseScroll", scrollFun, false);
} else if (document.addEventListener) {
    document.addEventListener("mousewheel", scrollFun, false);
} else if (document.attachEvent) {
    document.attachEvent("onmousewheel", scrollFun);
} else {
    document.onmousewheel = scrollFun;
}

//滚动事件处理函数
function scrollFun(event) {
    startTime = new Date().getTime();
    var delta = event.detail || (-event.wheelDelta);
    //mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
    //DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
    if ((endTime - startTime) < -1000) {
        if (delta > 0 && parseInt(main.offsetTop) > -(hei * (pageNum - 1))) {
            //向下滚动
            index++;
            toPage(index);
        }
        if (delta < 0 && parseInt(main.offsetTop) < 0) {
            //向上滚动
            index--;
            toPage(index);
        }
        endTime = new Date().getTime();
    } else {
        event.preventDefault();
    }
}

function toPage(index) {
    //jquery实现动画效果
    if (index != curIndex) {
        var delta = index - curIndex;
        now = now - delta * hei;
        if(now>0){
            now=0;
        }
        $("#main").animate({
            top: (now + 'px')
        }, 1000);
        curIndex = index;
        //更改列表的选中项
        $(".pageUlLi").css("color", "black");
        $("#pageUlLi" + index).css("color", "red");
        $('.layui-nav-item').removeClass('layui-this');
        $('.nav'+index).addClass('layui-this');
    }
}

//鼠标悬停翻页
document.getElementById("pageUlLi1").onmouseover = function () {
    toPage(1);
}
document.getElementById("pageUlLi2").onmouseover = function () {
    toPage(2);
}
document.getElementById("pageUlLi3").onmouseover = function () {
    toPage(3);
}

function pageup() {
    index--;
    toPage(index);
}
function pagedown() {
    index++;
    toPage(index);
}


var i = null;
$(window).mousemove(function() {
  clearTimeout(i);
  fadeIncp();
  i = setTimeout(fadeOutcp, 3000);
}).mouseleave(function() {
  clearTimeout(i);
  fadeOutcp();
});

$(document).ready(function () {
    $('#cpu').addClass('fadeOut'); // 添加fadeIn类名触发渐入动画
    $('#cpd').addClass('fadeOut'); // 添加fadeIn类名触发渐入动画
});

function fadeIncp() {
    $('#cpu').removeClass('fadeOut').addClass('fadeIn');
    $('#cpd').removeClass('fadeOut').addClass('fadeIn');
}

function fadeOutcp() {
    $('#cpu').removeClass('fadeIn').addClass('fadeOut');
    $('#cpd').removeClass('fadeIn').addClass('fadeOut');
}

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
$(document).ready(function(){
    console.log(getQueryString("pg"));
    if(getQueryString("pg")==null)
        toPage(1);
    else
        toPage(getQueryString("pg"));
})