const urllib = require('urllib');
const { mysql } = require('../qcloud');
async function request( options) {
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

  const { isbnCode } = ctx.query;
  const { openId } = ctx.query;
  var options = {
    url: 'https://api.douban.com/v2/book/isbn/:' + isbnCode,
    headers: { 'User-Agent': 'request' }
  };

  var response = await request(options); //Yay, HTTP requests with no callbacks! 
//ctx.state.$wxInfo.userinfo.openid
  const nickName = 'nickName1';  //ctx.state.$wxInfo.userinfo.nickName
  const headImageUrl = 'headImageUrl1';  
  //插入人和书的关系
  mysql('bookInfo').insert({ isbnNum: isbnCode, openid: openId, nickName: nickName, headImageUrl: headImageUrl , bookLogoUrl: response.image, bookName: response.title, authorName: response.author[0], content:response.summary}).returning('*').then(res => {
    console.log(res)
  });
  // mysql('bookDetail').insert({ isbnNum: isbnCode, openid: openId, nickName: nickName, headImageUrl: headImageUrl, bookLogoUrl: response.image, bookName: response.title, authorName: response.author[0], content: response.summary }).returning('*').then(res => {
  //   console.log(res)
  // });
  //插入书籍 的详细关系，以isbnCode为主键
  ctx.state.data = response;

}
