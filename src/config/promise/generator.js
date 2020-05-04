
const url = require('url');
const rp = require('request-promise');
const cookieManager = require('../../common/cookie');
const Storage = require('../../common/storage').default;
const { keyStr } = require('../../config')
const token = require('../../common/refeshToken').default;

class Generator {
    constructor(HttpApis) {
        this.HttpApis = HttpApis;
        //recursion dynamic construction
        return this.Stack(HttpApis);
    }

    setMethodWithUri(option) {

        return async (_client = {}) => {




            var params = _client.params || {},
                method = _client.method || 'POST',
                t = '?',
                sto_TxzToken = Storage.get('TxzToken'),
                sto_Openid = Storage.get('WxUserInfo').openid,
                sto_dy_invite_userid = Storage.get('dyYqUserid'),
                cookie_TxzToken = cookieManager.getCookie('TxzToken');


            for (var key in params) {
                var p = params[key];
                if (Object.prototype.toString.call(p) === "[object Object]" || Object.prototype.toString.call(p) === "[object Array]") {
                    continue;
                }
                t += (key + '=' + p + '&');
            }

            var TxzToken = (sto_TxzToken.u) || cookie_TxzToken || '';

            console.log(option.url + ' begin:');
            console.log(params);

            var __option = {
                url: option.url + t,
                method: method,
                json: true,
                headers: {
                    "content-type": "application/json",
                    "TxzToken": TxzToken,
                    "TxzOID": sto_Openid,
                    "TxzIOId": sto_dy_invite_userid
                },
                body: params
            }

            const reqPromiseOpt = Object.assign({}, __option, {
                transform: function (body, res, resolveWithFullResponse) {
                    console.log(option.url + ' end:');
                    console.log(body);
                    return body;
                }
            });

            try {

                return rp(reqPromiseOpt)
                    .catch(this.ErrorInterceptors)


            } catch (e) {
                console.error(e);

            }

        }
    }


    onForm(option) {

        return async (_client = {}) => {

            var params = _client.params || {},
                sto_Openid = Storage.get('WxUserInfo').openid,
                sto_dy_invite_userid = Storage.get('dyYqUserid'),
                method = _client.method || 'POST';

            var __option = {
                url: option.url,
                method: method,
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    "TxzToken": cookieManager.getCookie('TxzToken'),
                    "TxzOID": sto_Openid,
                    "TxzIOId": sto_dy_invite_userid
                },
                form: params
            }

            const reqPromiseOpt = Object.assign({}, __option, {
                transform: function (body, res, resolveWithFullResponse) {

                    return eval("(" + body + ")");

                }
            });

            try {

                return rp(reqPromiseOpt)
                    .catch(this.ErrorInterceptors)


            } catch (e) {

                console.error(e);

            }


        }
    }



    ErrorInterceptors = async (err) => {

        console.error(err);
        console.log('ErrorInterceptors：' + err.statusCode);
        if (err.statusCode === 401) {

            var res = await this.HttpApis.getToken({
                params: keyStr
            });

            if (res && res.success) {

                if (res.systemState === '001') {
                    token.Refesh(res.result.Token);
                    window.location.reload();
                }

            }

        } else {
            return err.response;
        }
    }



    Stack(HttpApis) {

        for (var api in HttpApis) {

            if (Object.prototype.toString.call(HttpApis[api]) === "[object String]") {

                var __option = {
                    url: HttpApis[api],
                    method: 'POST'
                }

                HttpApis[api] = this.setMethodWithUri(__option);
                HttpApis[api].onForm = this.onForm(__option);

            } else if (Object.prototype.toString.call(HttpApis[api]) === "[object Object]") {

                this.Stack(HttpApis[api]);

            }

        }

        return HttpApis;

    }
}

export default Generator;
