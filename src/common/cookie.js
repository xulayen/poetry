
var Cookie = {

    /**
     *
     * 写入cookie
     * @param {*} name
     * @param {*} value
     * @param {number} [Days=30]
     * @memberof cookie
     */
    setCookie(name, value, Days = 30) {

        if (this.getCookie(name)) {
            var exp = new Date();
            exp.setTime(exp.getTime() - Days * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
        }

        exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    },
    getCookie(name) {

        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

        if (arr = document.cookie.match(reg)) {

            return unescape(arr[2]);
        }
        else {
            return '';
        }
    }

}

module.exports = Cookie;