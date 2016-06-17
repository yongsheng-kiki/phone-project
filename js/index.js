//->动态计算REM的换算比例
~function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(320);

//->给滑屏区域进行初始化设置
~function () {
    var step = 0, divList = null;
    var swp = new Swiper(".swiper-container", {
        loop: true,
        direction: 'vertical',
        effect : 'flip',
        onSlidePrevEnd: function () {
            step--;
            change();
            if (step === 0) {
                step = 4;
            }
        },
        onSlideNextEnd: function () {
            step++;
            change();
            if (step === 5) {
                step = 1;
            }
        }
    });

    function change() {
        divList = document.querySelectorAll(".swiper-slide");
        [].forEach.call(divList, function (curDiv, index) {
            curDiv.id = index === step ? curDiv.getAttribute("trueId") : null;
        });
    }

}();


(function(){
    var audioBox = document.querySelector(".audio"),
        myAudio=audioBox.getElementsByTagName("audio")[0];
    window.setTimeout(function(){
        myAudio.play();
        myAudio.addEventListener("canplay",function(){
            audioBox.style.display="block";
            audioBox.className+= " audioMove";
        },false);
    },1000);

    audioBox.addEventListener("click",function(){
        if(myAudio.paused){
            myAudio.play();
            audioBox.className+= "audio audioMove";
            return;
        }
        myAudio.pause();
        audioBox.className+= "audio";
    },false);
})();





