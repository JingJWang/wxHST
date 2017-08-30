// type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bodyHeight: 0,
    typeid:  '',
    logsa: [],      //设备
    phonetype: [],   //手机
    phoneId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPhoneA();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        wx.setStorageSync('height', res.windowHeight)
        that.setData({
          SystemInfo: res,
          'bodyHeight': res.windowHeight
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  //点击左边的修改标题栏的值
  leftType: function(e){
    var that = this;
    var id = e.currentTarget.id;
    that.setData({   
      'currentItem': id
    })
    //改变标题的值
    var tmpTitle = e.currentTarget.dataset.text
    wx.setNavigationBarTitle({
      title: tmpTitle 
    });
    wx.request({
      url: 'http://www.wxmjj.com/index.php/nonstandard/option/type',
      method: 'post',//get为默认方法/POST
      data: {//发送给后台的数据
        id: id
      }, 
      header: { "Content-Type": "application/x-www-form-urlencoded" }, // 设置请求的 header
      success: function (res) {
        that.setData({    //如果在sucess直接写this就变成了wx.request()的this了.必须为getdata函数的this,不然无法重置调用函数
          phonetype: res.data.data
        })
      }
    })
  },

  //点击右边的手机型号，存值
  rightType: function(e){
    var shopid = e.currentTarget.id;
    var shopname = e.target.dataset.text;
    wx.setStorageSync('id', e.currentTarget.id)
    wx.setStorageSync('name', e.target.dataset.text)
    //页面跳转带id,name
    wx.navigateTo({
      url: '../repair/repair?id='+shopid+'&name='+shopname,
    })
  },

  //页面加载设备信息
  getPhoneA: function(){
    var that = this;
    //设备
    wx.request({
      url: 'http://www.wxmjj.com/index.php/nonstandard/option/brand',
      method: 'post',//get为默认方法/POST
      data: {//发送给后台的数据
        id:5
      },
      header: { "Content-Type": "application/x-www-form-urlencoded" }, // 设置请求的 header
      success: function (res) { 
        that.setData({    //如果在sucess直接写this就变成了wx.request()的this了.必须为getdata函数的this,不然无法重置调用函数
          logsa:res.data.data.brand,
          phonetype: res.data.data.type,
          currentItem:1
        })
      }
    })
  }
})
