//index.js
const app = getApp()

Page({
  data: {
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    placeHolder: '内容暂未开放'
  },
  onShow() {
    wx.showToast({
      title: '该模块相关内容暂未开放',
      icon: 'none',
      duration: 1000
    })
    setTimeout(() => {
      wx.switchTab({
        url: '/pages/zjsnr/home/index',
        success: response => {

        }
      })
    }, 1000)
  },
  onLoad() {}
})