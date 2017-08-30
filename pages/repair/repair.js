// repair.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    heightt :'',
    phoneid : '',
    phoneTypeList: [],
    phoneType: [],
    phoneSmallType: [],
    hideType: '',                 //控制大类显示隐藏
    data_save: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id
    //console.log('当前手机id为'+id)
    //加载手机属性
    wx.request({
      url: 'http://www.wxmjj.com/index.php/nonstandard/submitorder/quotePlan',
      data: {//发送给后台的数据
        id: id
      },
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      method: 'post',
      success: function (res) {
        that.setData({
          phoneTypeList: res.data.data.attr,      //手机自己的大类属性
          phoneName: res.data.data.model,         //手机所有的大类属性
          phoneSmallType: res.data.data.info     //手机所有小类
        })
      }
    })
    //设置当前标题栏手机型号
    wx.setNavigationBarTitle({
      title: options.name,
    })
    //取值-height
    var that = this;
    wx.getStorage({
      key: 'height',
      success: function(res) {
        that.setData({
          heightt: res.data
        })
      }
    })
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

  // 点击手机所选属性，保存并选择下一个
  choose: function(e){
    var that=this;
    console.log(e)
    that.setData({
      // hideType : true
    })
  }

})