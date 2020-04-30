const app = getApp()

Page({
  data: {
    backgroundSrc: `${app.constants.STATIC_RESOURCE_DOMAIN}/cqhy/home/home.jpg`,
    topBannerHeight: '112px',
    leftImageLoaded: false,
    rightImageLoaded: false
  },
  adLoad() {
    wx.showShareMenu({})

    wx.createSelectorQuery().select('#ad-banner').fields({
      size: true
    }, res => {
      this.setData({
        topBannerHeight: `${res.height + 20}px`
      })
    }).exec()
  },
  adClosed() {
    wx.createSelectorQuery().select('#ad-banner').fields({
      size: true
    }, res => {
      this.setData({
        topBannerHeight: `20rpx`
      })
    }).exec()
  },
  clickLeft() {
    app.util.toast.info('剧情模块尚未开放')
  },
  clickRight() {
    app.util.navigateTo('/pages/cqhy/dialogue/brief/brief')
  },
  onLeftImageLoaded() {
    this.setData({
      leftImageLoaded: true
    })
  },
  onRightImageLoaded() {
    this.setData({
      rightImageLoaded: true
    })
  }
})