// pages/success/success.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // wx.showModal({
    //   title: '提示',
    //   content: '您的帐户已冻结，请联系客服解除。客服电话' + app.globalData.phone,
    //   success:function(){
    //     if (res.confirm) {
    //       wx.navigateBack({
    //         delta: -1
    //       })
    //     } else if (res.cancel) {
    //       wx.navigateBack({
    //         delta: -1
    //       })
    //     } else {
    //       wx.navigateBack({
    //         delta: -1
    //       })
    //     }
    //   },
    // })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

     wx.hideHomeButton();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})