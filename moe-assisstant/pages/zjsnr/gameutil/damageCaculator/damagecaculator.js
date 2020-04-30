import Situation from './situation.js'
import Result from './result.js'
import SITUATION_CASES from './cases.js'

const app = getApp()

let dataContainer = {}

const defaultAdditionalParams = [0, 10, 0, 0, 0, 0, 0, 0]

const caculateCoefficient = title => {
  let result = 1
  const paramsArr = title.match(new RegExp(/([\u4e00-\u9fa5]+)/g))
  paramsArr.map(param => {
    switch (param) {
      case '制空系数':
        result = result * dataContainer.skyMasteryCoefficientValue
        break
      case '弹药系数':
        result = result * dataContainer.cartridgeCoefficientValue
        break
      case '战损系数':
        result = result * dataContainer.damageCoefficientValue
        break
      case '攻击力系数':
        result = result * dataContainer.attackCoefficientValue
        break
      case '声呐系数':
        result = result * dataContainer.sonarCoefficientValue
        break
      case '阵型系数':
        result = result * dataContainer.formationCoefficientValue
        break
      case '航向系数':
        result = result * dataContainer.directionCoefficientValue
        break
      default:
        break
    }
  })

  dataContainer.baseCoefficient = result.getFixed()
  return dataContainer.baseCoefficient
}

