// components/parameter-pair/parameter-pair.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: '无数据'
    },
    height: {
      type: String,
      value: ''
    },
    hideBottomLine: {
      type: Boolean,
      value: false
    },
    fontSize: {
      type: String,
      value: ''
    }
  },

  observers: {
    title(newVal) {
      if (!newVal) this.setData({
        title: '无数据'
      })
    },
    value(newVal) {
      if (!newVal) this.setData({
        value: '无数据'
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
