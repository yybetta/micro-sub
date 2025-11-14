self.addEventListener(
    'message',
    function (e) {
        setInterval(() => {
            // test18()
            // test25()
            // fetchPengwei()
            // fetchliuwei()
            fetchGuobo()
        }, 5000)
    },
    false
)

function test18() {
    var myHeaders = new Headers()
    myHeaders.append('client', 'patient')
    myHeaders.append('channel', 'wx_xcx')
    myHeaders.append('uid', '5022711176020197382')
    myHeaders.append('his-id', '187')
    myHeaders.append('Hc-Src-Hisid', '187')
    myHeaders.append('uuid', '0d18658e-d1e7-4965-b323-4453166c4d86')
    myHeaders.append('device-id', '')
    myHeaders.append('request-id', 'a284d83c-e873-480e-8a00-e39418d0bb45')
    myHeaders.append('Hc-Proj-Info', 'project/his-wxapp;type/miniapp;ch/wechat;ver/mix;')
    myHeaders.append('User-Agent', 'Apifox/1.0.0 (https://apifox.com)')
    myHeaders.append('content-type', 'application/x-www-form-urlencoded')

    var urlencoded = new URLSearchParams()
    urlencoded.append('hisId', '187')
    urlencoded.append('platformId', '187')
    urlencoded.append('platformSource', '3')
    urlencoded.append('subSource', '1')
    urlencoded.append('scheduleDate', '2024-05-18')
    urlencoded.append('subHisId', '18701')
    urlencoded.append('deptId', '11_43')
    urlencoded.append('doctorId', '1-1217')
    urlencoded.append('t', '202405')
    urlencoded.append('sign', '2621749B20BA7A6BD727D77BE5732AB6')
    urlencoded.append('login_access_token', '1715568238038-ED4FA8B26D01C1BB61CD78')

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    }

    fetch(
        '/xhApi/api/customize/latest/getdoctorallschedule?_route=h187&login_access_token=1715568238038-ED4FA8B26D01C1BB61CD78',
        requestOptions
    )
        .then((response) => response.json())
        .then((res) => {
            jduge(res, 18)
        })
        .catch((error) => console.log('error', error))
}

function test25() {
    var myHeaders = new Headers()
    myHeaders.append('client', 'patient')
    myHeaders.append('channel', 'wx_xcx')
    myHeaders.append('uid', '5022711176020197382')
    myHeaders.append('his-id', '187')
    myHeaders.append('Hc-Src-Hisid', '187')
    myHeaders.append('uuid', '360ded6b-7fa3-4775-9c03-436500eb3a71')
    myHeaders.append('device-id', '')
    myHeaders.append('request-id', '6463f5e7-6afa-4063-8ea8-3e8a7c700df8')
    myHeaders.append('Hc-Proj-Info', 'project/his-wxapp;type/miniapp;ch/wechat;ver/mix;')
    myHeaders.append('User-Agent', 'Apifox/1.0.0 (https://apifox.com)')
    myHeaders.append('content-type', 'application/x-www-form-urlencoded')

    var urlencoded = new URLSearchParams()
    urlencoded.append('hisId', '187')
    urlencoded.append('platformId', '187')
    urlencoded.append('platformSource', '3')
    urlencoded.append('subSource', '1')
    urlencoded.append('scheduleDate', '2024-05-25')
    urlencoded.append('subHisId', '18701')
    urlencoded.append('deptId', '11_43')
    urlencoded.append('doctorId', '1-1217')
    urlencoded.append('t', '202405')
    urlencoded.append('sign', '953561BC5FAD4243B69158B1EAAB6E81')
    urlencoded.append('login_access_token', '1715568238038-ED4FA8B26D01C1BB61CD78')

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    }

    fetch(
        '/xhApi/api/customize/latest/getdoctorallschedule?_route=h187&login_access_token=1715568238038-ED4FA8B26D01C1BB61CD78',
        requestOptions
    )
        .then((response) => response.json())
        .then((res) => {
            jduge(res, 25)
        })
        .catch((error) => console.log('error', error))
}

// 彭炜
function fetchPengwei() {
    const myHeaders = new Headers()
    myHeaders.append('Host', 'mix.whxh.com.cn')
    myHeaders.append('Connection', 'keep-alive')
    myHeaders.append('Content-Length', '236')
    myHeaders.append('client', 'patient')
    myHeaders.append('content-type', 'application/x-www-form-urlencoded')
    myHeaders.append('channel', 'wx_xcx')
    myHeaders.append('uid', '5022711176020197382')
    myHeaders.append('his-id', '187')
    myHeaders.append('Hc-Src-Hisid', '187')
    myHeaders.append('uuid', 'cafaa44e-b470-4397-9205-e72901a5f6aa')
    myHeaders.append('device-id', '')
    myHeaders.append('request-id', '6ce316b3-42f5-4857-9402-217e00950c22')
    myHeaders.append('Hc-Proj-Info', 'project/his-wxapp;type/miniapp;ch/wechat;ver/mix;')
    myHeaders.append('Accept-Encoding', 'gzip,compress,br,deflate')
    myHeaders.append(
        'User-Agent',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.54(0x1800363a) NetType/4G Language/zh_CN'
    )
    myHeaders.append('Referer', 'https://servicewechat.com/wxd07219591f885e68/188/page-frame.html')

    const urlencoded = new URLSearchParams()
    urlencoded.append('hisId', '187')
    urlencoded.append('platformId', '187')
    urlencoded.append('platformSource', '3')
    urlencoded.append('subSource', '1')
    urlencoded.append('scheduleDate', '2025-01-10')
    urlencoded.append('subHisId', '18701')
    urlencoded.append('deptId', '11_43')
    urlencoded.append('doctorId', '1-1217')
    urlencoded.append('bizSource', '1')
    urlencoded.append('t', '202501')
    urlencoded.append('sign', '4D1CCC5DE2A1F0D968E34F5924672828')
    urlencoded.append('login_access_token', '1736209509499-4C42599D5F1AB44EF2939B')

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    }

    fetch(
        '/xhApi/api/customize/latest/getdoctorallschedule?_route=h187&login_access_token=1736209509499-4C42599D5F1AB44EF2939B',
        requestOptions
    )
        .then((response) => response.json())
        .then((res) => {
            jduge(res, '10号')
        })
        .catch((error) => console.log('error', error))
}

