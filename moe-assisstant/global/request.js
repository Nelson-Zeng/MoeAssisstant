const get = (url, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: 'GET',
      data: data,
      success: response => {
        resolve(response)
      },
      fail: error => {
        reject(error)
      }
    })
  })
}

export default {
  get
}