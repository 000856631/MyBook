var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
Page({
  onLoad: function () {
  },
  
  runScanCode:function()
  {
    wx.scanCode({
      onlyFromCamera: true,
      success: function(res) {
        // console.log(res);
        var isbnCode = res.result;
        util.showBusy('请求中...')
        var that = this
        console.log('url地址：', config.service.bookInfoUrl);
        var options = {
          url: config.service.bookInfoUrl,
          data:{
            isbnCode: isbnCode
          },
          login: true,
          success(result) {
            
            console.log('request success', result.data.data);
            wx.setStorage({
              key: result.data.data.isbn13,
              data: result.data.data
            })
            util.showModel('成功',result.data.data.title);
          },
          fail(error) {
            util.showModel('请求失败', error);
            console.log('request fail', error);
          }
        }

         wx.request(options)
        
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
  
});