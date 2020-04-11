Component({
  properties: {
    content: {
      type: String,
      value: ''
    },
    duration: {
      type: Number,
      value: 5000
    }
  },
  data: {
    showToast: false,
    toastTimeout: 0
  },
  observers: {
    'content' (content) {
      if (!content) {
        this.setData({
          showToast: false
        })
        return
      }

      if (!this.data.showToast) {
        this.setData({
          showToast: true
        })

        this.data.toastTimeout = setTimeout(() => {
          this.setData({
            showToast: false
          })
        }, this.data.duration)
      } else {
        this.setData({
          content: this.content
        })

        clearTimeout(this.data.toastTimeout)

        this.data.toastTimeout = setTimeout(() => {
          this.setData({
            showToast: false
          })
        }, this.data.duration)
      }
    }
  }
})