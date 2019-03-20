// pages/test/test.js
const config = require('../../config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.formId);
    var self = this;
    var app = getApp();//取得全局App({..})实例
    var userInfo = app.globalData.userInfo;//取得全局变量需要的值
    var list = new Array();
    console.log('homePage:'+userInfo.openId);
    console.log("请求的url" + config.service.noticeUser);
    var options = {
      url: config.service.noticeUser,
      data: {
        openId: userInfo.openId,
        form_id: e.detail.formId,
        bookName:'白夜行'
      },
      login: true,
      success(result) {

        console.log('获取token request success', result);
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    }

    wx.request(options)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})