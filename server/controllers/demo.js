const { mysql } = require('../qcloud');
module.exports = async ctx => {
  // mysql('testBook').insert({  nickName: 'Tom', imageUrl: 'www.baidu.com', isbnNum: '18' }).returning('*').then(res => {
  //   console.log(res)
  // })
  const data = await mysql('bookInfo').select('*').where({ nickName: 'nickName' });

  ctx.state.data = { bookArray:data

  };
   


}