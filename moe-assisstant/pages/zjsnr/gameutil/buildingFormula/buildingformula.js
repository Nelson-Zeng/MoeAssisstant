const app = getApp()

Page({
  data: {
    listContent: {},

    loaded: false,
    showDetail: false,
    detailSrc: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/gamestrategy/detail_build.png`,

    type: 0
  },
  async onLoad(options) {
    wx.showShareMenu({})

    const _this = this
    wx.showLoading({
      title: '正在加载数据',
    })
    const type = Number(options.type)
    this.setData({
      type
    })
    let response

    function* init() {
      yield
      wx.hideLoading()
      _this.setData({
        loaded: true
      })
      if (response.data)
        _this.setData({
          listContent: response.data
        })
    }

    const it = init()
    it.next()

    switch (type) {
      case app.constants.ZJSNR_BUILDING_FORMULA_TYPES.SHIP:
        response = await app.http.get(app.http.GET_FORMULA, {
          type: 'building'
        })
        it.next()
        break
      case app.constants.ZJSNR_BUILDING_FORMULA_TYPES.EQUIPMENT:
        response = await app.http.get(app.http.GET_FORMULA, {
          type: 'development'
        })
        it.next()
        break
    }
  },
  onDetailClick() {
    this.setData({
      showDetail: true
    })
  },
  onImageClick() {

  },
  onHideClick() {
    this.setData({
      showDetail: false
    })
  }
})