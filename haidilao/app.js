//app.js
var common = require('./utils/common.js')
App({
  onLaunch: function () {
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
    // 登录
    wx.login({
      success: function (res) {
        wx.getUserInfo({
          success: function (res) {
            console.log(res);
            // 可以将 res 发送给后台解码出 unionId
            that.globalData.userInfo = res.userInfo
            typeof cb == "function" && cb(that.globalData.userInfo)
          }
        })
        if (res.code) {
          console.log(res);
          wx.request({
            url: common.baseUrl + 'index.php/api/user/wxlogin',
            data: {
              code: res.code
            },
            sucess: function (res) {
              that.globalData.opendid = res.data.openid
              wx.setStorage({
                key:"openid",
                data:res.data.openid
              })

            }
          })
        }else{
          console.log('获取用户登录状态失败！'+ res.errMsg)
        }
      }
    })
  }
},
globalData:{
  userInfo:null,
  openid:null
}
})