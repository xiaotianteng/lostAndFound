// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [
      ['卡片、证件类','生活用品','数码产品','美妆护肤类','衣服物品类','饰品','文娱','其他'],
      ['身份证', '校园卡', '学生证', '水卡', '银行卡','其他'], 
    ],
    pickerList:[
      ['身份证','校园卡','学生证','水卡','公交卡','银行卡','其它'],['水杯','雨伞','小风扇','钥匙/钥匙扣','其它'],
      ['手机','相机','U盘/硬盘','充电宝','平板电脑','鼠标','充电线','耳机','手写笔','支架','音箱','MP3','其它'],
      ['口红','粉底','眉笔','腮红','眼影','防晒','喷雾','香水','其它'],
      ['男装','女装','男鞋','女鞋','包包','其它'],
      [ '手表','项链','手链','戒指','耳饰','眼镜','帽子','发饰','其它'],
      [ '教材','笔记','文具','球/球拍','护具','跳绳','自行车','棋牌','其它'],
      ['药品','零食','周边','其它']

    ],
    multiIndex: [0, 0],
    select: false,
    name: '',
    date: '',
    region: '',
    phone: '',
    desc: '',
    imgList: [],
    type: ''
  },

  selectType(e){
    const {id} = e.currentTarget.dataset;
    this.setData({
      type: id
    })
  },

  deleteImg(e){
    let {index} = e.currentTarget.dataset;
    let {imgList} = this.data;
    imgList.splice(index,1);
    this.setData({
      imgList
    })
  },



  uploadImg(){
    let {imgList} = this.data;
    wx.chooseMedia({
      count: 6 - imgList.length,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const {tempFiles} = res;
        tempFiles.forEach(item => {
          imgList.unshift(item.tempFilePath)
        })
        this.setData({
          imgList
        })
      }
    })
  },


  deleteDesc(){
    this.setData({
      desc: ''
    })
  },

  getName(e){
    this,this.setData({
      name: e.detail.value
    })
  },

  getDate(e){
    this,this.setData({
      date: e.detail.value
    })
  },

  getRegion(e){
    this,this.setData({
      region: e.detail.value
    })
  },

  getPhone(e){
    this,this.setData({
      phone: e.detail.value
    })
  },

  getDesc(e){
    this,this.setData({
      desc: e.detail.value.trim()
    })
  },





  closeSelect(){
    this.setData({
      select: false,
      multiIndex: [0, 0],
    })
  },

  bindMultiPickerChange(e){
    this.setData({
      select: true
    })
  },

  bindMultiPickerColumnChange(e){
    let {column,value} = e.detail;
    let data = this.data;
    let {multiArray,pickerList} = this.data;
    if(column===0){
      multiArray[1] = pickerList[value];
    }
    data.multiArray = multiArray;
    data.multiArray[column] = value;
    this.setData(data);
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