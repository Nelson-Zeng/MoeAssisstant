import constants from './constants.js'

const http = {
  GET_EQUIPMENT_LIST: `${constants.DOMAIN}/zjsnr/equipments/info`,
  GET_SHIP_LIST: `${constants.DOMAIN}/zjsnr/ships/info`,
  GET_RELATED_SHIP_INFO: `${constants.DOMAIN}/zjsnr/ships/:id/related`,
  GET_SHIP_ILLUSTRATIONS: `${constants.DOMAIN}/zjsnr/ships/illustrations/:id`,
  GET_SHIP_ACQUIRE_ROUTES: `${constants.DOMAIN}/zjsnr/ships/acquireRoute/:cid`,
  GET_FORMULA: `${constants.DOMAIN}/zjsnr/gameutil/formula/:type`,
  GET_EXPEDITIONS: `${constants.DOMAIN}/zjsnr/gameutil/expeditions`,
  GET_CANNONRY_ORDER: `${constants.DOMAIN}/zjsnr/gameutil/cannonryorder`,
  GET_BUILDING_TIME: `${constants.DOMAIN}/zjsnr/gameutil/buildtime/:id`,
  GET_SEA_CHART_INFO: `${constants.DOMAIN}/zjsnr/gameutil/seachart/info`,
  GET_NODE_DROP_INFO: `${constants.DOMAIN}/zjsnr/gameutil/seachart/drop`,
  GET_SHIP_INFO: `${constants.DOMAIN}/zjsnr/ships/:dexIndex/info`,
  GET_ACADEMY_INFO: `${constants.DOMAIN}/zjsnr/academy`,
  GET_MENU_INFO: `${constants.DOMAIN}/zjsnr/menu`,
  GET_CQHY_SHIP_SCRIPT: `${constants.DOMAIN}/cqhy/script/:id`,
  GET_APPLICATION_VERSION: `${constants.DOMAIN}/application/version`,

  get: function() {
    return new Promise((resolve, reject) => {
      const args = Array.prototype.slice.call(arguments)
      // 第一个参数为基础url
      let url = args[0]

      // 第二个参数为url parameter。
      if (args[1] && Object.keys(args[1]).length > 0) 
        for (let key in args[1]) {
            url = url.replace(`:${key}`, args[1][key])
          }
      
      // 第三个参数为query string
      if (args[2] && Object.keys(args[2]).length > 0)
        if (Object.keys(args[2]).length > 0) {
          let temp = []
          for (let key in args[2]) {
            temp.push(`${key}=${args[2][key]}`)
          }
          url = `${url}?${temp.join('&')}`
        }
      
      wx.request({
        url: url,
        success: res => {
          resolve(res)
          // 第四个参数为回调函数（尽量不要使用）
          typeof args[3] === 'function' && args[3](res)
        }
      })
    })
  }
}

export default http