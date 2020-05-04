const app = getApp()

import EXPERIENCE_LEVEL from '../../../../global/experienceLevel'

Page({
  data: {
    startLevel: '1',
    endLevel: '110',

    levelingPoints: [{
      id: 0,
      name: '1-4A/B',
      baseExperience: 120,
      description: '萌新用',
      selected: false
    }, {
      id: 1,
      name: '2-4A/B',
      baseExperience: 200,
      description: '萌新用',
      selected: false
    }, {
      id: 2,
      name: '3-4A',
      baseExperience: 300,
      description: '萌新用',
      selected: false
    }, {
      id: 3,
      name: '5-2C',
      baseExperience: 370,
      description: '炸鱼用',
      selected: false
    }, {
      id: 4,
      name: '5-5B',
      baseExperience: 450,
      description: '萌新用',
      selected: false
    }, {
      id: 5,
      name: '6-1A',
      baseExperience: 400,
      description: '炸鱼用',
      selected: false
    }, {
      id: 6,
      name: '7-1A',
      baseExperience: 450,
      description: '炸鱼用',
      selected: false
    }, {
      id: 7,
      name: '7-4B',
      baseExperience: 560,
      description: '战列战巡重巡用',
      selected: false
    }, {
      id: 8,
      name: '7-5A',
      baseExperience: 600,
      description: '航母重巡用',
      selected: false
    }, {
      id: 9,
      name: '8-1A',
      baseExperience: 600,
      description: '炸鱼用',
      selected: false
    }, {
      id: 10,
      name: '8-2A/B/C',
      baseExperience: 600,
      description: '炸鱼/重巡/通用及战术用',
      selected: false
    }, {
      id: 11,
      name: '8-3C/E',
      baseExperience: 600,
      description: '小鱼大冒险',
      selected: false
    }],
    currentPoint: '',
    currentBaseExperience: 0,

    isFlagShip: true,
    isMVP: true,
    isEvent: false,
    isKejin: false,
    // type: 0为加法系数，1为乘法系数
    skills: [{
      id: 0,
      name: '宁海',
      description: '无限制加成7%',
      type: 0,
      effect: 7,
      selected: false
    },
    {
      id: 1,
      name: '莱比锡',
      description: 'G国加成10%',
      type: 1,
      effect: 10,
      selected: false
    },
    {
      id: 2,
      name: '香取',
      description: '驱逐加成7%',
      type: 0,
      effect: 7,
      selected: false
    },
    {
      id: 3,
      name: '百眼巨人（非E国）',
      description: '航母加成6%',
      type: 0,
      effect: 6,
      opposite: 4,
      selected: false
    },
    {
      id: 4,
      name: '百眼巨人（E国）',
      description: '航母加成12%',
      type: 0,
      effect: 12,
      opposite: 3,
      selected: false
    },
    {
      id: 5,
      name: '阿金库尔',
      description: '战列/战巡加成10%',
      type: 1,
      effect: 10,
      selected: false
    }],
    recipes: [{
      id: 0,
      name: '吐司面包',
      description: '小型船加成10%',
      effect: 10,
      selected: false
    }, {
      id: 1,
      name: '格瓦斯',
      description: '苏联船加成10%',
      effect: 10,
      selected: false
    }],
    equipments: [{
      id: 0,
      name: '蜘蛛手套',
      description: '无限制加成1%',
      effect: 1,
      selected: false
    }, {
      id: 1,
      name: '奇迹球鞋',
      description: '无限制加成1%',
      effect: 1,
      selected: false
    }, {
      id: 2,
      name: '蓝色战袍',
      description: '无限制加成1%',
      effect: 1,
      selected: false
    }, {
      id: 3,
      name: '红黑球袜',
      description: '无限制加成1%',
      effect: 1,
      selected: false
    }, {
      id: 4,
      name: '特制穿甲弹',
      description: '无限制加成7%',
      effect: 7,
      selected: false
    }, {
      id: 5,
      name: '通气管（潜艇）',
      description: '无限制加成5%',
      effect: 5,
      selected: false
    }, {
      id: 6,
      name: 'F4U（冰淇淋）',
      description: '无限制加成5%',
      effect: 5,
      selected: false
    }, {
      id: 7,
      name: 'БР-482炮弹',
      description: '无限制加成7%',
      effect: 7,
      selected: false
    }, {
      id: 8,
      name: 'T-2V海星',
      description: '无限制加成5%',
      effect: 5,
      selected: false
    }, {
      id: 9,
      name: 'F6F（102）',
      description: '无限制加成5%',
      effect: 5,
      selected: false
    }],

    result: '',
    showResult: false
  },
  onLoad(options) {
    wx.showShareMenu({})
  },
  selectPoint(e) {
    const id = parseInt(e.currentTarget.id.split('levelingPoint')[1])

    this.data.levelingPoints = this.data.levelingPoints.map(point => {
      point.selected = false
      if (point.id === id) {
        point.selected = true
        this.data.currentBaseExperience = point.baseExperience
        this.data.currentPoint = point.name
      }
      return point
    })

    this.setData({
      levelingPoints: this.data.levelingPoints,
      currentBaseExperience: this.data.currentBaseExperience
    })
  },
  selectSkill(e) {
    const id = Number(e.currentTarget.id.split('skill')[1])

    this.data.skills.map(skill => {
      if (skill.id === id) {
        skill.selected = !skill.selected

        if (skill.selected && skill.opposite && this.data.skills[skill.opposite].selected) this.data.skills[skill.opposite].selected = false
      }

      return skill
    })

    this.setData({
      skills: this.data.skills
    })
  },
  selectRecipe(e) {
    const id = Number(e.currentTarget.id.split('recipe')[1])

    this.data.recipes = this.data.recipes.map(recipe => {
      recipe.selected = recipe.id === id

      return recipe
    })

    this.setData({
      recipes: this.data.recipes
    })
  },
  selectEquipment(e) {
    const id = Number(e.currentTarget.id.split('equipment')[1])

    this.data.equipments = this.data.equipments.map(equipment => {
      equipment.selected = equipment.id === id

      return equipment
    })

    this.setData({
      equipments: this.data.equipments
    })
  },
  startLevelInput(e) {
    this.data.startLevel = Number(e.detail.value)
  },
  endLevelInput(e) {
    this.data.endLevel = Number(e.detail.value)
  },
  changeFlagShipStatus(e) {
    this.data.isFlagShip = e.detail.value
  },
  changeMVPStatus(e) {
    this.data.isMVP = e.detail.value
  },
  changeEventStatus(e) {
    this.data.isEvent = e.detail.value
  },
  changeKejinStatus(e) {
    this.data.isKejin = e.detail.value
  },
  doCaculation() {
    if (!this.data.currentBaseExperience) {
      app.util.toast.info('请选择练级地点')
      return
    }

    let levelList = []

    EXPERIENCE_LEVEL.map(level => {
      if (level.level >= this.data.startLevel && level.level <= this.data.endLevel) levelList.push(level.experience)
    })

    const expNeeded = levelList.reduce((total, item) => {
      return total + item
    })

    const baseEXPGained = Number(this.data.currentBaseExperience) * 1.2

    let skilladditionCoefficient = 1
    let skillMulCoefficient = 1
    this.data.skills.map(skill => {
      if (skill.selected) switch (skill.type) {
        case 0:
          skilladditionCoefficient = (skilladditionCoefficient + (skill.effect / 100)).getFixed(10)
          break
        case 1:
          skillMulCoefficient = (skillMulCoefficient * (1 + skill.effect / 100)).getFixed(10)
          break
      }
    })

    let expGained = baseEXPGained
    this.data.isFlagShip && (expGained = expGained * 1.5)
    this.data.isMVP && (expGained = expGained * 2)
    this.data.isEvent && (expGained = expGained * 1.5)

    expGained = Math.floor(expGained * skilladditionCoefficient) * skillMulCoefficient

    let recipeCoefficient = 1
    const selectedRecipe = this.data.recipes.find(item => {
      return item.selected
    })
    selectedRecipe && (recipeCoefficient = (recipeCoefficient * (1 + selectedRecipe.effect / 100)))

    expGained = (expGained * recipeCoefficient).getFixed(10)

    let equipmentCoefficient = 1
    const selectEquipment = this.data.equipments.find(item => {
      return item.selected
    })
    selectEquipment && (equipmentCoefficient = (equipmentCoefficient * (1 + selectEquipment.effect / 100)))

    expGained = (expGained * equipmentCoefficient).getFixed(10)

    this.data.isKejin && (expGained += Number(this.data.currentBaseExperience))

    expGained = Math.floor(expGained)

    const time = Math.ceil(expNeeded / expGained)

    this.setData({
      showResult: true,
      result: `<div style="margin-top: 40rpx">从<span style="color: #F56C6C;">${this.data.startLevel}</span>级到<span style="color: #F56C6C;">${this.data.endLevel}</span>级共需要经验<span style="color: #409EFF;">${expNeeded}</span>。</div><div>在当前提供的条件下，每次<span style="color: #F56C6C;">${this.data.currentPoint}</span>可以提供经验<span style="color: #409EFF;">${expGained}</span>。</div><div>因此共需要练级的次数为<span style="color: #409EFF;">${time}</span>次。</div>`
    })
  },
  clickResultOutside() {
    this.setData({
      showResult: false
    })
  },
  clickResultPanel() {
    return
  }
})