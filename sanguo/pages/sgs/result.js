// pages/sgs/result.js
var sgsdata = require('../../utils/sgsdata.js')
//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options['id']
    var result = sgsdata.getResult();
    this.setData({
      result:results[id]
    });
  }
})