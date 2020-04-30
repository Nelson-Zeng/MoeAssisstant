const app = getApp()

Page({
  data: {
    teachers: [],
    currentLessons: [],

    dataContainer: []
  },
  async onLoad(options) {
    wx.showShareMenu({})

    const response = await app.http.get(app.http.GET_ACADEMY_INFO)

    this.data.dataContainer = response.data

    this.setData({
      teachers: response.data.map((item, index) => {
        return {
          id: index,
          name: item.teacher
        }
      }),
      currentLessons: this.generateTableContent(response.data[0].lessons)
    })
  },
  selectAcademyTeacher(e) {
    const id = e.detail.itemId

    this.setData({
      currentLessons: this.generateTableContent(this.data.dataContainer.find((item, index) => {
        return index === id
      }).lessons)
    })
  },
  generateTableContent(lessons) {
    let lessonList = []
    for (let key in lessons) {
      lessonList.push(this.generateLessonTables(key, lessons[key]))
    }
    return lessonList
  },
  generateLessonTables(key, value) {
    let title = ''
    switch (key) {
      case 'attack':
        title = '进攻战术'
        break
      case 'defence':
        title = '防御战术'
        break
      case 'special':
        title = '特殊战术'
        break
    }
    return {
      title: title,
      headerItemList: ['战术名称', '战术效果', '经验获取方式', '学习消耗', '舰种限制'],
      columnWidth: ['20%', '20%', '20%', '20%', '20%'],
      htmlContentList: value.map(item => {
        return [item.name, item.effect, item.access, item.cost, item.limitation]
      })
    }
  }
})