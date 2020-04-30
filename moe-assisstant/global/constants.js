// const DOMAIN = 'https://dev.moeassisstant.com'
const DOMAIN = 'https://www.moeassisstant.com'
const STATIC_RESOURCE_DOMAIN = 'https://jianr.jianrmod.cn'

const ZJSNR_IMAGE_RESOURCES_PREFIX = `${STATIC_RESOURCE_DOMAIN}/jianr/moeassisstant/zjsnr`

const ZJSNR_BUILDING_FORMULA_TYPES = {
  SHIP: 1,
  EQUIPMENT: 2
}

const ZJSNR_BUILDING_TIME_TYPES = {
  SHIP: 0,
  EQUIPMENT: 1
}

const MIST_SCRIPT_TABLE_SETTING = {
  jp: {
    title: '個人セリフ',
    headerItemList: ['種類', '条件', '台詞'],
    columnWidth: ['20%', '20%', '60%'],
  },
  cn: {
    title: '个人台词',
    headerItemList: ['类型', '条件', '台词'],
    columnWidth: ['20%', '20%', '60%'],
  }
}

export default {
  ZJSNR_BUILDING_FORMULA_TYPES,
  ZJSNR_IMAGE_RESOURCES_PREFIX,
  DOMAIN,
  STATIC_RESOURCE_DOMAIN,
  ZJSNR_BUILDING_TIME_TYPES,
  MIST_SCRIPT_TABLE_SETTING
}