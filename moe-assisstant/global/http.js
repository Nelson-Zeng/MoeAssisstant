const http = {
  GET_EQUIPMENT_LIST: 'https://www.moeassisstant.com/zjsnr/equipments/info',
  GET_SHIP_LIST: 'https://www.moeassisstant.com/zjsnr/ships/info',
  GET_RELATED_SHIP_INFO: 'https://www.moeassisstant.com/zjsnr/ships/:id/related',
  GET_SHIP_ILLUSTRATIONS: 'https://www.moeassisstant.com/zjsnr/ships/illustrations/:id',
  GET_SHIP_ACQUIRE_ROUTES: 'https://www.moeassisstant.com/zjsnr/ships/acquireRoute/:cid',
  GET_FORMULA: 'https://www.moeassisstant.com/zjsnr/gameutil/formula/:type',

  get: (baseUrl, params, queries, onSuccess) => {
    return new Promise((resolve, reject) => {
      let url = ''

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