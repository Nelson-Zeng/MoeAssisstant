import constants from './constants.js'

const GAME_TYPE = {
  ZJSN: 'zjsnr',
  CQHY: 'cqhy',
  SYCJC: 'sycjc'
}

const RESOURCE_TYPE = {
  SHIP: 'ships',
  EQUIPMENT: 'equipments'
}

const ITEM_STATUS = {
  BROKEN: 'BROKEN',
  NORMAL: 'NORMAL'
}

const IMAGE_SIZE = {
  S: 'S',
  M: 'M',
  L: 'L',
  XM: 'XM'
}

const ZJSNR_EQUIPMENT_PARAMETER_MAPPING = [{
    key: 0,
    column: "rarity",
    value: "稀有度"
  },
  {
    key: 1,
    column: "type",
    value: "类型"
  },
  {
    key: 2,
    column: "power",
    value: "火力"
  },
  {
    key: 3,
    column: "antiSubmarine",
    value: "对潜"
  },
  {
    key: 4,
    column: "tracking",
    value: "索敌"
  },
  {
    key: 5,
    column: "hitRate",
    value: "命中"
  },
  {
    key: 6,
    column: "evadeRate",
    value: "闪避"
  },
  {
    key: 7,
    column: "antiAircraftTime",
    value: "防空倍率"
  },
  {
    key: 8,
    column: "recyclingIncome",
    value: "拆解资源"
  },
  {
    key: 9,
    column: "torpedo",
    value: "鱼雷"
  },
  {
    key: 10,
    column: "fireRange",
    value: "射程"
  },
  {
    key: 11,
    column: "antiAircraft",
    value: "对空"
  },
  {
    key: 12,
    column: "antiAircraftSubsidy",
    value: "对空补正"
  },
  {
    key: 13,
    column: "specialEffect",
    value: "特殊效果"
  },
  {
    key: 14,
    column: "luck",
    value: "幸运"
  },
  {
    key: 15,
    column: "bomber",
    value: "轰炸"
  },
  {
    key: 16,
    column: "aluminiumCost",
    value: "铝耗"
  },
  {
    key: 17,
    column: "armor",
    value: "装甲"
  },
  {
    key: 18,
    column: "life",
    value: "耐久"
  },
  {
    key: 19,
    column: "penetration",
    value: "突防"
  },
  {
    key: 20,
    column: "intercept",
    value: "拦截"
  },
  {
    key: 21,
    column: "dexIndex",
    value: "图鉴编号"
  },
  {
    key: 22,
    column: "name",
    value: "名称"
  },
  {
    key: 23,
    column: "shipType",
    value: "可装备舰种"
  }
]

const renderImageSrc = (game, type, status, size, id) => {
  return `${constants.STATIC_RESOURCE_DOMAIN}/jianr/moeassisstant/${game}/illustration/${type}/${size}/${status}/${size}_${status}_${id}.png`
}

const getZJSNShipSmallPicture = id => {
  return renderImageSrc(GAME_TYPE.ZJSN, RESOURCE_TYPE.SHIP, ITEM_STATUS.NORMAL, IMAGE_SIZE.S, id)
}

const getZJSNShipLargePicture = id => {
  return renderImageSrc(GAME_TYPE.ZJSN, RESOURCE_TYPE.SHIP, ITEM_STATUS.NORMAL, IMAGE_SIZE.L, id)
}

const getZJSNShipXMediumPicture = id => {
  return renderImageSrc(GAME_TYPE.ZJSN, RESOURCE_TYPE.SHIP, ITEM_STATUS.NORMAL, IMAGE_SIZE.XM, id)
}

const getZJSNShipMediumPicture = id => {
  return renderImageSrc(GAME_TYPE.ZJSN, RESOURCE_TYPE.SHIP, ITEM_STATUS.NORMAL, IMAGE_SIZE.M, id)
}

const getZJSNEquipmentPicture = id => {
  return `${constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/illustration/equipments/equip_L_${id}.png`
}

const getZJSNClearShipBackground = rarity => {
  return `${constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/backgrounds/clear/ship_star_bg${rarity}.png`
}

const getZJSNSimpleShipBackground = rarity => {
  return `${constants.ZJSNR_IMAGE_RESOURCES_PREFIX}/backgrounds/simple/ship_star_bg${rarity}_simple.png`
}

const getShipUpdateInfo = id => {
  return id > 999 && id < 2000
}

const getEquipmentDisplayingItem = (key, value) => {
  return {
    title: ZJSNR_EQUIPMENT_PARAMETER_MAPPING.find(item => {
      return item.column === key
    }).value,
    value: value
  }
}

const getMISTMiddlePicture = id => {
  return `${constants.STATIC_RESOURCE_DOMAIN}/cqhy/illustration/${id}/icon_l.png`
}

const getMISTThumbnail = id => {
  return `${constants.STATIC_RESOURCE_DOMAIN}/cqhy/illustration/${id}/face00.png`
}

const getMISTFullHDPictures = id => {
  return [`${constants.STATIC_RESOURCE_DOMAIN}/cqhy/illustration/${id}/chara00.png`, `${constants.STATIC_RESOURCE_DOMAIN}/cqhy/illustration/${id}/chara01.png`]
}

export default {
  getZJSNShipSmallPicture,
  getZJSNShipLargePicture,
  getZJSNShipXMediumPicture,
  getZJSNShipMediumPicture,
  getZJSNSimpleShipBackground,
  getZJSNClearShipBackground,
  getShipUpdateInfo,
  getZJSNEquipmentPicture,
  getEquipmentDisplayingItem,
  getMISTMiddlePicture,
  getMISTThumbnail,
  getMISTFullHDPictures
}