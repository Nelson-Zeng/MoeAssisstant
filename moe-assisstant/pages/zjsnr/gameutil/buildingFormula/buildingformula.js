const app = getApp()

Page({
  data: {
    listContent: {},

    loaded: false
  },
  onLoad(options) {
    wx.showLoading({
      title: '正在加载数据',
    })

    const type = Number(options.type)

    switch (type) {
      case app.constants.ZJSNR_BUILDING_FORMULA_TYPES.SHIP:
        wx.cloud.callFunction({
          name: 'fetchBuildingFormulas',
          // 成功回调
          complete: res => {
            wx.hideLoading()
            this.setData({
              loaded: true
            })

            if (res.result)
              this.setData({
                listContent: res.result
              })
          }
        })
        break
      case app.constants.ZJSNR_BUILDING_FORMULA_TYPES.EQUIPMENT:
        wx.cloud.callFunction({
          name: 'fetchDevelopmentFormulas',
          // 成功回调
          complete: res => {
            wx.hideLoading()
            this.setData({
              loaded: true
            })

            if (res.result)
              this.setData({
                listContent: res.result
              })
          }
        })
        break
    }
  }
})