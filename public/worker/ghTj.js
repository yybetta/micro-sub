self.addEventListener(
    'message',
    function (e) {
        setInterval(() => {
            test18()
            // test25()
        }, 5000)
    },
    false
)

function test18() {
    const myHeaders = new Headers();
    myHeaders.append("Host", "tjhapp.com.cn:8013");
    myHeaders.append("uuid", "oqrz4jjazyr78IL39q4olQZV46z4");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("X-Requested-With", "XMLHttpRequest");
    myHeaders.append("ukey", "01179415ee5a3c9f852b56ccc4439ef5");
    myHeaders.append("uname", "13871058645");
    myHeaders.append("Accept-Language", "zh-cn");
    myHeaders.append("token", "eJwB0AAv_6iAhuAnkkp1uq4y6wddce2vPbfEGYPLnjCmNB-rDoBqi1phkt9c9c6vDvDHcx7M-kG3DmoMryKkf1KhIIK-SkjNBXUQJ0zsGptMKoTtkotMlV56r3hET5MDADDQ7L8ggBRve8Cf6XcIdrqj5QhKVP1KrVjPvoaI9xDpTO2GrvXKb-D6wtoBOD399FM2fEzRMPzYA0qbIKmcCOWSIBBO_7yKDFhlw2XKGu9wuSufnZA82Khkx-iJHQ720c7NedtNpuG7tbESQJWwdY_JfbygwaLMYhNr4V8=");
    myHeaders.append("Accept-Encoding", "gzip, deflate, br");
    myHeaders.append("Origin", "https://tjhapp.com.cn");
    myHeaders.append("User-Agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.50(0x1800323b) NetType/WIFI Language/zh_CN");
    myHeaders.append("Referer", "https://tjhapp.com.cn/yuyuegh/yuyuexiangqingNew.html?doctorCode=101057&mc=%u9884%u7EA6%u6302%u53F7&ghlx=1&app_token=1&jsapi_ticket=1&s_rdm=0.943201331748648");
    myHeaders.append("plan", "wxapp");
    myHeaders.append("Content-Length", "66");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("yqcode1", "");
    urlencoded.append("kscode1", "");
    urlencoded.append("doctorCode", "101057");
    urlencoded.append("scheduleType", "");
    urlencoded.append("laterThan17", "true");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
    };

    fetch("https://tjhapp.com.cn:8013/yuyue/getdocinfoNewV2", requestOptions)
        .then((response) => response.json())
        .then(res => {
            console.log('resres', res);
            jduge(res, '9.7周六')
        })
        .catch((error) => console.error(error));
}

// function test18() {
//     var myHeaders = new Headers()
//     myHeaders.append('client', 'patient')
//     myHeaders.append('channel', 'wx_xcx')
//     myHeaders.append('uid', '5022711176020197382')
//     myHeaders.append('his-id', '187')
//     myHeaders.append('Hc-Src-Hisid', '187')
//     myHeaders.append('uuid', '0d18658e-d1e7-4965-b323-4453166c4d86')
//     myHeaders.append('device-id', '')
//     myHeaders.append('request-id', 'a284d83c-e873-480e-8a00-e39418d0bb45')
//     myHeaders.append('Hc-Proj-Info', 'project/his-wxapp;type/miniapp;ch/wechat;ver/mix;')
//     myHeaders.append('User-Agent', 'Apifox/1.0.0 (https://apifox.com)')
//     myHeaders.append('content-type', 'application/x-www-form-urlencoded')

//     var urlencoded = new URLSearchParams()
//     urlencoded.append('hisId', '187')
//     urlencoded.append('platformId', '187')
//     urlencoded.append('platformSource', '3')
//     urlencoded.append('subSource', '1')
//     urlencoded.append('scheduleDate', '2024-05-18')
//     urlencoded.append('subHisId', '18701')
//     urlencoded.append('deptId', '11_43')
//     urlencoded.append('doctorId', '1-1217')
//     urlencoded.append('t', '202405')
//     urlencoded.append('sign', '2621749B20BA7A6BD727D77BE5732AB6')
//     urlencoded.append('login_access_token', '1715568238038-ED4FA8B26D01C1BB61CD78')

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: urlencoded,
//         redirect: 'follow'
//     }

//     fetch('/xhApi/api/customize/latest/getdoctorallschedule?_route=h187&login_access_token=1715568238038-ED4FA8B26D01C1BB61CD78', requestOptions)
//         .then(response => response.json())
//         .then(res => {
//             jduge(res, 18)
//         })
//         .catch(error => console.log('error', error))
// }

function jduge(res, flag) {
    self.postMessage({ res, flag })
}
