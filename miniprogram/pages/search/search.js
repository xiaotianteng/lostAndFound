// pages/search/search.js
let t = null;

// 1.进入页面获取noLoad里的缓存进行展示
// 2.页面渲染searchLog
// 3.当页面延时响应时，将本次搜索内容添加到头部，并对页面进行赋值
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: '',
    _search: '',
    searchLog: []
  },

  deleteLog(){
    this.setData({
      searchLog: []
    });
    wx.removeStorageSync('searchLog');
  },

  deleteSearch(){
    this.setData({
      search: '',
      _search: ''
    })
  },

  getSearch(e){
    // 前端简单防抖
    this.setData({
      _search: e.detail.value
    })
    if(t)clearTimeout(t);
    t = setTimeout(()=>{
      this.setData({
        search: e.detail.value
      });
      let searchLog = wx.getStorageSync('searchLog');
      if(searchLog){
        searchLog.unshift(e.detail.value);
      }else {
        searchLog = [e.detail.value];
      }
      wx.setStorageSync('searchLog', searchLog)
      this.setData({
        searchLog
      })
    },1000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const searchLog = wx.getStorageSync('searchLog');
    this.setData({
      searchLog
    })
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