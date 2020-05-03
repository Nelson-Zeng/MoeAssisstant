const app = getApp()

Page({
  data: {
    fontLoaded: false,
    topBannerHeight: '112px',
    topSection: {
      id: 'formula',
      src: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/home/title-bar.jpg`
    },
    bottomSectionArr: [{
      id: 'enemy',
      title: '深海图鉴',
      src: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/home/enemy.png`,
      bg: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/home/sunrise1.jpg`
    }, {
      id: 'equipment',
      title: '装备图鉴',
      src: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/home/robot.png`,
      bg: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/home/sunrise2.jpg`
    }, {
      id: 'shipgirl',
      title: '舰船图鉴',
      src: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/home/ship.png`,
      bg: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/home/sunrise3.jpg`
    }],
    seaChartSection: {
      id: 'seachart',
      title: '海图详情',
      src: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/home/BattleSeaBg.png`
    },
    utilSection: {
      id: 'util',
      title: '游戏工具集',
      src: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/home/util.png`
    }
  },
  onLoad() {
    wx.showShareMenu({})
  },
  onShareAppMessage() {
    return {
      title: '幼胡资料库',
      imageUrl: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/home/left.png`
    }
  },
  startService(event) {
    switch (event.currentTarget.id) {
      case 'formula':
        break
      case 'enemy':
        app.util.toast.info('深海图鉴暂未开放')
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
  },
  onSeaChartClick() {
    app.util.navigateTo('/pages/zjsnr/seaChart/seachart')
  },
  onUtilClick() {
    app.util.navigateTo('/pages/zjsnr/gameutil/index')
  },
  adLoad() {
    wx.createSelectorQuery().select('#ad-banner').fields({
      size: true
    }, res => {
      this.setData({
        topBannerHeight: `${res.height}px`
      })
    }).exec()
  }
})