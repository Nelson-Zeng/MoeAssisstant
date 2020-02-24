const app = getApp()

Page({
  data: {
    fontLoaded: false,
    topSection: {
      id: 'formula',
      title: '通用公式查询',
      src: 'cloud://moe-assisstant-hviue.6d6f-moe-assisstant-hviue-1301021771/zjsn/zjsn0.jpg'
    },
    bottomSectionArr: [{
      id: 'util',
      title: '游戏工具集',
      src: 'cloud://moe-assisstant-hviue.6d6f-moe-assisstant-hviue-1301021771/zjsn/left.png',
      bgColor: '#ead0d1'
    }, {
      id: 'equipment',
      title: '装备查询',
      src: 'cloud://moe-assisstant-hviue.6d6f-moe-assisstant-hviue-1301021771/zjsn/middle.png',
      bgColor: '#e0e5df'
    }, {
      id: 'shipgirl',
      title: '舰船查询',
      src: 'cloud://moe-assisstant-hviue.6d6f-moe-assisstant-hviue-1301021771/zjsn/right.png',
      bgColor: '#c1cbd7'
    }]
  },
  onLoad() {
    wx.loadFontFace({
      family: 'Qing Ning You Yuan',
      source: 'url("https://www.moeassisstant.com/font/qlyy.ttf")',
      complete: () => {}
    })
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