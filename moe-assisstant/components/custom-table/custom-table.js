Component({
  properties: {
    tableContent: {
      type: Object,
      value: {}
    },
    widthDistribution: {
      type: Object,
      value: []
    }
  },
  observers: {
    'tableContent.contentList'(newVal) {
      if (!newVal) {}
      else {
        this.data.tableContent.contentList = this.data.tableContent.contentList.map(content => {
          if (Array.isArray(content))
            return {
              content: content,
              color: 'black'
            }
          else return content
        })

        this.setData({
          displayedTableContent: this.data.tableContent
        })
      }
    },
    'tableContent.htmlContentList'(newVal) {
      this.setData({
        displayedTableContent: this.data.tableContent
      })
    }
  },
  methods: {
    onRowClick(e) {
      const id = e.currentTarget.dataset.dexIndex
      if (id)
        this.data.displayedTableContent.onRowClick(id)
    }
  }
})