//index.js
var common = require('../../utils/common.js')
var app = getApp()
Page({
    data: {
        queues: null,
    },
    gotoQueue: function (e) {
        var catid = e.target.dataset.catid;
        wx.navigateTo({
            url: '../order/queue?catid=' + catid
        })
    },
    onLoad: function () {
        var that = this
        app.getUserInfo(function (userInfo) {
            that.setData({
                userInfo: userInfo
            })
        })
    },
    onShow: function () {
        this.reLoad()
    },
    onPullDownRefresh: function () {
        this.reLoad();
        wx.stopPullDownRefresh();
    },
    reFresh: function () {
        this.reLoad
    },
    reLoad: function () {
        var that = this
        wx.request({
            url: common.baseUrl + 'index.php/api/user/queues',
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                that.setData({
                    queues: res.data
                })
            }
        });
    },
    onShareAppMessage: function () {
        return {
            this: '我在海底捞预定了位置，快过来啊'，
            path: '/pages/order/index'
        }
    }
})