// 刘伟
function fetchliuwei() {
    var myHeaders = new Headers()
    myHeaders.append('Host', 'mix.whxh.com.cn')
    myHeaders.append('Connection', 'keep-alive')
    myHeaders.append('Content-Length', '237')
    myHeaders.append('client', 'patient')
    myHeaders.append('content-type', 'application/x-www-form-urlencoded')
    myHeaders.append('channel', 'wx_xcx')
    myHeaders.append('uid', '5022711176020197382')
    myHeaders.append('his-id', '187')
    myHeaders.append('Hc-Src-Hisid', '187')
    myHeaders.append('uuid', 'db0b65eb-3db0-46f4-93dc-5ee3628d3967')
    myHeaders.append('device-id', '')
    myHeaders.append('request-id', 'ff603c72-9f55-4353-af21-ac23dd86cf9b')
    myHeaders.append('Hc-Proj-Info', 'project/his-wxapp;type/miniapp;ch/wechat;ver/mix;')
    myHeaders.append('Accept-Encoding', 'gzip,compress,br,deflate')
    myHeaders.append(
        'User-Agent',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.55(0x1800372f) NetType/4G Language/zh_CN'
    )
    myHeaders.append('Referer', 'https://servicewechat.com/wxd07219591f885e68/207/page-frame.html')

    var urlencoded = new URLSearchParams()
    urlencoded.append('hisId', '187')
    urlencoded.append('platformId', '187')
    urlencoded.append('platformSource', '3')
    urlencoded.append('subSource', '1')
    urlencoded.append('scheduleDate', '2025-05-05')
    urlencoded.append('subHisId', '18701')
    urlencoded.append('deptId', '10_340')
    urlencoded.append('doctorId', '1-2624')
    urlencoded.append('bizSource', '1')
    urlencoded.append('t', '202504')
    urlencoded.append('sign', '10C4C6D35D7395C0F640129B3C1A02BC')
    urlencoded.append('login_access_token', '1745801567395-1C43E696A9DB7FC2C029A8')

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    }

    fetch(
        '/xhApi/api/customize/latest/getdoctorallschedule?_route=h187&login_access_token=1745801567395-1C43E696A9DB7FC2C029A8',
        requestOptions
    )
        .then((response) => response.json())
        .then((res) => {
            jduge(res, '5.5号')
        })
        .catch((error) => console.log('error', error))

    // fetch(
    //     '/xhApi/api/customize/latest/getdoctorallschedule?_route=h187&login_access_token=1736209509499-4C42599D5F1AB44EF2939B',
    //     requestOptions
    // )
    //     .then((response) => response.json())
    //     .then((res) => {
    //         jduge(res, '10号')
    //     })
    //     .catch((error) => console.log('error', error))
}

function fetchGuobo() {
    var myHeaders = new Headers()
    myHeaders.append('Host', 'wapticket.chnmuseum.cn')
    myHeaders.append('Connection', 'keep-alive')
    myHeaders.append('Host-Ip', '')
    myHeaders.append(
        'cookie',
        'wzws_sid=70fae55110e030b0df42fe360f5e298e3b7d34fe2235a3dd22eb2d7cce146e20b9e33c5b50d8ed77b0a1eaa8a4b497438d01e630efb0754c325c06417b93d05f457ab8912cfb8342d3128f0df23c4b07ee3deeae3e1f4b16ebf111d5348eb0a4003e5226a71a1fd037c05b1b541195f9bdc6af4ca34a7ab771fa82fd2ac2b9f76c50b6d6cbc9de92f3e51d75787ae8a9a245661cd2209ec3277015bf79022840c6014ea8581bf60d61cafc16d48aba47d6feb7d7fa02cfeb66977ed0858fe2df0e40289c93741430d1f123e266834c9b; Max-Age=1800; Path=/; HttpOnly; SameSite=Lax; wzws_sessionid=gTc3ZGQ1YoAxMTMuNTcuMTc0LjE4oGjbS+yCNTM5Y2Ri'
    )
    myHeaders.append('content-type', 'application/json')
    myHeaders.append('Accept', 'application/json')
    myHeaders.append('Accept-Encoding', 'gzip,compress,br,deflate')
    myHeaders.append(
        'User-Agent',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.63(0x18003f2f) NetType/WIFI Language/zh_CN'
    )
    myHeaders.append('Referer', 'https://servicewechat.com/wx9e2927dd595b0473/95/page-frame.html')

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }

    fetch(
        '/guoboApi/prod-api/basesetting/HallSetting/ingore/gainAllSystemConfig?channel=wxMini&requestTaskKey=gainAllSystemConfigLogin&ticketUseType=1&p=wxmini',
        requestOptions
    )
        .then((response) => response.json())
        .then((res) => {
            jduge(res, '6号')
        })
        .catch((error) => console.log('error', error))
}

function jduge(res, flag) {
    self.postMessage({ res, flag })
}
