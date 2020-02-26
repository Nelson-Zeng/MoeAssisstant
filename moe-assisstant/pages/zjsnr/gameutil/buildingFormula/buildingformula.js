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
        app.http.get(app.http.GET_FORMULA, {type: 'building'}, {}, response => {
          wx.hideLoading()
          this.setData({
            loaded: true
          })

          if (response.data)
            this.setData({
              listContent: response.data
            })
        })
        break
      case app.constants.ZJSNR_BUILDING_FORMULA_TYPES.EQUIPMENT:
        app.http.get(app.http.GET_FORMULA, { type: 'development' }, {}, response => {
          wx.hideLoading()
          this.setData({
            loaded: true
          })

          if (response.data)
            this.setData({
              listContent: response.data
            })
        })
        break
    }
  }
})