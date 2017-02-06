var requestNewData = function (that, type) {
    //请求数据
    wx.request({
        url: 'https://api.douban.com/v2/movie/' + type,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        }, // 设置请求的 header
        success: function (res) {
            // success
            console.log(res.data)
            if (that.data.subjects.length) {
                that.setData({
                    subjects: that.data.subjects.concat(res.data.subjects),
                    loading: false,
                    title: type
                })
            }
            else {
                that.setData({
                    subjects: res.data.subjects,
                    loading: false,
                    title: type
                })
            }

            wx.setNavigationBarTitle({
                title: that.data.title
            })
            wx.hideNavigationBarLoading()
            //停止刷新
            wx.stopPullDownRefresh()
        },
        fail: function () {
            // fail
        },
        complete: function () {
            // complete
        }
    })
}


Page({
    data: {
        title: "加载中...",
        loading: true,
        type: "in_theaters",
        windowHeight: 0,
        subjects: []
    }
    ,
    onLoad(params) {
        var that = this
        wx.getSystemInfo({
            success: function (res) {
                // success
                that.setData({
                    windowHeight: res.windowHeight
                })
                console.log(res.windowHeight)
            }
        })
        wx.setNavigationBarTitle({
            title: this.data.title
        })
        var that = this
        var type = params.type
        this.data.type = type
        this.setData({
            type: type
        })
        requestNewData(that, type)
    },
    onPullDownRefresh() {
        this.setData({
            subjects: [],
            loading: true
        })
        requestNewData(this, this.data.type)
    },
    handleScrolltolower() {
        console.log("滑动到底部了了.....")
        wx.showNavigationBarLoading()
        this.setData({
            title: "正在加载更多数据...",
            loading: true
        })
        requestNewData(this, this.data.type);
    }
})