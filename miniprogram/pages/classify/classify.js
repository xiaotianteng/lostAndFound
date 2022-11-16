// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    asideBar: [
      "卡片、证件类",
      "生活用品",
      "数码产品",
      "美妆护肤类",
      "衣服物品类",
      "饰品",
      "文娱",
      "其他"
    ],
    select:0,
  },

  selectLeft(e) {
    const {index} = e.currentTarget.dataset;
    this.setData({
      select: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    if(typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        select: 1
      })
    }
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

  }
})