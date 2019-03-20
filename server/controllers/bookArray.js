const { mysql } = require('../qcloud');
module.exports = async ctx => {
  // mysql('testBook').insert({  nickName: 'Tom', imageUrl: 'www.baidu.com', isbnNum: '18' }).returning('*').then(res => {
  //   console.log(res)
  // })
  const { openId } = ctx.query;
  var data;
  if (openId)
  {
    data = await mysql('bookInfo').select('*').where({ openid: openId });
  }else
  {
     data = "userName empty";
  }
  

  ctx.state.data = {
    bookArray: data

  };



}