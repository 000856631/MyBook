const { mysql } = require('../qcloud');
module.exports = async ctx => {
  // 获取上传之后的结果
  // 具体可以查看：

  const { openId } = ctx.query;
  debugger;
  const { form_id } = ctx.query;
  const { bookName 	} = ctx.query;
  mysql('noticeList').insert({ openid: openId, bookName: bookName, formid: form_id, status: 0}).returning('*').then(res => {
    console.log(res);
    
  });
  //插入书籍 的详细关系，以isbnCode为主键
   ctx.state.data = {
    returnMessage: '插入记录了'

  };


}
