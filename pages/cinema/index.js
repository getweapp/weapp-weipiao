Page({
    data: {
        title: ''
    },
    //事件处理函数
    onLoad: function (options) {
        var that = this

        //playingList
        wx.request({
            url: 'https://api.getweapp.com/vendor/bmbstack/cinemaList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                console.log(res.data)
                that.data.items = res.data
            }
        })
    },
    onReady: function () {
        wx.setNavigationBarTitle({
            title: '电影院'
        })
    },
})
