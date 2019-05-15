//pages/order/my.js
var common = require('../../utils/common.js')
var app = getAPP()
Page({
    data: {
        userInfo: null,
        queue: null
    },
    reFresh:function(){
        var that = this
        wx.request({
            url: common.baseUrl + 'index.php/api/user/my_queue?gusetId=' + app.globalData.openid,
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                if(res.data.msg == 'NO'){
                    wx.showModal({
                        title:'提示',
                        showCancle:false,
                        content:'您还未取号，将跳转到取号页面',
                        success:function(res){
                            if(res.confirm){
                                wx.switchTab({
                                    url:'../order/index'
                                })
                            }
                        }
                    })
                }
                that.setData({
                    queue:res.data
                })
            }
        });
    },
    onShow:function(){
        this.reFresh();
    },
    onPullDownRefresh: function () {
        this.reFresh();
        wx.stopPullDownRefresh();
    },
    onShareAppMessage: function () {
        return {
            this: '我在海底捞预定了位置，快过来啊',
            path: '/pages/order/index'
        }
    }
})