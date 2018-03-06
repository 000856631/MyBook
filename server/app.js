//重启服务器需要
const Koa = require('koa')
const app = new Koa()
const debug = require('debug')('koa-weapp-demo')
const response = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const later = require('./my_modules/later');
const noticeCenter = require('./batchHandle/noticeCenter');
//使用响应处理中间件
app.use(response)

// 解析请求体
app.use(bodyParser())

// 引入路由分发
const router = require('./routes')
app.use(router.routes())

// 启动程序，监听端口
app.listen(config.port, () => debug(`listening on port ${config.port}`))

//定时跑批量
console.log('开始跑批量调度了');

var composite = [
  { h: [20], m: [30] }
];
var sched = {
  schedules:composite
};
later.date.localTime();
var t = later.setInterval(function () {
  console.log("发送消息咯" + later.date.localTime());
  noticeCenter.noticeUser();
}, sched);
