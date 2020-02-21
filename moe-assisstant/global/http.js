const http = {
  GET_EQUIPMENT_LIST: 'https://www.moeassisstant.com/zjsnr/equipments/info',

  get: (baseUrl, params, queries, onSuccess) => {
    return new Promise((resolve, reject) => {
      let url = ''

      if (params)
        for (let key in params) {
          url = baseUrl.replace(`:${key}`, params[key])
        }

      if (queries) {
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