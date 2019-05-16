//pages/menu/index.js
var common = require('../utils/common.js')
Page({
    data: {
        menus: null
    },
    onLoad: function (options) {
        var that = this
        wx.request({
            url: common.baseUrl + 'index.php/api/menu/get_menus',
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                that.setData({
                    menus: res.data
                })
            }
        });
    },
    preview: function (e) {
        var imgsrc = e.target.dataset.imgsrc;
        wx.previewImage({
            current: imgsrc,
            urls: [imgsrc]
        })
    },
    oonShareAppMessage: function () {
        return {
            this: '我在海底捞预定了位置，快过来啊',
            path: '/pages/order/index'
        }
    }
})