Page({
  data: {
    situations: [],
    currentSituation: {},
    overWeightBulletEquiped: false,
    sonarInput: '',
    skillInitData: '0',
    criticalInitData: '0',
    resultAvailable: false,
    showResult: false,
    resultItems: [],

    ATKResult: 0,
    coefficientResult: 0,
    sonarCoefficientResult: 0,
    toast: '',
    toastDuration: 5000
  },
  onLoad() {
    wx.showShareMenu({})

    this.setData({
      situations: SITUATION_CASES.map((situation, index) => {
        return new Situation(index, situation.title, situation.baseATKParamsList, situation.baseATKFormula, situation.coefficientObject, situation.coefficientFormula, situation.defaultPiercingCoefficient, situation.antiSubmarineCoefficient)
      })
    })

    this.selectSituation({
      detail: {
        value: 0
      }
    })
  },
  initData() {
    dataContainer = {
      type: this.data.currentSituation.id,
      formationCoefficientValue: this.data.currentSituation.formationOptions ? this.data.currentSituation.formationOptions[0].value : 0,
      directionCoefficientValue: 1.15,
      attackCoefficientValue: 1,
      criticalCoefficientValue: 1.5,
      skyMasteryCoefficientValue: 1.1,
      damageCoefficientValue: 1,
      cartridgeCoefficientValue: 1,
      cartridgePercentage: '100%',
      formationTitle: '单纵阵',
      directionTitle: 'T有利',
      floatBottom: this.data.currentSituation.floatBottom,
      floatTop: this.data.currentSituation.floatTop,
      torpedoBottom: this.data.currentSituation.torpedoBottom,
      torpedoTop: this.data.currentSituation.torpedoTop,
      damegeReducingCoefficient: 1,
      trueDamege: 0,
      attackStrategyCoefficient: 1,
      defenceStrategyCoefficient: 1
    }

    this.setData({
      ATKResult: 0,
      coefficientResult: caculateCoefficient(this.data.currentSituation.coefficientFormula),
      sonarCoefficientResult: 0,
      sonarInput: '',
      skillInitData: '0',
      criticalInitData: '0',
      currentSituation: Object.assign(this.data.currentSituation, {
        baseATKItems: this.data.currentSituation.baseATKItems.map(item => {
          item.value = ''
          return item
        }),
        additionalParams: this.data.currentSituation.additionalParams.map((item, index) => {
          item.value = defaultAdditionalParams[index]
          return item
        })
      })
    })

    dataContainer = Object.assign(dataContainer, {
      enemyArmor: this.data.currentSituation.additionalParams[0].value,
      enemyLife: this.data.currentSituation.additionalParams[1].value,
      finalDamageCoefficient: this.data.currentSituation.additionalParams[2].calculating(0),
      piercingCoefficient: this.data.currentSituation.additionalParams[3].calculating(0)
    })
  },
  selectSituation(e) {
    this.setData({
      currentSituation: this.data.situations.find(item => {
        return parseInt(e.detail.value) === item.id
      })
    })

    this.initData()
  },
  baseATKInput(e) {
    dataContainer[e.target.id] = Number(e.detail.value)
    const id = Number(e.target.id.split('ATKParam')[1])
    const temp = this.data.currentSituation.baseATKItems.map(item => {
      if (id === item.id) item.value = e.detail.value
      return item
    })

    let baseATK = this.data.currentSituation.baseATKFormula.formula(dataContainer)
    switch (typeof baseATK) {
      case 'string':
        break
      case 'number':
        baseATK = Number(baseATK).getFixed()
        break
      default:
        return
    }
    dataContainer.baseATK = baseATK

    this.setData({
      ATKResult: baseATK,
      currentSituation: Object.assign(this.data.currentSituation, {
        baseATKItems: temp
      })
    })

    this.validateDataModels()
  },
  formationChanged(e) {
    const selectedFormation = this.data.currentSituation.formationOptions.find(item => {
      return item.name === e.detail.value
    })
    const value = selectedFormation.value
    dataContainer.formationCoefficientValue = Number(value)
    dataContainer.formationTitle = selectedFormation.name.match(new RegExp(/([\u4e00-\u9fa5]+)/))

    this.setData({
      currentSituation: Object.assign(this.data.currentSituation, {
        formationOptions: this.data.currentSituation.formationOptions.map((option, index) => {
          option.checked = option.name === e.detail.value
          return option
        })
      })
    })

    this.updateCoefficientValue()
  },
  directionChanged(e) {
    dataContainer.directionCoefficientValue = Number(e.detail.value)
    dataContainer.directionTitle = this.data.currentSituation.directionOptions.find(item => {
      return item.value === Number(e.detail.value)
    }).name.split('(')[0]

    this.setData({
      currentSituation: Object.assign(this.data.currentSituation, {
        directionOptions: this.data.currentSituation.directionOptions.map((option, index) => {
          option.checked = option.value === dataContainer.directionCoefficientValue
          return option
        })
      })
    })

    this.updateCoefficientValue()
  },
  skyMasteryChanged(e) {
    dataContainer.skyMasteryCoefficientValue = Number(e.detail.value)

    this.setData({
      currentSituation: Object.assign(this.data.currentSituation, {
        skyMasteryOptions: this.data.currentSituation.skyMasteryOptions.map((option, index) => {
          option.checked = option.value === dataContainer.skyMasteryCoefficientValue
          return option
        })
      })
    })

    this.updateCoefficientValue()
  },
  selectCartridgePercent(e) {
    const selectedId = Number(e.currentTarget.id.split('cartridge')[1])
    const coefficient = Math.min(1, (selectedId + 1) / 10 * 2)
    dataContainer.cartridgeCoefficientValue = coefficient
    dataContainer.cartridgePercentage = `${(selectedId + 1) * 10}%`

    this.setData({
      currentSituation: Object.assign(this.data.currentSituation, {
        cartridgePercents: this.data.currentSituation.cartridgePercents.map((item, index) => {
          if (index <= selectedId) item.selected = true
          else item.selected = false
          return item
        })
      })
    })

    this.updateCoefficientValue()
  },
  attackCoefficientInput(e) {
    dataContainer.attackCoefficientValue = (Number(e.detail.value) + 100) / 100
    this.updateCoefficientValue()
  },
  criticalCoefficientInput(e) {
    dataContainer.criticalCoefficientValue = (Number(e.detail.value) + 150) / 100
    this.updateCoefficientValue()
  },
  damageChanged(e) {
    dataContainer.damageCoefficientValue = Number(e.detail.value)

    this.setData({
      currentSituation: Object.assign(this.data.currentSituation, {
        damageOptions: this.data.currentSituation.damageOptions.map((option, index) => {
          option.checked = option.value === dataContainer.damageCoefficientValue
          return option
        })
      })
    })

    this.updateCoefficientValue()
  },
  sonarlCoefficientInput(e) {
    const antiSubmarine = Number(e.detail.value)
    const result = (1 + antiSubmarine / this.data.currentSituation.antiSubmarineCoefficient).getFixed()

    dataContainer.sonarCoefficientValue = result

    this.setData({
      sonarCoefficientResult: result
    })

    this.updateCoefficientValue()
  },
  overWeightBUlletSwitched(e) {
    if (e.detail.value)
      dataContainer.floatTop += 0.25
    else
      dataContainer.floatTop -= 0.25

    this.setData({
      currentSituation: Object.assign(this.data.currentSituation, {
        floatArea: `${this.data.currentSituation.floatBottom}~${dataContainer.floatTop}`,
        floatAverage: (this.data.currentSituation.floatBottom + dataContainer.floatTop) / 2
      })
    })

    this.updateCoefficientValue()
  },
  additionalParamInput(e) {
    const value = Number(e.detail.value)
    const id = Number(e.target.id.split('additionalParam')[1])

    // 导弹开闭幕且输入敌方护甲过高时需提供提示信息
    if (id === 0 && this.data.currentSituation.id === 12 && value > 140)
      this.setData({
        toast: '对导弹开闭幕战来说，当敌方护甲大于145时存在护甲进行反向加成的bug，因此实际伤害会比理论伤害高很多。',
        toastDuration: 8000
      })

    let additionalItem = this.data.currentSituation.additionalParams.find(item => {
      return item.id === id
    })

    additionalItem.value = value

    dataContainer[additionalItem.name] = additionalItem.calculating(value)

    this.validateDataModels()
  },
  updateCoefficientValue() {
    this.setData({
      coefficientResult: caculateCoefficient(this.data.currentSituation.coefficientFormula)
    })

    this.validateDataModels()
  },
  validateDataModels() {
    const baseATKValidation = dataContainer.baseATK > 0 || new RegExp(/^\d+[.]{0,1}\d*~\d+[.]{0,1}\d*$/).test(dataContainer.baseATK)
    const coefficientValidation = dataContainer.baseCoefficient != NaN

    this.setData({
      resultAvailable: baseATKValidation && coefficientValidation
    })
  },
  getFinalResult() {
    if (!this.data.resultAvailable) return

    dataContainer.attackRange = this.data.currentSituation.caculateAttackRange(dataContainer)
    dataContainer.finalDamage = this.data.currentSituation.caculateFinalDamage(dataContainer)
    dataContainer.greatDamagePercentage = this.data.currentSituation.getGreatDamagePercentage(dataContainer)
    dataContainer.sunkPercentage = this.data.currentSituation.getSunkPercentage(dataContainer)

    const result = new Result(dataContainer)
    this.setData({
      showResult: true,
      resultItems: result
    })
  },
  clickMask() {
    this.setData({
      showResult: false
    })
  },
  // 该方法仅用来屏蔽点击内容的冒泡，实现clickOutSide
  clickDialog() {
    return
  },
  additionalParamFocus(e) {
    const id = Number(e.currentTarget.id.split('additionalParam')[1])

    if (Array.prototype.includes.call([2, 4], id))
      this.setData({
        toast: '当存在多个终伤或减伤加成时，请自行算出最终数值并填入。\n计算方式为乘算：\n如两次终伤加成（减伤加成）为别为20%和35%时，\n最终加成为1.2 * 1.35 = 1.62，\n即填入62',
        toastDuration: 10000
      })
  },
  additionalParamBlur() {
    this.setData({
      toast: ''
    })
  }
})