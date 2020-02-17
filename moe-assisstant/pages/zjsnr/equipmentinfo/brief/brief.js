const app = getApp()

const NAVIGATOR_ITEMS = [{
    id: 0,
    name: '主炮',
    secondary: [{
        id: 0,
        name: '驱逐',
        key: '主炮'
      },
      {
        id: 1,
        name: '战列',
        key: '主炮-战列+'
      },
      {
        id: 2,
        name: '炮潜',
        key: '主炮-炮潜'
      },
      {
        id: 3,
        name: '轻巡',
        key: '主炮-轻巡+'
      },
      {
        id: 4,
        name: '重巡',
        key: '主炮-重巡+'
      }
    ]
  },
  {
    id: 1,
    name: '侦察机',
    key: '侦察机'
  },
  {
    id: 2,
    name: '修理员',
    key: '修理员'
  },
  {
    id: 3,
    name: '副炮',
    key: '副炮'
  },
  {
    id: 4,
    name: '反潜设备',
    key: '反潜设备'
  },
  {
    id: 5,
    name: '反舰导弹',
    key: '反舰导弹'
  },
  {
    id: 6,
    name: '反舰导弹发射器',
    key: '反舰导弹发射器'
  },
  {
    id: 7,
    name: '强化部件',
    secondary: [{
        id: 0,
        name: '特殊',
        key: '强化部件'
      },
      {
        id: 1,
        name: '大型',
        key: '强化部件-大'
      },
      {
        id: 2,
        name: '中型',
        key: '强化部件-中'
      },
      {
        id: 3,
        name: '小型',
        key: '强化部件-小'
      },
      {
        id: 4,
        name: '潜艇类',
        key: '强化部件-潜艇'
      },
      {
        id: 5,
        name: '航母类',
        key: '强化部件-航母类'
      },
      {
        id: 6,
        name: '航空类',
        key: '强化部件-航空类'
      }
    ]
  },
  {
    id: 8,
    name: '战斗机',
    secondary: [{
        id: 0,
        name: '舰载战斗机',
        key: '战斗机'
      },
      {
        id: 1,
        name: '水上战斗机',
        key: '战斗机-水上战斗机'
      }
    ]
  },
  {
    id: 9,
    name: '炮弹',
    secondary: [{
        id: 0,
        name: '防空',
        key: '炮弹'
      },
      {
        id: 1,
        name: '战列',
        key: '炮弹-战列类'
      },
      {
        id: 2,
        name: '重巡',
        key: '炮弹-重巡类+'
      },
    ]
  },
  {
    id: 10,
    name: '轰炸机',
    secondary: [{
        id: 0,
        name: '舰载轰炸机',
        key: '轰炸机'
      },
      {
        id: 1,
        name: '水上轰炸机',
        key: '轰炸机-水上轰炸机'
      }
    ]
  },
  {
    id: 11,
    name: '防空导弹',
    secondary: [{
        id: 0,
        name: '通用',
        key: '防空导弹'
      },
      {
        id: 1,
        name: '导战专用',
        key: '防空导弹-大型'
      }
    ]
  },
  {
    id: 12,
    name: '防空导弹发射器',
    secondary: [{
        id: 0,
        name: '通用',
        key: '防空导弹发射器'
      },
      {
        id: 1,
        name: '导战专用',
        key: '防空导弹发射器-大型'
      }
    ]
  },
  {
    id: 13,
    name: '防空炮',
    key: '防空炮'
  },
  {
    id: 14,
    name: '雷达',
    secondary: [{
        id: 0,
        name: '通用',
        key: '雷达'
      },
      {
        id: 1,
        name: '大型',
        key: '雷达-战列类'
      },
      {
        id: 2,
        name: '声呐',
        key: '雷达-声呐'
      },
    ]
  },
  {
    id: 15,
    name: '鱼雷',
    secondary: [{
        id: 0,
        name: '通用',
        key: '鱼雷'
      },
      {
        id: 1,
        name: '潜艇',
        key: '鱼雷-潜艇限定'
      }
    ]
  },
  {
    id: 16,
    name: '鱼雷机',
    secondary: [{
        id: 0,
        name: '通用',
        key: '鱼雷机'
      },
      {
        id: 1,
        name: '大型',
        key: '鱼雷机-航母类'
      }
    ]
  }
]

