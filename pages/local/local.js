var app = getApp()
Page({
  /**  * 页面的初始数据*/
  data: {
    
  },

  /*** 生命周期函数--监听页面加载*/
  onLoad: function () {
      var that = this;
      wx.getSystemInfo({
        success: function (res) {
          //把设备信息的值赋给标题栏
          var localPhone = res.model
          wx.setNavigationBarTitle({
            title: '搜索 -' + localPhone
          })
          //设备信息
          that.setData({
            SystemInfo: res
          })
          that.update()
        },
      })
  },

  /*** 生命周期函数--监听页面初次渲染完成 */
  onReady: function () {

  },

  /** * 生命周期函数--监听页面显 */
  onShow: function () {
  
  },

  /** * 生命周期函数--监听页面隐藏*/
  onHide: function () {
  
  },

  /*** 生命周期函数--监听页面卸载*/
  onUnload: function () {
  
  },

  /** * 页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh: function () {
  
  },

  /*** 页面上拉触底事件的处理函数*/
  onReachBottom: function () {
  
  },

  /** * 用户点击右上角分享*/
  onShareAppMessage: function () {
  
  },

  //点击取消跳转到手机列表页面
  goTypePhone: function(){
    wx.redirectTo({
        url: '../type/type'
    })
  }
})