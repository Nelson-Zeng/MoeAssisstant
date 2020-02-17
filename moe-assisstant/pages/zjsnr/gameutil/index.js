const app = getApp()

Page({
  data: {
    utilList: [{
      id: 0,
      title: '建造公式查询',
      path: '/pages/zjsnr/gameutil/buildingFormula/buildingformula',
      type: app.constants.ZJSNR_BUILDING_FORMULA_TYPES.SHIP,
      src: 'cloud://moe-assisstant-hviue.6d6f-moe-assisstant-hviue-1301021771/zjsn/developmenting.png'
    }, {
      id: 1,
      title: '开发公式查询',
      path: '/pages/zjsnr/gameutil/buildingFormula/buildingformula',
      type: app.constants.ZJSNR_BUILDING_FORMULA_TYPES.EQUIPMENT,
      src: 'cloud://moe-assisstant-hviue.6d6f-moe-assisstant-hviue-1301021771/zjsn/buiding.png'
    }, {
      id: 2,
      title: '伤害计算器',
      path: '/pages/zjsnr/gameutil/damageCaculator/damagecaculator',
      src: 'cloud://moe-assisstant-hviue.6d6f-moe-assisstant-hviue-1301021771/zjsn/caculating.jpg'
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