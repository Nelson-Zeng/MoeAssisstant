const app = getApp()

const NAVIGATOR_ITEMS = [{
    id: 0,
    name: '主炮',
    secondary: [{
        id: 1,
        name: '大型',
        key: 1,
        orderType: '火力',
        orderTypeKey: 'power',
        parameterType: 0
      }, {
        id: 4,
        name: '中型-重巡+',
        key: 4,
        orderType: '火力',
        orderTypeKey: 'power',
        parameterType: 0
      }, {
        id: 3,
        name: '中型',
        key: 3,
        orderType: '火力',
        orderTypeKey: 'power',
        parameterType: 0
      }, {
        id: 0,
        name: '小型',
        key: 0,
        orderType: '火力',
        orderTypeKey: 'power',
        parameterType: 0
      },
      {
        id: 2,
        name: '炮潜限定',
        key: 2,
        orderType: '火力',
        orderTypeKey: 'power',
        parameterType: 0
      },
      {
        id: 5,
        name: '日本重巡限定',
        key: 5,
        orderType: '火力',
        orderTypeKey: 'power',
        parameterType: 0
      }
    ]
  },
  {
    id: 1,
    name: '侦察机',
    key: 6,
    orderType: '索敌',
    orderTypeKey: 'tracking',
    parameterType: 1
  },
  {
    id: 2,
    name: '修理员',
    key: 7,
    orderType: '图鉴编号',
    orderTypeKey: 'dexIndex',
    parameterType: 2
  },
  {
    id: 3,
    name: '副炮',
    key: 8,
    orderType: '火力',
    orderTypeKey: 'power',
    parameterType: 0
  },
  {
    id: 4,
    name: '反潜设备',
    key: 9,
    orderType: '对潜',
    orderTypeKey: 'antiSubmarine',
    parameterType: 5
  },
  {
    id: 5,
    name: '反舰导弹',
    key: 10,
    orderType: '火力',
    orderTypeKey: 'power',
    parameterType: 0
  },
  {
    id: 6,
    name: '反舰导弹发射器',
    key: 11,
    orderType: '图鉴编号',
    orderTypeKey: 'dexIndex',
    parameterType: 2
  },
  {
    id: 7,
    name: '强化部件',
    secondary: [{
        id: 0,
        name: '特殊',
        key: 12,
        orderType: '图鉴编号',
        orderTypeKey: 'dexIndex',
        parameterType: 2
      },
      {
        id: 1,
        name: '大型',
        key: 13,
        orderType: '图鉴编号',
        orderTypeKey: 'dexIndex',
        parameterType: 2
      },
      {
        id: 2,
        name: '中型',
        key: 14,
        orderType: '图鉴编号',
        orderTypeKey: 'dexIndex',
        parameterType: 2
      },
      {
        id: 3,
        name: '小型',
        key: 15,
        orderType: '图鉴编号',
        orderTypeKey: 'dexIndex',
        parameterType: 2
      },
      {
        id: 4,
        name: '潜艇类',
        key: 16,
        orderType: '图鉴编号',
        orderTypeKey: 'dexIndex',
        parameterType: 2
      },
      {
        id: 5,
        name: '航母类',
        key: 17,
        orderType: '图鉴编号',
        orderTypeKey: 'dexIndex',
        parameterType: 2
      },
      {
        id: 6,
        name: '航空类',
        key: 18,
        orderType: '图鉴编号',
        orderTypeKey: 'dexIndex',
        parameterType: 2
      }
    ]
  },
  {
    id: 8,
    name: '战斗机',
    secondary: [{
        id: 0,
        name: '舰载战斗机',
        key: 19,
        orderType: '对空',
        orderTypeKey: 'antiAircraft',
        parameterType: 4
      },
      {
        id: 1,
        name: '水上战斗机',
        key: 20,
        orderType: '对空',
        orderTypeKey: 'antiAircraft',
        parameterType: 4
      }
    ]
  },
  {
    id: 9,
    name: '炮弹',
    secondary: [{
        id: 0,
        name: '防空',
        key: 21,
        orderType: '图鉴编号',
        orderTypeKey: 'dexIndex',
        parameterType: 2
      },
      {
        id: 1,
        name: '战列',
        key: 22,
        orderType: '图鉴编号',
        orderTypeKey: 'dexIndex',
        parameterType: 2
      },
      {
        id: 2,
        name: '重巡',
        key: 23,
        orderType: '图鉴编号',
        orderTypeKey: 'dexIndex',
        parameterType: 2
      },
    ]
  },
  {
    id: 10,
    name: '轰炸机',
    secondary: [{
        id: 0,
        name: '舰载轰炸机',
        key: 24,
        orderType: '轰炸',
        orderTypeKey: 'bomber',
        parameterType: 6
      },
      {
        id: 1,
        name: '水上轰炸机',
        key: 25,
        orderType: '轰炸',
        orderTypeKey: 'bomber',
        parameterType: 6
      }
    ]
  },
  {
    id: 11,
    name: '防空导弹',
    secondary: [{
        id: 0,
        name: '通用',
        key: 26,
        orderType: '对空',
        orderTypeKey: 'antiAircraft',
        parameterType: 4
      },
      {
        id: 1,
        name: '导战专用',
        key: 27,
        orderType: '对空',
        orderTypeKey: 'antiAircraft',
        parameterType: 4
      }
    ]
  },
  {
    id: 12,
    name: '防空导弹发射器',
    secondary: [{
        id: 0,
        name: '通用',
        key: 28,
        orderType: '图鉴编号',
        orderTypeKey: 'dexIndex',
        parameterType: 2
      },
      {
        id: 1,
        name: '导战专用',
        key: 29,
        orderType: '图鉴编号',
        orderTypeKey: 'dexIndex',
        parameterType: 2
      }
    ]
  },
  {
    id: 13,
    name: '防空炮',
    key: 30,
    orderType: '对空',
    orderTypeKey: 'antiAircraft',
    parameterType: 4
  },
  {
    id: 14,
    name: '雷达',
    secondary: [{
        id: 0,
        name: '通用',
        key: 31,
        orderType: '索敌',
        orderTypeKey: 'tracking',
        parameterType: 1
      },
      {
        id: 1,
        name: '大型',
        key: 32,
        orderType: '索敌',
        orderTypeKey: 'tracking',
        parameterType: 1
      },
      {
        id: 2,
        name: '声呐',
        key: 33,
        orderType: '对潜',
        orderTypeKey: 'antiSubmarine',
        parameterType: 5
      },
    ]
  },
  {
    id: 15,
    name: '鱼雷',
    secondary: [{
        id: 0,
        name: '通用',
        key: 34,
        orderType: '鱼雷',
        orderTypeKey: 'torpedo',
        parameterType: 3
      },
      {
        id: 1,
        name: '潜艇',
        key: 35,
        orderType: '鱼雷',
        orderTypeKey: 'torpedo',
        parameterType: 3
      }
    ]
  },
  {
    id: 16,
    name: '鱼雷机',
    secondary: [{
        id: 0,
        name: '通用',
        key: 36,
        orderType: '鱼雷',
        orderTypeKey: 'torpedo',
        parameterType: 7
      },
      {
        id: 1,
        name: '大型',
        key: 37,
        orderType: '鱼雷',
        orderTypeKey: 'torpedo',
        parameterType: 7
      }
    ]
  },
  {
    id: 17,
    name: '特殊分类',
    secondary: [{
        id: 0,
        name: '等效声呐装备',
        key: 38,
        orderType: '图鉴ID',
        orderTypeKey: 'dexIndex',
        parameterType: [{
          id: 'name'
        }, {
          title: '编号',
          id: 'dexIndex'
        }, {
          title: '反潜',
          id: 'antiSubmarine'
        }]
      },
      {
        id: 1,
        name: '经验强化',
        key: 39,
        orderType: '图鉴ID',
        orderTypeKey: 'dexIndex',
        parameterType: [{
          id: 'name'
        }, {
          title: '编号',
          id: 'dexIndex'
        }, {
          title: '特殊效果',
          id: 'specialEffect'
        }]
      },
      {
        id: 2,
        name: '装备者限定',
        key: 40,
        orderType: '图鉴ID',
        orderTypeKey: 'dexIndex',
        parameterType: [{
          id: 'name'
        }, {
          title: '编号',
          id: 'dexIndex'
        }, {
          title: '特殊效果',
          id: 'specialEffect'
        }]
      },
      {
        id: 3,
        name: '血量调整',
        key: 41,
        orderType: '图鉴ID',
        orderTypeKey: 'dexIndex',
        parameterType: [{
          id: 'name'
        }, {
          title: '编号',
          id: 'dexIndex'
        }, {
          title: '耐久',
          id: 'life'
        }]
      },
      {
        id: 4,
        name: '特殊效果',
        key: 42,
        orderType: '编号',
        orderTypeKey: 'dexIndex',
        parameterType: [{
          id: 'name'
        }, {
          title: '编号',
          id: 'dexIndex'
        }, {
          title: '特殊效果',
          id: 'specialEffect'
        }]
      }
    ]
  }
]