const CONTENT_MAPPING = [{
    type: '主炮',
    contentList: [{
        title: '名称',
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
      },
    ]
  },
  {
    type: '侦察机',
    contentList: ['name', 'dexIndex', 'power', 'fireRange']
  },
  {
    type: '修理员',
    contentList: ['name', 'dexIndex', 'power', 'fireRange']
  },
  {
    type: '副炮',
    contentList: ['name', 'dexIndex', 'power', 'fireRange']
  },
  {
    type: '反潜设备',
    contentList: ['name', 'dexIndex', 'power', 'fireRange']
  },
  {
    type: '反舰导弹',
    contentList: ['name', 'dexIndex', 'power', 'fireRange']
  },
  {
    type: '反舰导弹发射器',
    contentList: ['name', 'dexIndex', 'power', 'fireRange']
  },
  {
    type: '强化部件',
    contentList: ['name', 'dexIndex', 'power', 'fireRange']
  },
  {
    type: '战斗机',
    contentList: ['name', 'dexIndex', 'power', 'fireRange']
  },
  {
    type: '炮弹',
    contentList: ['name', 'dexIndex', 'power', 'fireRange']
  },
  {
    type: '轰炸机',
    contentList: ['name', 'dexIndex', 'power', 'fireRange']
  },
  {
    type: '防空导弹',
    contentList: ['name', 'dexIndex', 'power', 'fireRange']
  },
  {
    type: '防空导弹发射器',
    contentList: ['name', 'dexIndex', 'power', 'fireRange']
  },
  {
    type: '防空炮',
    contentList: ['name', 'dexIndex', 'power', 'fireRange']
  },
  {
    type: '雷达',
    contentList: ['name', 'dexIndex', 'power', 'fireRange']
  }
]

