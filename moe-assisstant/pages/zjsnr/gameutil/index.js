const app = getApp()

import icon from './utilIcons.js'

Page({
  data: {
    utilList: [
      [{
        title: '建造公式查询',
        path: '/pages/zjsnr/gameutil/buildingFormula/buildingformula',
        type: app.constants.ZJSNR_BUILDING_FORMULA_TYPES.SHIP,
        icon: icon.building
      }, {
        title: '开发公式查询',
        path: '/pages/zjsnr/gameutil/buildingFormula/buildingformula',
        type: app.constants.ZJSNR_BUILDING_FORMULA_TYPES.EQUIPMENT,
        icon: icon.developing
      }],
      [{
        title: '建造时间对照表',
        path: '/pages/zjsnr/gameutil/buildingTimeList/buildingTimeList',
        type: app.constants.ZJSNR_BUILDING_TIME_TYPES.SHIP,
        icon: icon.buildingTime
      }, {
        title: '开发时间对照表',
        path: '/pages/zjsnr/gameutil/buildingTimeList/buildingTimeList',
        type: app.constants.ZJSNR_BUILDING_TIME_TYPES.EQUIPMENT,
        icon: icon.developingTime
      }],
      [{
          title: '餐厅菜单查询',
          path: '/pages/zjsnr/gameutil/dish/dish',
          icon: icon.menu
        },
        {
          title: '学院技能查询',
          path: '/pages/zjsnr/gameutil/academy/academy',
          icon: icon.academy
        },
        {
          title: '远征详情',
          path: '/pages/zjsnr/gameutil/expedition/expedition',
          icon: icon.expedition
        }
      ],
      [{
          title: '伤害计算器',
          path: '/pages/zjsnr/gameutil/damageCaculator/damagecaculator',
          icon: icon.damageCaculator
        },
        {
          title: '制空计算器',
          path: '/pages/zjsnr/gameutil/aircraftCaculator/airpower',
          icon: icon.airpower
        },
        {
          title: '经验计算器',
          path: '/pages/zjsnr/gameutil/experienceCaculator/experiencecaculator',
          icon: icon.experience
        }
      ],
      [{
          title: '炮序模拟器',
          path: '/pages/zjsnr/gameutil/cannonry/cannonry',
          icon: icon.cannonry
        },
        {
          title: '航向计算器',
          path: '/pages/zjsnr/gameutil/directionTrack/direction',
          icon: icon.direction
        },
        // {
        //   title: '工程模拟器',
        //   path: '/pages/zjsnr/gameutil/gift/giftTree',
        //   icon: icon.gift
        // }
      ]
    ],
  },
  callUtil(e) {
    const {
      content
    } = e.currentTarget.dataset

    const {
      path,
      type
    } = content
    let data = {}
    if (typeof type === 'number') data = {
      type
    }

    app.util.navigateTo(path, data)
  },
  onLoad() {
    wx.showShareMenu({})
  }
})