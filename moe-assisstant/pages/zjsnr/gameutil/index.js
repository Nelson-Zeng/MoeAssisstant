const app = getApp()

Page({
  data: {
    utilList: [{
      id: 0,
      title: '建造公式查询',
      path: '/pages/zjsnr/gameutil/buildingFormula/buildingformula',
      type: app.constants.ZJSNR_BUILDING_FORMULA_TYPES.SHIP,
      src: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/gameutil/building.png`
    }, {
      id: 1,
      title: '开发公式查询',
      path: '/pages/zjsnr/gameutil/buildingFormula/buildingformula',
      type: app.constants.ZJSNR_BUILDING_FORMULA_TYPES.EQUIPMENT,
      src: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/gameutil/developmenting.png`
    }, {
      id: 2,
      title: '海图详情',
      path: '/pages/zjsnr/gameutil/seaChart/seachart',
      src: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/gameutil/seachart.png`
    }, {
      id: 3,
      title: '伤害计算器',
      path: '/pages/zjsnr/gameutil/damageCaculator/damagecaculator',
      src: `${app.constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/index/gameutil/caculating.jpg`
    }]
  },
  callUtil(e) {
    const item = this.data.utilList.find(item => {
      return item.id === Number(e.currentTarget.id)
    })

    let path = item.path
    let data = {}
    if (item.type) data = {
      type: item.type
    }

    app.util.navigateTo(path, data)
  }
})