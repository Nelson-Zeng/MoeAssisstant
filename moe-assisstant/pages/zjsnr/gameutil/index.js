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
      title: '炮序模拟器',
      path: '/pages/zjsnr/gameutil/cannonry/cannonry',
      icon: icon.cannonry
    }, {
      id: 5,
      title: '伤害计算器',
      path: '/pages/zjsnr/gameutil/damageCaculator/damagecaculator',
      icon: icon.damageCaculator
    }, {
      id: 6,
      title: '建造时间对照表',
      path: '/pages/zjsnr/gameutil/buildingTimeList/buildingTimeList',
      type: app.constants.ZJSNR_BUILDING_TIME_TYPES.SHIP,
      icon: icon.buildingTime
    }, {
      id: 7,
      title: '开发时间对照表',
      path: '/pages/zjsnr/gameutil/buildingTimeList/buildingTimeList',
      type: app.constants.ZJSNR_BUILDING_TIME_TYPES.EQUIPMENT,
      icon: icon.developingTime
    }]
  },
  callUtil(e) {
    const item = this.data.utilList.find(item => {
      return item.id === Number(e.currentTarget.id)
    })

    let path = item.path
    let data = {}
    if (typeof item.type === 'number') data = {
      type: item.type
    }
    
    app.util.navigateTo(path, data)
  }
})