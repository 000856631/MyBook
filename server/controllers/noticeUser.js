const urllib = require('urllib');
const config = require('../config.js');
async function request(options) {
  let data = null;
  const opts = Object.assign({ dataType: 'json' }, options);
  const url = options.url;
  const request = await urllib.request(url, opts);
  data = request.data;
  return data;
}
module.exports = async ctx => {
  // 获取上传之后的结果
  // 具体可以查看：
  
  const { openId } = ctx.query;
  const { form_id } = ctx.query;
  
  var appSecret = config.appSecret;
  var appId = config.appId;
  var options = {
    url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxdfb69c89ef6d53ed&secret=20229591c4a0b47782661423dccc4f98',
    headers: { 'User-Agent': 'request' }
  };
  var response = await request(options);
  console.log('获取token:'+response);
  var access_token = response.access_token;
  var noticeUrl = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + access_token;
  var data = {
    touser: openId,
    template_id: 'GqWlQenk7T26mDNVxhCz9pX2N8skbtTPqVAQy6i8bFY',
    page: 'main',
    form_id: form_id,
    "data": {
      "keyword1": {
        "value": "《白夜行》",
        "color": "#173177"
      },
      "keyword2": {
        "value": "我已阅读53个小时，看到第34章，请关闭手机和微信，继续保持阅读的习惯",
        "color": "#173177"
      }
    },
    "emphasis_keyword": "keyword1.DATA" 

  };
  var noticeOptions = {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    url: noticeUrl,
    data: data
    
  }
  var noticeRespinse = await request(noticeOptions);
  var accsssToken = {
    accessToken: 'accessToken'
  };
  //插入书籍 的详细关系，以isbnCode为主键
  ctx.state.data = accsssToken;

}
