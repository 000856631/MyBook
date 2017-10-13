# bookScan
第二个小程序
实现图书扫描录入的功能
当前完成客户端与服务的基本框架的熟悉与搭建。
了解KOA框架，同心圆周期的原则。
主要写了这个函数
const urllib = require('urllib')
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
  const { isbnCode } = ctx.query
  var options = {
    url: 'https://api.douban.com/v2/book/isbn/:' + isbnCode,
    headers: { 'User-Agent': 'request' }
  };

  var response = await request(options); //Yay, HTTP requests with no callbacks! 
  ctx.state.data = response;

}

通过urllib来外接API，之前尝试了https,http，还有KOA-request 遇到了不少挫折
对await和async的js新写法要好好熟悉熟悉，貌似通过这种方式可以消除难看的回调。
仔细想想还都是同心圆的思路。
豆瓣的API还是很不错的，记住只支持https.
对于ctx的用法要好好整理下，获取上下文的关键参数。 
本来我就对node的request和response就不是很熟，在这块也踩坑不少。
Request aliases

以下访问器和别名与 Request 等价：

    ctx.header
    ctx.method
    ctx.method=
    ctx.url
    ctx.url=
    ctx.originalUrl
    ctx.path
    ctx.path=
    ctx.query
    ctx.query=
    ctx.querystring
    ctx.querystring=
    ctx.host
    ctx.hostname
    ctx.fresh
    ctx.stale
    ctx.socket
    ctx.protocol
    ctx.secure
    ctx.ip
    ctx.ips
    ctx.subdomains
    ctx.is()
    ctx.accepts()
    ctx.acceptsEncodings()
    ctx.acceptsCharsets()
    ctx.acceptsLanguages()
    ctx.get()

Response aliases

以下访问器和别名与 Response 等价：

    ctx.body
    ctx.body=
    ctx.status
    ctx.status=
    ctx.length=
    ctx.length
    ctx.type=
    ctx.type
    ctx.headerSent
    ctx.redirect()
    ctx.attachment()
    ctx.set()
    ctx.remove()
    ctx.lastModified=
    ctx.etag=

Anyway，I have done it。
服务端的内容还需要补很多坑，之前第一个小程序只是采用现成的模版来实现的。
下一步，对于扫码获取的图书信息进行填充渲染。
记录我这个客户的图书信息。这里要涉及数据库了。
两张表，一张是我的图书列表信息，用openID做主键吧 其余字段有ISBN,图书图片url。
第二张表是图书表，通过ISBN号搜索出图书的信息，就用ISBN做主键吧，其余信息参考json来设计。
又是一个坑。慢慢填吧
或者看看小程序本地缓存来实现。貌似也可以。哈哈。
后续可以做分享我的图书清单。
盈利点：支付的用户可以实现导出到Excel。
已经通过本地缓存 简单记录了个人录入的图书信息了。
无需获取个人登录信息，还是比较良心的。
下一步就需要搞搞数据库。起码得获取用户的openID。
和表记录关联。
对于录入的图书。点开可以展现更丰富的内容。简介、作者、摘要之类。
并且可以录入用户的一些备注信息。
当然，也能让用户有自己的读书计划也是不错的。

这部分完善后，就可以做分享图书清单，以及陌生人借书社交的套路了。
一步一个脚印，慢慢来吧。
