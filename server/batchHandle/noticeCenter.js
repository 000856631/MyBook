const urllib = require('urllib');
const config = require('../config.js');
const { mysql } = require('../qcloud');
async function request(options) {
  let data = null;
  const opts = Object.assign({ dataType: 'json' }, options);
  const url = options.url;
  const request = await urllib.request(url, opts);
  data = request.data;
  return data;
}

async function noticeUser() {
  var appSecret = config.appSecret;
  var appId = config.appId;
  var options = {
    url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxdfb69c89ef6d53ed&secret=20229591c4a0b47782661423dccc4f98',
    headers: { 'User-Agent': 'request' }
  };
  var response = await request(options);
  console.log('获取token:' + response.access_token);
  var access_token = response.access_token;
  var noticeUrl = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + access_token;

  var data = await mysql('noticeList').select('*').where({ status: 0 });
    console.log('能执行我自定义的方法noticeUser');
    await mysql('noticeList').update({ status: 1 }).where({ status: 0 });
    for (j = 0; j < data.length; j++) {
      var openId = data[j].openid;
      var form_id = data[j].formid;
      var bookName = data[j].bookName;
      var data = {
        touser: openId,
        template_id: 'GqWlQenk7T26mDNVxhCz9pX2N8skbtTPqVAQy6i8bFY',
        page: 'pages/main/main',
        form_id: form_id,
        "data": {
          "keyword1": {
            "value": bookName,
            "color": "#173177"
          },
          "keyword2": {
            "value": "夜晚8:30分，最适合阅读的时候。请远离手机和其余电子设备，静静享受独自的阅读时光",
            "color": "#173177"
          }
        },
        "emphasis_keyword": "keyword1.DATA"

      };
      var noticeOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        url: noticeUrl,
        data: data

      };
      request(noticeOptions);
    }

  }
module.exports.noticeUser = noticeUser;
