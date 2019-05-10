// pages/sgs/show.js
var sgsdata = require('../../utils/sgsdata.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answers:{},
    answer:{},
    checked_0:false,
    checked_1:false
  },
//表单提交时间处理函数
  formSubmit:function(e){
    var nextId = e.detail.value.nextId;
    if(nextId == ''){
      return;
    }
    if(nextId.indexOf('result') != -1){
      var results = nextId.split('_');
      wx.navigateTo({
        url:'../sgs/result?id='+results[1]
      })
    }
    else{
      this.setData({
        checked_0:false,
        checked_1:false,
        answer:this.data.answers[nextId]
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var ans = sgsdata.getAnswer();
    this.setData({
      answers:ans,
      answer:ans[0]
    });
  }  
})