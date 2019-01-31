const urllib = require('urllib');
const https = require('https');
const http = require('http');
const cheerio = require('cheerio');
const { mysql } = require('../qcloud');
async function request(options) {
  let data = null;
  const opts = Object.assign({ dataType: 'json' }, options);
  const url = options.url;
  const request = await urllib.request(url, opts);
  data = request.data;
  return data;
}
async function request(options, callback) {
  // var postData = qs.stringify({});
  var body,
    req = https.request(options, (res) => {
      console.log('STATUS: ' + res.statusCode);
      // console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        body += chunk;
      });
      res.on('end', function () {
        callback(body)
      });
    });

  req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
  });

  // write data to request body
  // req.write(postData);
  req.end();
}
async function doubanRequest() {
  options = {
    hostname: 'www.douban.com',
    port: 443,
    path: '/note/701140485/',
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    }
  };

  request(options, function (body) {
    zhihuShowResult(body);
  });
  
}
async function doubanSecondRequest(pathUrl) {
  options = {
    hostname: 'book.douban.com',
    path: pathUrl,
    port: 443,
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    }
  };

  request(options, function (body) {
    zhihuSecondShowResult(body);
  });
}
async function zhihuShowResult(body) {
  var $ = cheerio.load(body, { decodeEntities: false });
  var title, imgUrl, link;
  var pathArray = [];
  $('.subject-wrapper').each(function (i, item) {
    var $span = $(item).find('.title-text');
    link = $(item).find('a').attr('href');
    imgUrl = $(item).find('.subject-cover img').attr('src');
    title = $span.html();
    // 		console.log('title: ');
    // 		ouputColor(title);
    // 		console.log('link: '+link);
    // 		console.log('imgUrl: '+imgUrl);
    var pathUrl = '/subject/30304849/';
    pathUrl = link.substring(link.length - 18);
    // console.log('pathUrl: '+pathUrl);
    pathArray.push(pathUrl);

  });
  console.log('pathArray.length: ' + pathArray.length);
  var i = 0;
  (function () {
    if (i >= 5) return;
    doubanSecondRequest(pathArray[i]);
    setTimeout(arguments.callee, 100);
    i++;
  }());
  return pathArray;

}
async function zhihuSecondShowResult(body) {
  var openid = 'recommendBooks';
  var nickName = 'douban';
  var headImageUrl = 'headImageUrl1';
  var isbnNum, bookLogoUrl, bookName, authorName, content;
  var $ = cheerio.load(body, { decodeEntities: false });


  var $info = $('.subjectwrap').find('#info');
  // console.log('info :' + $info.html());
  var infoStr = $info.html();

  var isbnStr = infoStr.substring(infoStr.indexOf('ISBN:'));
  isbnNum = isbnStr.substring(13, 26);

  console.log('isbnNum:' + isbnNum);
  bookLogoUrl = $('#mainpic a').attr('href');
  console.log('bookLogoUrl:' + bookLogoUrl);
  bookName = $('#mainpic a').attr('title');
  console.log('bookName:' + bookName);
  content = $('.intro').html();
  content = content.replace(/<\/?.+?>/g, "");
  // console.log('content:'+content);
  var $span = $info.children('span').first().text();
  $span = $span.replace(/\ +/g, "");
  authorName = $span.replace(/[\r\n]/g, "");
  console.log('authorName:' + authorName);
  mysql('bookInfo').insert({ isbnNum: isbnNum, openid: 'recommendBooks', nickName: 'Douban', headImageUrl: 'SamelImage', bookLogoUrl: bookLogoUrl, bookName: bookName, authorName: authorName, content: content }).returning('*').then(res => {
    console.log(res)
  });
}
module.exports = async ctx => {
  // 获取上传之后的结果
  // 具体可以查看：

  doubanRequest(); //Yay, HTTP requests with no callbacks! 
  ctx.state.data = '爬取成功';

}
