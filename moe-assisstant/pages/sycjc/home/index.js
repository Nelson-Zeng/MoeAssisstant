const app = getApp()

Page({
  data: {
    src1: 'cloud://moe-assisstant-hviue.6d6f-moe-assisstant-hviue-1301021771/cqhy/cqhy1.jpg',
    src2: 'cloud://moe-assisstant-hviue.6d6f-moe-assisstant-hviue-1301021771/cqhy/cqhy2.jpg',
    src3: 'cloud://moe-assisstant-hviue.6d6f-moe-assisstant-hviue-1301021771/cqhy/cqhy3.jpg'
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
  }
})