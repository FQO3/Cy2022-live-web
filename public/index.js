        let pEle = document.getElementsByTagName("p")[0];
        let secEle = document.getElementsByTagName("section")[0];
 
        let imgArr = [
            "index-pic/badge.png",
            "index-pic/占位图.png"
        ]
        let i = 0;
        let cirArr = creatCircle(imgArr.length);
        cirArr.forEach(node => pEle.appendChild(node));

        let iEle = document.getElementsByTagName("i");
        for (let k = 0; k < iEle.length; k++) {
            iEle[k].dataset.index = k;
        }
 
        let timer;
        function playTime() {
            timer = setInterval(() => {
                i++;
                if (i > imgArr.length - 1) {
                    i = 0;
                }
                addStyleI(i);
                img.src = imgArr[i];
            }, 5000);
        }
        playTime();
        secEle.addEventListener("mouseenter", function () {
            clearInterval(timer);
            timer = null;
        });
        secEle.addEventListener("mouseleave", playTime);
        secEle.addEventListener("click", function (e) {
            let event = e || window.event;
            if (event.target.className == "left iconfont icon-anniu_jiantouxiangzuo") {
                i--;
            }
            if (event.target.className == "right iconfont icon-anniu-jiantouxiangyou") {
                i++;
            }
            if (i < 0) {
                i = imgArr.length - 1;
            }
            if (i == imgArr.length) {//3
                i = 0;
            }
            img.src = imgArr[i];
            addStyleI(i);
            if (event.target.nodeName == "I") {
                console.log("11111");
                cirI = event.target.dataset.index;
                img.src = imgArr[cirI];
                addStyleI(cirI);
                i = cirI;
            }
        });
 
        function picScroll() {
            clearInterval(timer);
        }
 
        function creatCircle(num) {
            let iArr = [];
            for (let j = 0; j < num; j++) {
                let circleNode = document.createElement("i");
                iArr.push(circleNode);
            }
            return iArr;
        }
 
        function addStyleI(index) {
            [...iEle].forEach(node => node.style.backgroundColor = "gray");
            iEle[index].style.backgroundColor = "white";
        }