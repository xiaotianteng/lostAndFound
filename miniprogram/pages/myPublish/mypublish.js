// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: ["失物","拾物"],
    list: [
      {
       image: "../../images/banner1.png",
       name: "身份证",
       region: "来宾校区",
       date: "5月20日",
       desc: "今天捡到你的身份证今天捡到你的身份证今天捡到你的身份证今天捡到你的身份证",
       publish_time: "2022年9月9日"
      },

      {
        image: "../../images/banner1.png",
        name: "身份证",
        region: "来宾校区",
        date: "5月20日",
        desc: "今天捡到你的身份证今天捡到你的身份证今天捡到你的身份证今天捡到你的身份证",
        publish_time: "2022年9月9日"
       },

       {
        image: "../../images/banner1.png",
        name: "身份证",
        region: "来宾校区",
        date: "5月20日",
        desc: "今天捡到你的身份证今天捡到你的身份证今天捡到你的身份证今天捡到你的身份证",
        publish_time: "2022年9月9日"
       }
    ],
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
        select: 3
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