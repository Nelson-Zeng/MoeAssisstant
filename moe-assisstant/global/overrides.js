let overrides = {}

// 通过闭包实现重载同名方法
const override = (obj, name, fnc) => {
  // indicator为指针，用来保存上一次初始化的to方法。每个指向不同的indicator里保存了不同数量参数的to方法
  let indicator = obj[name]
  // 通过返回函数的形式形成闭包。因为函数只有在调用完才会从内存中释放。因为需要保留调用时的作用域及参数，所以必须用function的形式进行声明以隔离作用域
  obj[name] = function() {
    // 判断调用时传入参数的个数与当前指针保管的方法形参是否相同。相同时调用该指针保管的方法
    // 最终调用某个确定方法时就可以不用注入作用域了
    if (arguments.length === fnc.length) return fnc(...arguments)
    // 回调的时候需要通过apply/call函数注入作用域和参数
    else if (typeof indicator === 'function') return indicator.apply(this, arguments)
  }
}

// 闭包实现路径跳转工具方法的重载
override(overrides, 'navigateTo', url => {
  wx.navigateTo({
    url: url
  })
})
override(overrides, 'navigateTo', (url, item) => {
  if (typeof item === 'object') {
    let urlWithParameter = url + '?'
    let params = []
    if (item)
      for (let key in item) {
        params.push(`${key}=${item[key]}`)
      }
    urlWithParameter += params.join('&')
    wx.navigateTo({
      url: urlWithParameter
    })
  } else if (typeof item === 'function')
    wx.navigateTo({
      url: url,
      success: res => {
        typeof onSuccess === 'function' && onSuccess(res)
      },
    })
})
override(overrides, 'navigateTo', (url, data, onSuccess) => {
  let urlWithParameter = url + '?'
  let params = []
  if (data)
    for (let key in data) {
      params.push(`${key}=${data[key]}`)
    }
  urlWithParameter += params.join('&')
  wx.navigateTo({
    url: urlWithParameter,
    success: res => {
      typeof onSuccess === 'function' && onSuccess(res)
    },
  })
})

// 闭包实现显示提示方法的重载
let toast = {}
override(toast, 'info', title => {
  wx.showToast({
    title: title,
    icon: 'none'
  })
})
override(toast, 'info', (title, duration) => {
  wx.showToast({
    title: title,
    icon: 'none',
    duration: duration
  })
})
override(toast, 'success', title => {
  wx.showToast({
    title: title,
  })
})
override(toast, 'success', (title, duration) => {
  wx.showToast({
    title: title,
    duration: duration
  })
})

overrides.toast = toast

export default overrides