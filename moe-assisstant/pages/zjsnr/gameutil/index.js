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
      title: '远征详情',
      path: '/pages/zjsnr/gameutil/expedition/expedition',
      icon: icon.expedition
    }, {
      id: 3,
      title: '炮序模拟器',
      path: '/pages/zjsnr/gameutil/cannonry/cannonry',
      icon: icon.cannonry
    }, {
      id: 4,
      title: '伤害计算器',
      path: '/pages/zjsnr/gameutil/damageCaculator/damagecaculator',
      icon: icon.damageCaculator
    }, {
      id: 5,
      title: '建造时间对照表',
      path: '/pages/zjsnr/gameutil/buildingTimeList/buildingTimeList',
      type: app.constants.ZJSNR_BUILDING_TIME_TYPES.SHIP,
      icon: icon.buildingTime
    }, {
      id: 6,
      title: '开发时间对照表',
      path: '/pages/zjsnr/gameutil/buildingTimeList/buildingTimeList',
      type: app.constants.ZJSNR_BUILDING_TIME_TYPES.EQUIPMENT,
      icon: icon.developingTime
    }, {
      id: 7,
      title: '学院技能查询',
      path: '/pages/zjsnr/gameutil/academy/academy',
      icon: icon.academy
    }, {
      id: 8,
      title: '餐厅菜单查询',
      path: '/pages/zjsnr/gameutil/dish/dish',
      icon: icon.menu
    }, {
      id: 9,
      title: '航向计算器',
      path: '/pages/zjsnr/gameutil/directionTrack/direction',
      icon: icon.direction
    }, {
      id: 10,
      title: '经验计算器',
      path: '/pages/zjsnr/gameutil/experienceCaculator/experiencecaculator',
      icon: icon.experience
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
  },
  onLoad() {
    wx.showShareMenu({})
  }
})