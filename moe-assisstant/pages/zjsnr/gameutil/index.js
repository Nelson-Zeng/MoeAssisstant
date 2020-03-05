const app = getApp()

import icon from './utilIcons.js'

Page({
  data: {
    utilList: [{
      id: 0,
      title: '建造公式查询',
      path: '/pages/zjsnr/gameutil/buildingFormula/buildingformula',
      type: app.constants.ZJSNR_BUILDING_FORMULA_TYPES.SHIP,
      icon: icon.building
    }, {
      id: 1,
      title: '开发公式查询',
      path: '/pages/zjsnr/gameutil/buildingFormula/buildingformula',
      type: app.constants.ZJSNR_BUILDING_FORMULA_TYPES.EQUIPMENT,
      icon: icon.developing
    }, {
      id: 2,
      title: '海图详情',
      path: '/pages/zjsnr/gameutil/seaChart/seachart',
      icon: icon.seacharts
    }, {
      id: 3,
      title: '远征详情',
      path: '/pages/zjsnr/gameutil/expedition/expedition',
      icon: icon.expedition
    }, {
      id: 4,
      title: '伤害计算器',
      path: '/pages/zjsnr/gameutil/damageCaculator/damagecaculator',
      icon: icon.damageCaculator
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