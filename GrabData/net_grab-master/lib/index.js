const https = require('https');
const http = require('http');
const fs = require('fs');
const cheerio = require('cheerio');
const qs = require('querystring');
const colors = require('colors');
// var zhihu = 'https://www.zhihu.com/r/search?correction=1&type=content&offset=10&q='

function get(url, callback) {
  return http.get(url, function(response) {
    var body = '';

    response.on('data', function(data) {
      body += data;
    });

    response.on('end', function() {
      callback(body);
    });
  });
}

function request(options, callback) {
  // var postData = qs.stringify({});
  var body,
    req = https.request(options, (res) => {
      console.log('STATUS: ' + res.statusCode);
      // console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        body += chunk;
      });
      res.on('end', function() {
        callback(body)
      });
    });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  // write data to request body
  // req.write(postData);
  req.end();
}

function doubanRequest() {
  options = {
    hostname: 'www.douban.com',
    port: 443,
    path: '/note/701140485/',
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    }
  };

  request(options, function(body) {
    zhihuShowResult(body);
  });
}

function doubanSecondRequest(pathUrl) {
  options = {
    hostname: 'book.douban.com',
    path: pathUrl,
    port: 443,
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    }
  };

  request(options, function(body) {
    zhihuSecondShowResult(body);
  });
}

function baiduRequset(pageNo, pageSize, keyword) {
  var path = '/s?' + qs.stringify({
      ie: 'utf-8',
      f: 8,
      rsv_bp: 1,
      tn: 'baidu',
      rn: pageSize,
      pn: pageNo * pageSize,
      wd: keyword
    }),
    options = {
      hostname: 'www.baidu.com',
      port: 443,
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
      }
    };

  request(options, function(body) {
    saveFile(pageNo, keyword, body);
    showBaiduResult(pageNo, body);
  });
}

/**
 * save File
 * @param  {String} keyword 
 * @param  {String} content 
 * @return {[type]}         [description]
 */
function saveFile(pageNo, keyword, content) {
  var lastIndex = __dirname.lastIndexOf('/');
  var fileName = getCurrTimeString() + '-' + pageNo + '-' + keyword + '.html';
  fs.writeFile(__dirname.substr(0, lastIndex) + '/download/' + fileName, content, "utf8", function(err) {
    console.log("%s download %s", fileName, err ? "fail" : "success");
  });
}

function zhihuShowResult(body) {
  var $ = cheerio.load(body, {
    decodeEntities: false
  });
  var title, imgUrl, link;
  var pathArray = [];
  $('.subject-wrapper').each(function(i, item) {
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
  (function() {
    if (i >= 5) return;
    doubanSecondRequest(pathArray[i]);
    setTimeout(arguments.callee, 100);
    i++;
  }());

}

function zhihuSecondShowResult(body) {
  var openid = 'recommendBooks';
  var nickName = 'douban';
  var headImageUrl = 'headImageUrl1';
  var isbnNum, bookLogoUrl, bookName, authorName, content;
  var $ = cheerio.load(body, {
    decodeEntities: false
  });


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
}
/**
 * 显示结果
 * @param  {[type]} pageNo [description]
 * @param  {[type]} body   [description]
 * @return {[type]}        [description]
 */
function showBaiduResult(pageNo, body) {
  var title, summary, link,
    reg = /<[^<>]+>/g,
    $ = cheerio.load(body, {
      decodeEntities: false
    });

  $('#content_left .result').each(function(i, item) {
    var $a = $(item).find('h3 a');
    title = $a.html();
    link = $a.attr('href');
    summary = $(item).find('.c-abstract').html();
    if (title) {
      console.log(`第${pageNo+1}页 第${i+1}条`);
      console.log(`link: ${link}`.green);
      // console.log(`title: ${title}`);
      console.log('title: ');
      ouputColor(title);
      if (summary) {
        // console.log(`summary: ${summary}`);
        console.log('summary: ');
        ouputColor(summary);
      }
    }
    console.log('------------------------------');
    console.log('');
  });
}

function ouputColor(content) {
  var str = content.replace(/\"/g, '\\"').replace(/<em>/g, '"+"').replace(/<\/em>/g, '".red+"').replace(/<[^<>]+>/g, '');
  var fn = new Function(`console.log("${str}");`);
  fn();
}

/**
 * get time String
 * @return {[type]} [description]
 */
function getCurrTimeString() {
  var d = new Date();
  return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2) + '-' + d.getHours() + d.getMinutes() + d.getSeconds() + d.getMilliseconds();
}

/**
 * 百度搜索  间隔100ms调用一次
 * @param  {String}   keyword 
 * @param  {Function} cb     
 * @return {[type]}          
 */
exports.baiduSearch = function(keyword, cb) {
  var i = 0,
    size = 10,
    pages = 5;

  //     (function(){
  //       if(i>=pages) return;
  //       baiduRequset(i,size,keyword);
  //       setTimeout(arguments.callee, 50);
  //       i++;
  //     }());
  doubanRequest();
};

exports.zhihuSearch = function(keyword, cb) {
  var url = 'http://book.douban.com/subject_search?search_text=' + keyword;
  get(url, function(content) {
    console.log(content);
    var title, summary;
    var $ = cheerio.load(content, {
      decodeEntities: false
    });

    title = $('#title').html();

    if (summary) {
      console.log('summary: ');
      ouputColor(summary);
    }
    if (title) {
      console.log('title: ');
      ouputColor(title);
    }
    console.log('------------------------------');
    console.log('');

  });
};