const CONTENT_MAPPING = [
  [{
      // title: '名称',
      id: 'name'
    },
    {
      title: '编号',
      id: 'dexIndex'
    },
    {
      title: '火力',
      id: 'power'
    },
    {
      title: '射程',
      id: 'fireRange'
    }
  ],
  [{
      // title: '名称',
      id: 'name'
    },
    {
      title: '编号',
      id: 'dexIndex'
    },
    {
      title: '索敌',
      id: 'tracking'
    },
    {
      title: '命中',
      id: 'hitRate'
    }
  ],
  [{
      // title: '名称',
      id: 'name'
    },
    {
      title: '编号',
      id: 'dexIndex'
    }
  ],
  [{
      // title: '名称',
      id: 'name'
    },
    {
      title: '编号',
      id: 'dexIndex'
    },
    {
      title: '鱼雷',
      id: 'torpedo'
    }
  ],
  [{
      // title: '名称',
      id: 'name'
    },
    {
      title: '编号',
      id: 'dexIndex'
    },
    {
      title: '对空',
      id: 'antiAircraft'
    }
  ],
  [{
      // title: '名称',
      id: 'name'
    },
    {
      title: '编号',
      id: 'dexIndex'
    },
    {
      title: '对潜',
      id: 'antiSubmarine'
    }
  ],
  [{
      // title: '名称',
      id: 'name'
    },
    {
      title: '编号',
      id: 'dexIndex'
    },
    {
      title: '轰炸',
      id: 'bomber'
    },
    {
      title: '对空',
      id: 'antiAircraft'
    }
  ],
  [{
      // title: '名称',
      id: 'name'
    },
    {
      title: '编号',
      id: 'dexIndex'
    },
    {
      title: '鱼雷',
      id: 'torpedo'
    },
    {
      title: '对空',
      id: 'antiAircraft'
    }
  ]
]

