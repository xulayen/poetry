/**项目需要的配置  */
let _c = {

    /**成功 */
    SUCCESS: {
        code: function () {
            return 100;
        },
        result: function () {
            return '成功！'
        }
    },

    /**TOKEN无效 */
    AUTHORIZATION: {
        code: function () {
            return "C400";
        },
        result: function () {
            return 'invalid request!'
        }
    },

    /**自定义错误 */
    CUSTOMERROR: {
        code: function () {
            return 'C999';
        },
        result: function (msg) {
            return msg;
        }
    },

    /**用户未登录 */
    LOGINEXPIRED: {
        code: function () {
            return 'C997';
        },
        result: function () {
            return '用户未登录！';
        }
    },

    /**用户已经失效 */
    UserInvalid: {
        code: function () {
            return ['20000511', '20000518'];
        }
    }

}

module.exports = _c;

