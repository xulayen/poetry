// setSize();
// window.addEventListener("orientationchange", setSize, false);
// function setSize() {
//     var html = document.getElementsByTagName('html')[0];
//     var width = html.clientWidth;
//     var height=html.clientHeight;
//     var ratio=width/height;
//     if(ratio>0.8){
// 		html.style.fontSize = width / 18 + "px";
//     }else if(ratio>0.69){
//         html.style.fontSize = width / 19.8 + "px";
//     }else if(ratio>0.67){
//         html.style.fontSize = width / 19.6 + "px";
//     }else if(ratio>0.65){
//         html.style.fontSize = width / 19.2 + "px";
//     }else if(ratio>0.60){
//         html.style.fontSize = width / 18 + "px";
//     }else if(ratio>0.55){
//         html.style.fontSize = width / 17 + "px";
//     }else{
//         html.style.fontSize = width / 16 + "px";
//     }
// }
//移动端手机适配js
(function () {
    function w() {
        var r = document.documentElement;
        var a = r.getBoundingClientRect().width;
        if (a > 700) {
            a = 700;
        }
        var rem = a / 7.5;
        r.style.fontSize = rem + "px"
    }
    var t;
    w();
    window.addEventListener("resize", function () {
        clearTimeout(t);
        t = setTimeout(w, 300)
    }, false);
})();
