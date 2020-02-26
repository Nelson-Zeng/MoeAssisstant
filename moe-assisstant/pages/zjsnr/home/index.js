const app = getApp()

Page({
  data: {
    fontLoaded: false,
    topSection: {
      id: 'formula',
      title: '通用公式查询',
      src: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/home/title-bar.jpg`
    },
    bottomSectionArr: [{
      id: 'util',
      title: '游戏工具集',
      src: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/home/left.png`,
      bgColor: '#ead0d1'
    }, {
      id: 'equipment',
      title: '装备查询',
      src: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/home/middle.png`,
      bgColor: '#e0e5df'
    }, {
      id: 'shipgirl',
      title: '舰船查询',
      src: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/home/right.png`,
      bgColor: '#c1cbd7'
    }]
  },
  onLoad() {
    // wx.loadFontFace({
    //   family: 'Qing Ning You Yuan',
    //   source: 'url("https://www.moeassisstant.com/font/qlyy.ttf")',
    //   complete: () => {}
    // })
  },
  startService(event) {
    switch (event.currentTarget.id) {
      case 'formula':
        break
      case 'util':
        app.util.navigateTo('/pages/zjsnr/gameutil/index')
        break
      case 'equipment':
        app.util.navigateTo('/pages/zjsnr/equipmentinfo/brief/brief')
        break
      case 'shipgirl':
        app.util.navigateTo('/pages/zjsnr/shipinfo/brief/brief')
        break
      default:
        return
    }
  }
})