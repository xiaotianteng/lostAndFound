// pages/infoDetail/infoDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background:['../../images/banner1.png','../../images/banner2.png'],
    collectionIcon: ['../../images/collection.png','../../images/collection_fill.png']
  },


  toCollection(){
    let collectionIcon = this.data.collectionIcon; //先取值
    let last = collectionIcon.pop(); // 将末尾元素保存在last,并删除
    collectionIcon.unshift(last);   // 将last放入collectionIcon的顶部
    this.setData({
      collectionIcon,
    })
  },

  getPhone(){
    wx.showModal({
      title: '联系方式',
      content: '185xxxx6666',
      confirmText: '复制',
      success: (res) => {
        if(res.confirm){
          wx.setClipboardData({
            data: '18566666666',
            success: (res) =>{
              wx.showToast({
                icon: 'none',
                title: '内容已复制！',
              })
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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