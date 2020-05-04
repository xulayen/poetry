console.log(process.env);

const result = require('./result');
const
    isProduction = (process.env.NODE_ENV === 'production'),
    local_api_domain = `http://dmpro8.zhsh.co/TXZAPI/`,
    pro_api_domain = `http://txz2020api.zhsh.co`;//正式接口：http://txz2020api.zhsh.co    测试接口：http://dmpro8.zhsh.co/txzapi


var local,
    local_GetWxInfoAndSign = "http://dmapi.yesno.com.cn/api";


switch (process.env.NODE_ENV) {
    case 'production':
        local = `${pro_api_domain}/txzapi`;
        break;
    default:
        local = `${local_api_domain}/txzapi`;
        break;
}




const Forword = isProduction ? {
    forword_title: '全新2020年壳牌劲霸扫码抽大奖和为壳牌劲霸代言点这里！',
    forword_desc: '全新2020年壳牌劲霸扫码抽大奖和为壳牌劲霸代言点这里！',
    forword_link: 'http://txz2020.zhsh.co/entrance/1',
    forword_imgUrl: 'http://image.yesno.com.cn/Image/Fac1003/1003.png'
} : {
        forword_title: '快看！我在“壳牌劲霸合成油省钱省心扫码有礼”活动中获得了话费！还有保额5万元的人身关爱保险奖励！',
        forword_desc: '快看！我在“壳牌劲霸合成油省钱省心扫码有礼”活动中获得了话费！还有保额5万元的人身关爱保险奖励！',
        forword_link: 'http://152l8u0817.51mypc.cn:10894/',
        forword_imgUrl: 'http://152l8u0817.51mypc.cn:10894/'
    }

const Forword_Online = isProduction ? {
    forword_title: '全新2020年壳牌劲霸扫码抽大奖和为壳牌劲霸代言点这里！',
    forword_desc: '全新2020年壳牌劲霸扫码抽大奖和为壳牌劲霸代言点这里！',
    forword_link: 'http://txz2020.zhsh.co/o2o/4',
    forword_imgUrl: 'http://image.yesno.com.cn/Image/Fac1003/1003.png'
} : {
        forword_title: '全新2020年壳牌劲霸扫码抽大奖和为壳牌劲霸代言点这里',
        forword_desc: '全新2020年壳牌劲霸扫码抽大奖和为壳牌劲霸代言点这里',
        forword_link: 'http://152l8u0817.51mypc.cn:10894/',
        forword_imgUrl: 'http://152l8u0817.51mypc.cn:10894/'
    }

const Forword_SpokesMan = isProduction ? {
    forword_title: '快来这里为壳牌劲霸证言，多重好礼精彩不停！',
    forword_desc: '热火朝天的最劲霸卡友圈怎能少了你？',
    forword_link: 'http://txz2020.zhsh.co/spokesman',
    forword_imgUrl: 'https://txz2020-source-dm.oss-cn-shanghai.aliyuncs.com/static/media/item_daiyan.258963a0.png'
} : {
        forword_title: '快来这里为壳牌劲霸证言，多重好礼精彩不停！',
        forword_desc: '热火朝天的最劲霸卡友圈怎能少了你？',
        forword_link: 'http://152l8u0817.51mypc.cn:10894/',
        forword_imgUrl: 'https://txz2020-source-dm.oss-cn-shanghai.aliyuncs.com/static/media/item_daiyan.258963a0.png'
    }

const jssdk_params = isProduction ? {
    typenum: '1',
    facid: '00446'
} : {
        typenum: '2',
        facid: '00000'
    }

/**项目需要的配置  */
module.exports = {
    Forword: Forword,
    Forword_Online: Forword_Online,
    Forword_SpokesMan: Forword_SpokesMan,
    keyStr: {
        "userid": process.env.REACT_APP_SCOPE_USERID,
        "userpwd": process.env.REACT_APP_SCOPE_USERPWD
    },
    OldR5EDomain: 'http://dm.zhsh.co/shellr5e3',
    customRegular: {
        mobile_regex: /0?(13|14|15|18|17|16|19)[0-9]{9}/,
        vcode_regex: /^\d{6}$/,
        digitcode_regex: /^\d{16}$/,
    },
    Host: `${window.location.protocol}//${window.location.host}/`,
    JSSDK_Params: jssdk_params,
    SmsStr: {
        Sender: '【壳牌劲霸】',
        Message: '感谢您参与壳牌劲霸活动，短信验证码：{0}。请在5分钟内使用！',
        bussinessType: 1
    },
    OnlineDate: {
        txt2020_spokes_man: '2020/3/31 23:59:59'.replace(/-/g, "/")
    },
    Result: result,
    HttpApi: {
        GetWxAuthCode: `${local}/LotteryNew/GetWxAuthCode`,
        GetWxUserInfoByCode: `${local}/LotteryNew/GetWxUserInfoByCode`,
        jssdk: `${local}/LotteryNew/GetWxJSSDK`,
        GetWxInfoAndSign: `${local_GetWxInfoAndSign}/wechat/GetWxInfoAndSign`,

        getToken: `${local}/Account/Authorization`,
        inviteFriendRegist: `${local}/Lotterynew/InviteFriendRegist`,
        ReserveActivitySGM: `${local}/Lotterynew/ReserveActivitySGM`,

        sendvcode: `${local}/LotteryNew/NewSendMessages`,
        checkvcode: `${local}/LotteryNew/NewVerifyMobile`,
        checkOpenidIsRegist: `${local}/LotteryNew/CheckOpenidIsRegist`,
        userRegistH5: `${local}/LotteryNew/UserRegistH5`,

        InviteFriendJoinTXZNew: `${local}/LotteryNew/InviteFriendJoinTXZNew`,

        InviteFriendJoinRecord: `${local}/LotteryNew/InviteFriendJoinRecord`,

        Get_LotteryByACCodeTXZ2020: `${local}/LotteryNew/Get_LotteryByACCodeTXZ2020`,

        userReject: `${local}/LotteryNew/UpdateUserLotteryMakeup`,

        GetUserFlopReward: `${local}/LotteryNew/GetUserFlopReward`,

        SpokesQueryCurrent: `${local}/Community/QueryCurrent`,

        SpokesQueryHot: `${local}/Community/QueryHot`,

        SpokesZan: `${local}/Community/zan`,

        SpokesUser: `${local}/DYUser/current`,

        SpokesPublish: `${local}/Community/publish`,

        SpokesUserRegister: `${local}/DYUser/register`,

        SpokesUserInfo: `${local}/DYUser/info`,

        SpokesMarkAsVisited: `${local}/DYUser/MarkAsVisited`,

        SpokesCanPublishing: `${local}/Community/CanPublishing`,

        BoxExchangeLogs: `${local}/Exchange/Logs`,

        BoxUserInfo: `${local}/user/info`,

        WelfareLuckyNum: `${local}/LotteryNew/GetUserLuckyNumRecord`,

        WelfareQueryPicc: `${local}/LotteryNew/QueryPiccInfo`,

        ExamineLoad: `${local}/LotteryNew/GetTopicList`,

        ExamineCheckUserIsAnswer: `${local}/LotteryNew/CheckUserIsAnswer`,

        ExamineUserAnswer: `${local}/LotteryNew/UserAnswer`,

    },


};