Page({
  data: {
    navigatorItems: NAVIGATOR_ITEMS,
    currentItem: NAVIGATOR_ITEMS[0].secondary[0],
    currentId: NAVIGATOR_ITEMS[0].secondary[0].id,
    descRequired: true,
    contents: [],
    parameterKeys: [],
    showEquipmentDetail: false,
    currentEquipment: {},
    currentEquipmentParameters: [],

    dataContainer: {
      type: 1,
      sequence: 'desc'
    }
  },
  onLoad() {
    wx.showShareMenu({})

    this.updateList()
  },
  selectKeyChanged(e) {
    this.setData({
      currentItem: e.detail.currentItem,
      currentId: e.detail.firstClassId
    })

    this.data.dataContainer.type = e.detail.currentItem.key

    this.updateList()
  },
  async updateList() {
    wx.showLoading({
      title: '数据载入中',
    })

    const response = await app.http.get(app.http.GET_EQUIPMENT_LIST, {}, this.data.dataContainer)

    const equipmentData = response.data
    this.setData({
      contents: equipmentData.map(equipment => {
        equipment.src = app.filters.getZJSNEquipmentPicture(equipment.dexIndex)
        equipment.backgroundSrc = app.filters.getZJSNSimpleShipBackground(equipment.rarity)
        return equipment
      }),
      parameterKeys: typeof this.data.currentItem.parameterType === 'number' ? CONTENT_MAPPING[this.data.currentItem.parameterType] : this.data.currentItem.parameterType
    })

    wx.hideLoading()
  },
  callEquipmentDetail(e) {
    const equipmentId = parseInt(e.currentTarget.id.split('content')[1])
    const currentEquipment = {}
    const params = []
    let antiAircraft = 0
    let antiAircraftTime = 1
    this.data.contents.map(content => {
      if (content.id === equipmentId)
        for (let key in content) {
          if (content[key] != null) {
            if (key === 'backgroundSrc') {
              currentEquipment[key] = `url(${content[key]})`
            } else if (key != 'id' && key != 'picId' && key != 'cid' && key != 'src' && key != 'backgroundSrc' && key != 'type') {
              if (key === 'antiAircraftTime') antiAircraftTime = content[key]
              if (key === 'antiAircraft') antiAircraft = content[key]
              currentEquipment[key] = content[key]
              params.push(app.filters.getEquipmentDisplayingItem(key, content[key]))
            } else {
              currentEquipment[key] = content[key]
            }
          }
        }
    })

    if (antiAircraft) params.push({
      title: '对空 * 倍率',
      value: (parseFloat(antiAircraft) * parseFloat(antiAircraftTime)).getFixed()
    })

    this.setData({
      currentEquipment: currentEquipment,
      showEquipmentDetail: true,
      currentEquipmentParameters: params
    })
  },
  clickMask() {
    this.setData({
      showEquipmentDetail: false
    })
  },
  // 该方法仅用来屏蔽点击内容的冒泡，实现clickOutSide
  clickDialog() {
    return
  },
  refreshList() {
    this.setData({
      descRequired: !this.data.descRequired
    })

    this.data.dataContainer.sequence = this.data.descRequired ? 'desc' : 'asc'

    this.setData({
      contents: this.data.contents.sort((a, b) => {
        const sortKey = this.data.currentItem.orderTypeKey
        return this.data.descRequired ? Number(b[sortKey]) - Number(a[sortKey]) : Number(a[sortKey]) - Number(b[sortKey])
      })
    })
  }
})