const mockEquipments = [{
    "id": 2221,
    "picId": 208,
    "cid": 10020821,
    "dexIndex": 208,
    "name": "S国单装305毫米无后座力炮",
    "rarity": 5,
    "type": "主炮",
    "power": 10,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": -3,
    "evadeRate": -3,
    "antiAircraftTime": null,
    "recyclingIncome": "0/8/12/0",
    "torpedo": null,
    "fireRange": "中",
    "antiAircraft": null,
    "antiAircraftSubsidy": null,
    "specialEffect": null,
    "luck": -3,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2099,
    "picId": 123,
    "cid": 10012321,
    "dexIndex": 123,
    "name": "F国M1934双联138毫米炮",
    "rarity": 4,
    "type": "主炮",
    "power": 5,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": null,
    "recyclingIncome": "0/2/2/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": null,
    "antiAircraftSubsidy": null,
    "specialEffect": null,
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2140,
    "picId": 299,
    "cid": 10029921,
    "dexIndex": 299,
    "name": "I国双联135毫米主炮",
    "rarity": 4,
    "type": "主炮",
    "power": 5,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "1.2",
    "recyclingIncome": "0/4/3/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 1,
    "antiAircraftSubsidy": null,
    "specialEffect": "对空倍率1.2",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2100,
    "picId": 287,
    "cid": 10028721,
    "dexIndex": 287,
    "name": "F国M1948双联127毫米炮",
    "rarity": 5,
    "type": "主炮",
    "power": 4,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "2.4",
    "recyclingIncome": "0/2/4/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 8,
    "antiAircraftSubsidy": "0.45",
    "specialEffect": "对空补正45%\n对空倍率2.4",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2210,
    "picId": 124,
    "cid": 10012421,
    "dexIndex": 124,
    "name": "S国СМ-2-1双联130毫米炮",
    "rarity": 5,
    "type": "主炮",
    "power": 4,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": 2,
    "evadeRate": null,
    "antiAircraftTime": "2",
    "recyclingIncome": "0/1/1/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 5,
    "antiAircraftSubsidy": "0.35",
    "specialEffect": "对空补正35%\n对空倍率2",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2222,
    "picId": 163,
    "cid": 10016321,
    "dexIndex": 163,
    "name": "S国双联130毫米炮",
    "rarity": 3,
    "type": "主炮",
    "power": 4,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "1.2",
    "recyclingIncome": "0/2/2/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 1,
    "antiAircraftSubsidy": "0.2",
    "specialEffect": "对空补正20%\n对空倍率1.2",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2255,
    "picId": 41,
    "cid": 10004121,
    "dexIndex": 41,
    "name": "U国双联5英寸炮",
    "rarity": 2,
    "type": "主炮",
    "power": 4,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": 1,
    "evadeRate": null,
    "antiAircraftTime": null,
    "recyclingIncome": "0/2/4/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": null,
    "antiAircraftSubsidy": null,
    "specialEffect": null,
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2013,
    "picId": 423,
    "cid": 10042321,
    "dexIndex": 423,
    "name": "5英寸高平两用炮（MK4）",
    "rarity": 5,
    "type": "主炮",
    "power": 4,
    "antiSubmarine": null,
    "tracking": 3,
    "hitRate": null,
    "evadeRate": 2,
    "antiAircraftTime": "3",
    "recyclingIncome": "7/6/8/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 10,
    "antiAircraftSubsidy": "0.55",
    "specialEffect": "对空补正55%\n对空倍率3",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2062,
    "picId": 205,
    "cid": 10020521,
    "dexIndex": 205,
    "name": "E国双联4.5英寸炮（MK.VI型）",
    "rarity": 5,
    "type": "主炮",
    "power": 3,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "2.3",
    "recyclingIncome": "0/4/5/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 6,
    "antiAircraftSubsidy": null,
    "specialEffect": "对空倍率2.3",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2318,
    "picId": 455,
    "cid": 10045521,
    "dexIndex": 455,
    "name": "博福斯双联120毫米炮",
    "rarity": 5,
    "type": "主炮",
    "power": 3,
    "antiSubmarine": null,
    "tracking": 3,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "2.5",
    "recyclingIncome": "5/10/5/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 8,
    "antiAircraftSubsidy": "0.5",
    "specialEffect": "对空补正50%\n对空倍率2.5",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2120,
    "picId": 263,
    "cid": 10026321,
    "dexIndex": 263,
    "name": "G国双联128毫米高平两用炮",
    "rarity": 4,
    "type": "主炮",
    "power": 3,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": 1,
    "evadeRate": null,
    "antiAircraftTime": "2",
    "recyclingIncome": "0/3/4/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 4,
    "antiAircraftSubsidy": null,
    "specialEffect": "对空倍率2",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2121,
    "picId": 7,
    "cid": 10000721,
    "dexIndex": 7,
    "name": "G国双联150毫米炮",
    "rarity": 3,
    "type": "主炮",
    "power": 3,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": 2,
    "evadeRate": null,
    "antiAircraftTime": null,
    "recyclingIncome": "0/1/3/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": null,
    "antiAircraftSubsidy": null,
    "specialEffect": null,
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2177,
    "picId": 278,
    "cid": 10027821,
    "dexIndex": 278,
    "name": "MK.N6双联4.5英寸炮",
    "rarity": 4,
    "type": "主炮",
    "power": 3,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "2.4",
    "recyclingIncome": "0/3/3/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 7,
    "antiAircraftSubsidy": null,
    "specialEffect": "对空倍率2.4",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2280,
    "picId": 234,
    "cid": 10023421,
    "dexIndex": 234,
    "name": "三年式E1高角炮",
    "rarity": 4,
    "type": "主炮",
    "power": 3,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "1.6",
    "recyclingIncome": "0/5/6/0",
    "torpedo": null,
    "fireRange": "中",
    "antiAircraft": 6,
    "antiAircraftSubsidy": "0.35",
    "specialEffect": "对空补正35%\n对空倍率1.6",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2037,
    "picId": 161,
    "cid": 10016121,
    "dexIndex": 161,
    "name": "C国单装150毫米炮",
    "rarity": 2,
    "type": "主炮",
    "power": 3,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "1.2",
    "recyclingIncome": "0/1/1/0",
    "torpedo": null,
    "fireRange": "中",
    "antiAircraft": 1,
    "antiAircraftSubsidy": null,
    "specialEffect": "对空倍率1.2",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2063,
    "picId": 9,
    "cid": 10000921,
    "dexIndex": 9,
    "name": "E国双联4.7英寸炮",
    "rarity": 2,
    "type": "主炮",
    "power": 2,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "1.5",
    "recyclingIncome": "0/1/3/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 3,
    "antiAircraftSubsidy": "0.2",
    "specialEffect": "对空补正20%\n对空倍率1.5",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2320,
    "picId": 374,
    "cid": 10037421,
    "dexIndex": 374,
    "name": "双联5英寸平高两用炮（RAT）",
    "rarity": 5,
    "type": "主炮",
    "power": 2,
    "antiSubmarine": 8,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "2.2",
    "recyclingIncome": "4/4/0/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 5,
    "antiAircraftSubsidy": "0.35",
    "specialEffect": "对空补正35%\n对空倍率2.2",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2346,
    "picId": 402,
    "cid": 10040221,
    "dexIndex": 402,
    "name": "奥托双联76毫米速射炮",
    "rarity": 5,
    "type": "主炮",
    "power": 2,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "3.2",
    "recyclingIncome": "2/3/3/2",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 14,
    "antiAircraftSubsidy": "0.4",
    "specialEffect": "对空补正40%\n对空倍率3.2",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2101,
    "picId": 12,
    "cid": 10001221,
    "dexIndex": 12,
    "name": "F国单装138毫米炮",
    "rarity": 2,
    "type": "主炮",
    "power": 2,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": 1,
    "evadeRate": null,
    "antiAircraftTime": null,
    "recyclingIncome": "0/1/2/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": null,
    "antiAircraftSubsidy": null,
    "specialEffect": null,
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2119,
    "picId": 6,
    "cid": 10000621,
    "dexIndex": 6,
    "name": "G国单装150毫米炮",
    "rarity": 2,
    "type": "主炮",
    "power": 2,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": 2,
    "evadeRate": null,
    "antiAircraftTime": null,
    "recyclingIncome": "0/1/2/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": null,
    "antiAircraftSubsidy": null,
    "specialEffect": null,
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2138,
    "picId": 284,
    "cid": 10028421,
    "dexIndex": 284,
    "name": "I国单装135炮",
    "rarity": 4,
    "type": "主炮",
    "power": 2,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": 1,
    "evadeRate": null,
    "antiAircraftTime": "1.9",
    "recyclingIncome": "0/4/3/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 4,
    "antiAircraftSubsidy": "0.2",
    "specialEffect": "对空补正20%\n对空倍率1.9",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2139,
    "picId": 168,
    "cid": 10016821,
    "dexIndex": 168,
    "name": "I国双联120毫米炮",
    "rarity": 2,
    "type": "主炮",
    "power": 2,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": 1,
    "evadeRate": null,
    "antiAircraftTime": null,
    "recyclingIncome": "0/4/5/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": null,
    "antiAircraftSubsidy": null,
    "specialEffect": null,
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2146,
    "picId": 156,
    "cid": 10015621,
    "dexIndex": 156,
    "name": "J国10厘米连装炮",
    "rarity": 4,
    "type": "主炮",
    "power": 2,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": 1,
    "evadeRate": null,
    "antiAircraftTime": "1.9",
    "recyclingIncome": "0/1/1/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 4,
    "antiAircraftSubsidy": null,
    "specialEffect": "对空倍率1.9",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2148,
    "picId": 4,
    "cid": 10000421,
    "dexIndex": 4,
    "name": "J国12.7厘米连装炮",
    "rarity": 2,
    "type": "主炮",
    "power": 2,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "1.2",
    "recyclingIncome": "0/1/3/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 2,
    "antiAircraftSubsidy": "0.2",
    "specialEffect": "对空补正20%\n对空倍率1.2",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2178,
    "picId": 437,
    "cid": 10043721,
    "dexIndex": 437,
    "name": "MK12型5英寸舰炮",
    "rarity": 4,
    "type": "主炮",
    "power": 2,
    "antiSubmarine": null,
    "tracking": 2,
    "hitRate": 4,
    "evadeRate": 1,
    "antiAircraftTime": "2.9",
    "recyclingIncome": "3/3/3/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 7,
    "antiAircraftSubsidy": "0.55",
    "specialEffect": "对空补正55%\n对空倍率2.9",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2212,
    "picId": 314,
    "cid": 10031421,
    "dexIndex": 314,
    "name": "S国СМ-5-1双联100毫米高炮",
    "rarity": 4,
    "type": "主炮",
    "power": 2,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": 2,
    "evadeRate": null,
    "antiAircraftTime": "2.1",
    "recyclingIncome": "0/4/4/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 7,
    "antiAircraftSubsidy": "0.35",
    "specialEffect": "对空补正35%\n对空倍率2.1",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2220,
    "picId": 13,
    "cid": 10001321,
    "dexIndex": 13,
    "name": "S国单装130毫米炮",
    "rarity": 1,
    "type": "主炮",
    "power": 2,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": null,
    "recyclingIncome": "0/1/1/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": null,
    "antiAircraftSubsidy": null,
    "specialEffect": null,
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2254,
    "picId": 10,
    "cid": 10001021,
    "dexIndex": 10,
    "name": "U国双联5英寸平高两用炮",
    "rarity": 4,
    "type": "主炮",
    "power": 2,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "2.2",
    "recyclingIncome": "0/1/3/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 5,
    "antiAircraftSubsidy": "0.2",
    "specialEffect": "对空补正20%\n对空倍率2.2",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2055,
    "picId": 40,
    "cid": 10004021,
    "dexIndex": 40,
    "name": "E国单装4英寸炮",
    "rarity": 1,
    "type": "主炮",
    "power": 1,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "1.7",
    "recyclingIncome": "0/2/2/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 2,
    "antiAircraftSubsidy": "0.2",
    "specialEffect": "对空补正20%\n对空倍率1.7",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2064,
    "picId": 8,
    "cid": 10000821,
    "dexIndex": 8,
    "name": "E国双联4英寸炮",
    "rarity": 2,
    "type": "主炮",
    "power": 1,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "1.6",
    "recyclingIncome": "0/1/2/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 3,
    "antiAircraftSubsidy": "0.2",
    "specialEffect": "对空补正20%\n对空倍率1.6",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2118,
    "picId": 5,
    "cid": 10000521,
    "dexIndex": 5,
    "name": "G国单装127毫米炮",
    "rarity": 1,
    "type": "主炮",
    "power": 1,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": 1,
    "evadeRate": null,
    "antiAircraftTime": null,
    "recyclingIncome": "0/1/1/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": null,
    "antiAircraftSubsidy": null,
    "specialEffect": null,
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2147,
    "picId": 3,
    "cid": 10000321,
    "dexIndex": 3,
    "name": "J国12.7厘米单装炮",
    "rarity": 1,
    "type": "主炮",
    "power": 1,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "1.1",
    "recyclingIncome": "0/1/2/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 1,
    "antiAircraftSubsidy": "0.2",
    "specialEffect": "对空补正20%\n对空倍率1.1",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2151,
    "picId": 2,
    "cid": 10000221,
    "dexIndex": 2,
    "name": "J国12厘米单装炮",
    "rarity": 1,
    "type": "主炮",
    "power": 1,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": null,
    "recyclingIncome": "0/1/1/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": null,
    "antiAircraftSubsidy": "0.2",
    "specialEffect": "对空补正20%",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2244,
    "picId": 11,
    "cid": 10001121,
    "dexIndex": 11,
    "name": "U国单装5英寸炮",
    "rarity": 2,
    "type": "主炮",
    "power": 1,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": null,
    "evadeRate": null,
    "antiAircraftTime": "1.8",
    "recyclingIncome": "0/1/2/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": 3,
    "antiAircraftSubsidy": "0.2",
    "specialEffect": "对空补正20%\n对空倍率1.8",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  },
  {
    "id": 2266,
    "picId": 421,
    "cid": 10042121,
    "dexIndex": 421,
    "name": "БР-482炮弹",
    "rarity": 4,
    "type": "主炮",
    "power": 1,
    "antiSubmarine": null,
    "tracking": null,
    "hitRate": 1,
    "evadeRate": null,
    "antiAircraftTime": null,
    "recyclingIncome": "5/5/5/0",
    "torpedo": null,
    "fireRange": "短",
    "antiAircraft": null,
    "antiAircraftSubsidy": null,
    "specialEffect": "战斗结束获得经验增加7%（装备之间不叠加）",
    "luck": null,
    "bomber": null,
    "aluminiumCost": null,
    "penetration": null,
    "armor": null,
    "life": null,
    "intercept": null
  }
]

