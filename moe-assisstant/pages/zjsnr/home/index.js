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
      src: 'cloud://moe-assisstant-hviue.6d6f-moe-assisstant-hviue-1301021771/zjsn/M_NORMAL_1060.png',
      bgColor: '#ead0d1'
    }, {
      id: 'equipment',
      title: '装备查询',
      src: 'cloud://moe-assisstant-hviue.6d6f-moe-assisstant-hviue-1301021771/zjsn/M_NORMAL_60_2.png',
      bgColor: '#e0e5df'
    }, {
      id: 'shipgirl',
      title: '舰船查询',
      src: 'cloud://moe-assisstant-hviue.6d6f-moe-assisstant-hviue-1301021771/zjsn/M_NORMAL_60_1.png',
      bgColor: '#c1cbd7'
    }]
  },
  onLoad() {
    wx.loadFontFace({
      family: 'Qing Ning You Yuan',
      source: 'url("https://6d6f-moe-assisstant-hviue-1301021771.tcb.qcloud.la/font-family/qlyy.ttf")',
      complete: () => {
        this.setData({
          fontLoaded: true
        })
      }
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
        wx.showToast({
          title: '当前模块将会在域名报备成功后开放',
          icon: 'none',
          duration: 500
        })
        // app.util.navigateTo('/pages/zjsnr/equipmentinfo/brief/brief')
        break
      case 'shipgirl':
        app.util.navigateTo('/pages/zjsnr/shipinfo/brief/brief')
        break
      default:
        return
    }
  }
})