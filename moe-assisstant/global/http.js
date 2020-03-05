import constants from './constants.js'

const http = {
  GET_EQUIPMENT_LIST: `${constants.DOMAIN}/zjsnr/equipments/info`,
  GET_SHIP_LIST: `${constants.DOMAIN}/zjsnr/ships/info`,
  GET_RELATED_SHIP_INFO: `${constants.DOMAIN}/zjsnr/ships/:id/related`,
  GET_SHIP_ILLUSTRATIONS: `${constants.DOMAIN}/zjsnr/ships/illustrations/:id`,
  GET_SHIP_ACQUIRE_ROUTES: `${constants.DOMAIN}/zjsnr/ships/acquireRoute/:cid`,
  GET_FORMULA: `${constants.DOMAIN}/zjsnr/gameutil/formula/:type`,
  GET_EXPEDITIONS: `${constants.DOMAIN}/zjsnr/gameutil/expeditions`,

  get: (baseUrl, params, queries, onSuccess) => {
    return new Promise((resolve, reject) => {
      let url = baseUrl

      if (Object.keys(params).length > 0)
        for (let key in params) {
          url = baseUrl.replace(`:${key}`, params[key])
        }

      if (Object.keys(queries).length > 0) {
        let temp = []
        for (let key in queries) {
          temp.push(`${key}=${queries[key]}`)
        }
        url = `${baseUrl}?${temp.join('&')}`
      }

      wx.request({
        url: url,
        success: res => {
          resolve(res)
          if (typeof onSuccess === 'function') onSuccess(res)
        }
      })
    })
  }
}

export default http