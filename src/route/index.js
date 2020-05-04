import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory,
    Redirect,
    Link
} from 'react-router-dom'

import Loadable from '../components/loadable';

import { createBrowserHistory } from "history";

import { Provider, observer } from 'mobx-react';

import routes from './routes';

import api from '../config/promise';

import url from 'url';

import VConsole from 'vconsole';

import Store from '../store';

import Storage from '../common/storage';

import { isIOS } from '../common';

import { keyStr, Host } from '../config';

import token from '../common/refeshToken';

import { OldR5EDomain, Result, JSSDK_Params } from '../config';

const history = createBrowserHistory();

const isProduction = (process.env.NODE_ENV === 'production');

// if (!isProduction) {
//     new VConsole();
// }

//锁定当前目录
if (typeof window.entryUrl === 'undefined' || window.entryUrl === '') {
    let bw = window.location.href.indexOf('?');
    if (bw > -1) {
        window.entryUrl = window.location.href.substr(0, bw);
    } else {
        window.entryUrl = window.location.href.split('#')[0]
    }
}

class MainRoute extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wechatMgr: {}
        }
        this.PageIsRefesh = false;
    }


    componentWillMount() {

        let user_obj = Storage.get('UserInfo') || '';

        this.setState({
            WxUserInfo: Storage.get('WxUserInfo') || '',
            UserInfo: user_obj ? {
                userBaseinfo: user_obj && JSON.parse(user_obj.userbaseinfo),
                userLotteryinfo: user_obj && JSON.parse(user_obj.userlotteryinfo),
                userMileinfo: user_obj.usermileinfo === "{}" ? false : user_obj && JSON.parse(user_obj.usermileinfo)
            } : false,
            Channel: Storage.get('Channel') || 0
        });

    }



    componentDidMount() {
        this.PageIsRefesh = true;
    }


    componentWillUnmount() {

    }

    componentDidUpdate() {

    }





    getWeChatInfo = async () => {
        const WxUserInfo = Storage.get('WxUserInfo'),
            authorizeCode = url.parse(window.location.search, true).query.authorizeCode;
        if (Object.prototype.toString.call(authorizeCode) === '[object Array]') {
            authorizeCode = authorizeCode[0];
        }

        if (!WxUserInfo || WxUserInfo === {}) {

            var localurl = `http://${window.location.host}${window.location.pathname}`
            let res = await api.GetWxAuthCode({
                params: {
                    redirectUrl: localurl,
                    scope: '1'
                }
            });

            if (res && res.success && !authorizeCode) {

                window.location.href = res.result;

            } else {

                if (authorizeCode) {

                    let res = await api.GetWxUserInfoByCode({
                        params: {
                            authcode: authorizeCode
                        }
                    });

                    if (res && res.success) {
                        Storage.set('WxUserInfo', res.result);
                        //剪切掉authorizeCode参数
                        history.push(window.location.pathname);
                        this.setState({
                            WxUserInfo: res.result
                        })
                    }

                }

            }

        }


    }

    GetJsSdk = async () => {
        var res = await api.jssdk({
            params: {
                Url: window.location.href
            }
        });
        var _w = await import('jquery_wechat_sdk');
        var wechatMgr = _w.WeChart({
            appId: res && res.result && res.result.appId || '-1',
            timestamp: res && res.result && res.result.timestamp || '-1',
            nonceStr: res && res.result && res.result.nonceStr || '-1',
            signature: res && res.result && res.result.signature || '-1',
            access_token: '-1',
            debug: false
        });


        return wechatMgr;

    }



    GetJsSdk2 = async () => {
        history.push(window.location.pathname);
        console.log('isIOS() isIOS() isIOS() isIOS() isIOS() :' + isIOS());
        var res = await api.GetWxInfoAndSign({
            params: {
                url: isIOS() ? window.entryUrl : window.location.href,
                ...JSSDK_Params
            },
            method: 'get'
        });
        var _w = await import('jquery_wechat_sdk');
        var wechatMgr = _w.WeChart({
            appId: res && res.APPID,
            timestamp: res && res.TIMESTAMP,
            nonceStr: res && res.NONCESTR,
            signature: res && res.SIGNATURE,
            access_token: res && res.ACCESS_TOKEN
        });
        return wechatMgr;

    }

    RefeshToken = async () => {
        var res = await api.getToken({
            params: keyStr
        });

        if (res && res.success) {

            if (res.systemState === '001') {
                token.Refesh(res.result.Token);
            }

        }

    }

    CheckUser = async () => {

        var res = await api.checkOpenidIsRegist({
            params: {
                openid: this.state.WxUserInfo ? this.state.WxUserInfo.openid : Storage.get('WxUserInfo').openid
            }
        });

        if (res && res.success) {

            Storage.set("UserInfo", res.result);
            var user_obj = res.result;
            this.setState({
                UserInfo: {
                    userBaseinfo: JSON.parse(user_obj.userbaseinfo),
                    userLotteryinfo: JSON.parse(user_obj.userlotteryinfo),
                    userMileinfo: user_obj.usermileinfo === "{}" ? false : JSON.parse(user_obj.usermileinfo)
                }
            });

        } else if (res && res.systemState === "002") {
            // //未注册
            this.setState({
                UserInfo: false
            });
            Storage.set("UserInfo", '');
            //入口页面 不跳转 注册页面不跳转
            if (window.location.pathname.indexOf('/entrance') < 0 && window.location.pathname.indexOf('/register') < 0) {
                window.location.href = ('/register');
            }

        }
    }

    SetChannel = (Channel) => {

        Storage.set("Channel", Channel);
        this.setState({
            Channel: Storage.get('Channel') || ''
        });

    }



    OldR5E = (type) => {
        var prams = `data2020=${JSON.stringify(this.state.WxUserInfo)}&channel=${this.state.Channel}`;
        switch (type) {
            case 'Fuli':
                window.location.href = `${OldR5EDomain}/R5E3/app/store/myCoup.html?${prams}`;
                break;
            case 'Grxx':
                window.location.href = `${OldR5EDomain}/R5E3/app/store/grxx.html?${prams}`;
                break;
            case 'FuJinYouJiaHui':
                window.location.href = `${OldR5EDomain}/R5E3/app/store/shopList.html?${prams}`;
                break;
            case 'MyTxz':
                window.location.href = `${OldR5EDomain}/R5E3/app/store/risk.html?${prams}`;
                break;
            case 'MyTxz-test':
                window.location.href = `http://10.20.26.19/dm/R5E3/app/store/risk.html?${prams}`;
                break;
            case 'Picc':
                window.location.href = `${OldR5EDomain}/R5E3/app/store/picc.html?${prams}&pdata=c`;
                break;
            case 'Zjjl':
                window.location.href = `${OldR5EDomain}/R5E3/app/store/zjjl.html?${prams}`;
                break;
            case 'HistoryPicc':
                window.location.href = `${OldR5EDomain}/R5E3/app/store/historypicc.html?${prams}`;
                break;

        }
    }

    getMileCount = (map) => {
        map = map || this.state.UserInfo.userMileinfo && this.state.UserInfo.userMileinfo.milelist;
        let mileSum = 0;
        if (map) {
            for (var i in map) {
                var mile = map[i]["mile"];
                var miletype = map[i]["miletype"];
                var time = map[i]["time"];
                if (mile) {
                    mile = parseInt(mile);
                }
                mileSum += mile;

            }
        }

        return mileSum;
    }


    getResult = (syscode, type) => {
        var c, t;
        return c = (t = Result.filter(function (item, index, array) {
            return (item.syscode === syscode && item.flag === "1" && item.type === type);
        })).length > 0 ? t[0] : Result[0];
    };



    CheckIsExam = async () => {
        debugger;
        var res = await api.ExamineCheckUserIsAnswer({
            params: {
                "userguid": this.state.UserInfo.userBaseinfo.userguid,
            }
        });

        return res.success;
    }






    render() {

        return (
            <Provider>
                <Router>
                    <Switch>
                        {routes.map((route, i) => (
                            <Route

                                key={i}
                                path={route.path}
                                history={history}

                                render={props => (
                                    document.title = route.title || "壳牌劲霸合成油 省钱省心",
                                    // pass the sub-routes down to keep nesting
                                    <route.component {...props}
                                        routes={route.routes}
                                        store={Store}
                                        isProduction={isProduction}
                                        getWechatManager={this.GetJsSdk2.bind(this)}
                                        getWeChatInfo={this.getWeChatInfo.bind(this)}
                                        WxUserInfo={this.state.WxUserInfo}
                                        RefeshToken={this.RefeshToken.bind(this)}
                                        CheckUser={this.CheckUser.bind(this)}
                                        UserInfo={this.state.UserInfo}
                                        SetChannel={this.SetChannel.bind(this)}
                                        Channel={this.state.Channel}
                                        OldR5E={this.OldR5E.bind(this)}
                                        getMileCount={this.getMileCount.bind(this)}
                                        getResult={this.getResult.bind(this)}
                                        IsExam={this.CheckIsExam.bind(this)}
                                    />
                                )}
                            />
                        ))}
                    </Switch>
                </Router>
            </Provider>
        )
    }

}

export default MainRoute;

