//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
var util = require('./utils/util.js')
App({
  globalData: {
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl);
        this.login();

    },

    login: function () {
      if (this.globalData.logged) return

      util.showBusy('正在登录')
      var that = this

      // 调用登录接口
      qcloud.login({
        success(result) {
          if (result) {
            util.showSuccess('登录成功')
            console.log(result);
            that.globalData.userInfo = result.data.data;
            // console.log('that.globalData.userInfo1' + that.globalData.userInfo.openId);
            // userInfo = result;
            // that.setData({
            //   userInfo: result,
            //   logged: true
            // })
          } else {
            // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
            qcloud.request({
              url: config.service.requestUrl,
              login: true,
              success(result) {
                util.showSuccess('登录成功')
                console.log(result.data.data);
                that.globalData.userInfo = result.data.data;
                // console.log('that.globalData.userInfo2' + that.globalData.userInfo.openId);
                // that.set({
                //   userInfo: result.data.data,
                //   logged: true
                // })
              },

              fail(error) {
                util.showModel('请求失败', error)
                console.log('request fail', error)
              }
            })
          }
        },

        fail(error) {
          util.showModel('登录失败', error)
          console.log('登录失败', error)
        }
      })
    },
})