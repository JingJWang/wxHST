//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    bodyHeight: 0,
    adress: {},
    hot: [
      { img: '/img/hot1.jpg', p_name: '华为荣耀4A', p_price: '430'},
      { img: '/img/hot2.jpg', p_name: '苹果6s', p_price: '1300' },
      { img: '/img/hot3.jpg', p_name: '小米2', p_price: '450' },
      { img: '/img/hot4.jpg', p_name: '华为荣耀5x', p_price: '830' },
      { img: '/img/hot5.jpg', p_name: '乐2 Pro', p_price: '600' },
      { img: '/img/hot8.jpg', p_name: 'vivo x7 金色64g', p_price: '960' }
    ],
    logo_one: [
      { img: '/img/logo1.png', name: '苹果' },
      { img: '/img/logo2.png', name: '小米' },
      { img: '/img/logo3.png', name: '华为' },
      { img: '/img/logo4.png', name: '荣耀' },
      { img: '/img/logo5.png', name: '三星' },
      { img: '/img/logo6.png', name: 'oppo' },
      { img: '/img/logo7.png', name: 'vivo' },
      { img: '/img/logo8.png', name: '魅族' }
    ],
    logo_two: [
      { img: '/img/logo9.png', name: '酷派' },
      { img: '/img/logo10.png', name: '金立' },
      { img: '/img/logo11.png', name: '乐视' },
      { img: '/img/logo12.png', name: '联想' },
      { img: '/img/logo13.png', name: '诺基亚' },
      { img: '/img/logo14.png', name: 'htc' },
      { img: '/img/logo15.png', name: '索尼' },
      { img: '/img/logo16.png', name: '中信' }
    ],
    logo_three: [
      { img: '/img/logo17.png', name: '美图' },
      { img: '/img/logo18.png', name: '努比亚' },
      { img: '/img/logo19.png', name: '360' },
      { img: '/img/logo20.png', name: '一加' },
      { img: '/img/logo21.png', name: '锤子' },
      { img: '/img/logo22.png', name: '摩托罗拉' },
      { img: '/img/logo23.png', name: '移动' },
      { img: '/img/logo24.png', name: 'LG' }
    ],
    videoSrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    poster: 'http://www.wxmjj.com/static/m/images/banner09091.jpg',
    scrollTop: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          SystemInfo: res,
          'bodyHeight': res.windowHeight
        })
      },
    })
  },
  //滚动监听
  scrollPlay: function (e) {
    var that = this,scrollTop = that.data.scrollTop;
    that.setData({
      scrollTop: e.detail.scrollTop
    })
  }

})