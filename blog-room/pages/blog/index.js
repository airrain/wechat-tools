//index.js
var feed = require('../../utils/feed.js')
var common = require('../../utils/common.js')
var app = getApp()
Page({
    data:{
        feeds:{},
    },
    updateNews:function(){
        var that = this
        wx.request({
            url:common.baseUrl + 'news_rss.python',
            data:{},
            header:{
                'Content-Type':'application/json'
            },
            success:function(res){
                var feeds = feed.getItems(res.data);
                wx.setStorage({
                    key:"news_feeds",
                    data:feeds
                })
                that.setData({
                    feeds:feeds
                })
            }
        })
    }

})