Page({
  data: {
    navigatorItems: NAVIGATOR_ITEMS,
    currentItemKey: '主炮',
    currentId: 0,
    descRequired: false,
    contents: mockEquipments,
    parameterKeys: [],
    showEquipmentDetail: false,
    currentEquipment: {},
    currentEquipmentParameters: []
  },
  onLoad() {
    this.selectComponent(`#tab0`).initSelectionStatus()

    this.setData({
      contents: mockEquipments.map(equipment => {
        equipment.src = app.filters.getZJSNEquipmentPicture(equipment.dexIndex)
        equipment.backgroundSrc = app.filters.getZJSNShipBackground(equipment.rarity)
        return equipment
      }),
      parameterKeys: this.getParameterKeys(this.data.currentItemKey)
    })
  },
  getParameterKeys(type) {
    let temp = ['name', 'dexIndex', 'power', 'fireRange']
    CONTENT_MAPPING.map(mapping => {
      if (type.indexOf(mapping.type) >= 0) temp = mapping.contentList
    })
    return temp
  },
  selectKeyChanged(e) {
    this.setData({
      currentItemKey: e.detail.key,
      currentId: e.detail.firstClassId
    })

    this.data.navigatorItems.map(item => {
      if (item.id !== this.data.currentId) {
        const component = this.selectComponent(`#tab${item.id}`)
        component.foldContent()
        component.clearFirstClassSelection()
      }
    })
  },
  refreshList() {

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
      value: parseFloat(antiAircraft) * parseFloat(antiAircraftTime)
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
  }
})