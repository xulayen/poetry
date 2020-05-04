import Storage, { StorageSession } from './storage';

export { Storage, StorageSession }

export function isIOS() {
    let u = window.navigator.userAgent;
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    return isiOS
}
export function isAndroid() {
    let u = window.navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    return isAndroid
}

export function convertImageToCanvas(image) {
    // 创建canvas DOM元素，并设置其宽高和图片一样   
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    // 坐标(0,0) 表示从此处开始绘制，相当于偏移。  
    canvas.getContext("2d").drawImage(image, 0, 0);
    return canvas;
}

//从 canvas 提取图片 image  
export function convertCanvasToImage(canvas) {
    //新Image对象，可以理解为DOM  
    var image = new Image();
    // canvas.toDataURL 返回的是一串Base64编码的URL
    // 指定格式 PNG  
    image.src = canvas.toDataURL("image/png");
    image.class = canvas.class;
    image.id = canvas.id;
    return image;
}

export function groupBy(array, f) {
    const groups = {};
    array.forEach(function (o) {
        const group = f(o);
        groups[group] = groups[group] || [];
        groups[group].push(o);
    });
    return Object.keys(groups).map(function (group) {
        return { name: group, data: groups[group] };
    });
}
/**
 * 
 * @param {*} filed 属性字段
 * @param {*} rev false升序 true降序
 * @param {*} primer parseInt
 */
export function sortBy(filed, rev, primer) {
    rev = (rev) ? -1 : 1;
    return function (a, b) {
        a = a[filed];
        b = b[filed];
        if (typeof (primer) != 'undefined') {
            a = primer(a);
            b = primer(b);
        }
        if (a < b) { return rev * -1; }
        if (a > b) { return rev * 1; }
        return 1;
    }
};

export function remove(array, v) {
    if (isNaN(v) || v > array.length) {
        return false
    }
    for (let i = 0, j = 0; i < array.length; i++) {
        if (array[i] != array[v]) {
            array[j++] = array[i]
        }
    }
    array.length -= 1
    return array;
}

