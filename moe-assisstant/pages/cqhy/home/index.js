const app = getApp()

Page({
  data: {
    polygons: []
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
  // onLoad() {
  //   const ctx = wx.createCanvasContext('cqhyHome')
  //   const systemInfo = wx.getSystemInfoSync()
  //   const availableWidth = (systemInfo.windowWidth - 20).floor()
  //   const availableHeight = (systemInfo.windowHeight - 20).floor()

  //   // 计算后两张图的斜线公式
  //   const a = (availableHeight.floor() - 0) / ((availableWidth * 0.4 + 2).floor() - (availableWidth * 0.6 + 2).floor())
  //   const b = 0 - a * (availableWidth * 0.6 + 2).floor()

  //   const firstCanvasPolygon = [
  //     [0, 0],
  //     [(availableWidth * 0.6 - 2).floor(), 0],
  //     [(availableWidth * 0.4 - 2).floor(), availableHeight.floor()],
  //     [0, availableHeight.floor()]
  //   ]
  //   const secondCanvasPolygon = [
  //     [(availableWidth * 0.6 + 2).floor(), 0],
  //     [availableWidth.floor(), 0],
  //     [availableWidth.floor(), (availableHeight * 0.4).floor()],
  //     [((availableHeight * 0.4 - b) / a).floor(), (availableHeight * 0.4).floor()]
  //   ]
  //   const thirdCanvasPolygon = [
  //     [((availableHeight * 0.4 + 4 - b) / a).floor(), (availableHeight * 0.4 + 4).floor()],
  //     [availableWidth.floor(), (availableHeight * 0.4 + 4).floor()],
  //     [availableWidth.floor(), availableHeight.floor()],
  //     [((availableHeight - b) / a).floor(), availableHeight.floor()]
  //   ]

  //   this.data.polygons = [
  //     this.convertCanvasPolygonToWindowPolygon(firstCanvasPolygon),
  //     this.convertCanvasPolygonToWindowPolygon(secondCanvasPolygon),
  //     this.convertCanvasPolygonToWindowPolygon(thirdCanvasPolygon)
  //   ]

  //   let polygonPromises = []
  //   polygonPromises.push(app.util.drawPolygon(ctx, firstCanvasPolygon, app.constants.CQHY_HOME_FIRST_PICTURE, availableHeight))
  //   polygonPromises.push(app.util.drawPolygon(ctx, secondCanvasPolygon, app.constants.CQHY_HOME_SECOND_PICTURE, (availableHeight * 0.4).floor()))
  //   polygonPromises.push(app.util.drawPolygon(ctx, thirdCanvasPolygon, app.constants.CQHY_HOME_THIRD_PICTURE, (availableHeight - (availableHeight * 0.4 + 4)).floor()))

  //   let finalPromise = Promise.all(polygonPromises)
  //   finalPromise.then(() => {
  //     app.util.drawTexts(ctx, {
  //       texts: [{
  //         content: '苍青幻影人物介绍及背景设定',
  //         direction: 'vertical',
  //         x: 20,
  //         y: 50
  //       }, {
  //         content: '',
  //         direction: 'vertical',
  //         x: availableWidth - 30 - 20,
  //         y: 100
  //       }, {
  //         content: '剧情更新',
  //         x: availableWidth - 120 - 20,
  //         y: availableHeight - 50
  //       }]
  //     })

  //     ctx.draw()
  //   })
  // },
  clickOnCanvas(event) {
    switch (app.util.checkPointInWhichPolygon([event.detail.x, event.detail.y], this.data.polygons)) {
      case 1:
        app.util.toast.info('当前功能未开放')
        break
      case 2:
        app.util.toast.info('当前功能未开放')
        break
      case 3:
        app.util.navigateTo('/pages/cqhy/drama/index')
        break
      default:
        return
    }
  },
  convertCanvasPolygonToWindowPolygon(polygon) {
    return polygon.map(point => {
      return [point[0] + 10, point[1] + 10]
    })
  }
})