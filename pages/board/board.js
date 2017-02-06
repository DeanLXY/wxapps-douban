Page({
    data:{
        imgUrls:[
            "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2411953504.jpg",
            "https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2413341026.jpg",
            "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2416009294.jpg"
        ]
    }
    ,
    onLoad(){
        wx.showNavigationBarLoading()
        //页面启动请求网络
        // wx.request({
        //   url: 'https://URL',
        //   data: {},
        //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        //   // header: {}, // 设置请求的 header
        //   success: function(res){
        //     // success
        //   },
        //   fail: function() {
        //     // fail
        //   },
        //   complete: function() {
        //     // complete
        //   }
        // })
    },
    onReady(){
        wx.hideNavigationBarLoading()
    }
})