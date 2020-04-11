const getPercentage = proportion => {
  let percentage = '0%'
  if (proportion < 0) percentage = '0%'
  else if (proportion > 1) percentage = '100%'
  else percentage = `${Math.ceil(proportion.getFixed() * 1000) / 10}%`
  return percentage
}

const getGreatDamagePercentage = dataContainer => {
  return getPercentage((dataContainer.finalDamage.criticalTop - Math.ceil(dataContainer.enemyLife * 0.75)) / Math.abs(dataContainer.finalDamage.criticalTop - dataContainer.finalDamage.normalBottom))
}

const getSunkPercentage = dataContainer => {
  return getPercentage((dataContainer.finalDamage.criticalTop - dataContainer.enemyLife) / Math.abs(dataContainer.finalDamage.criticalTop - dataContainer.finalDamage.normalBottom))
}

const caculateAttackRange = dataContainer => {
  let finalAttack = {
    normalBottom: 0,
    normalTop: 0,
    criticalBottom: 0,
    criticalTop: 0
  }

  // 航母炮击有个随机系数
  if (dataContainer.type === 4) {
    const attackOptions = dataContainer.baseATK.split('~')
    const bottom = Number(attackOptions[0])
    const top = Number(attackOptions[1])

    finalAttack.normalBottom = (dataContainer.baseCoefficient * bottom * dataContainer.floatBottom).getFixed()
    finalAttack.normalTop = (dataContainer.baseCoefficient * top * dataContainer.floatTop).getFixed()
  } else {
    finalAttack.normalBottom = (dataContainer.baseCoefficient * dataContainer.baseATK * dataContainer.floatBottom).getFixed()
    finalAttack.normalTop = (dataContainer.baseCoefficient * dataContainer.baseATK * dataContainer.floatTop).getFixed()
  }

  finalAttack.criticalBottom = (finalAttack.normalBottom * dataContainer.criticalCoefficientValue).getFixed()
  finalAttack.criticalTop = (finalAttack.normalTop * dataContainer.criticalCoefficientValue).getFixed()

  // 计算鱼雷机系数
  if (dataContainer.type === 1) {
    finalAttack.normalBottom = finalAttack.normalBottom * 0.5
    finalAttack.normalTop = finalAttack.normalTop * 1
    finalAttack.criticalBottom = finalAttack.criticalBottom * 0.5
    finalAttack.criticalTop = finalAttack.criticalTop * 1
  }

  return finalAttack
}

const ceilDameges = (baseDamege, dataContainer) => {
  baseDamege = Math.ceil(baseDamege * dataContainer.finalDamageCoefficient + dataContainer.trueDamege)
  baseDamege = Math.ceil(baseDamege * dataContainer.damegeReducingCoefficient)
  baseDamege = Math.ceil(baseDamege * dataContainer.attackStrategyCoefficient)
  baseDamege = Math.ceil(baseDamege * dataContainer.defenceStrategyCoefficient)
  return baseDamege
}

const caculateFinalDamage = dataContainer => {
  let finalDamage = {
    normalBottom: 0,
    normalTop: 0,
    criticalBottom: 0,
    criticalTop: 0
  }

  if (dataContainer.type === 12) {
    // 白天导弹战默认破甲，因此需要计算独特的装甲减伤系数
    let armorCoefficient = 1 / Math.sqrt(1 + Math.pow(Number(dataContainer.enemyArmor / (65 * dataContainer.piercingCoefficient)), 5.4))

    for (let key in finalDamage) {
      finalDamage[key] = ceilDameges(dataContainer.attackRange[key] * armorCoefficient, dataContainer)
    }
  } else {
    // 除白天的导弹战以外都可能出现不破防的情况
    for (let key in finalDamage) {
      let tempDamege = dataContainer.attackRange[key] * (1 - dataContainer.enemyArmor / (Number(0.5 * dataContainer.enemyArmor) + Number(dataContainer.piercingCoefficient * dataContainer.attackRange[key])))

      // 计算是否破防
      tempDamege = tempDamege > 0 ? tempDamege : Math.min(dataContainer.baseATK, dataContainer.enemyLife) * 0.1

      finalDamage[key] = ceilDameges(Math.ceil(tempDamege), dataContainer)
    }
  }

  finalDamage.normalAverage = (finalDamage.normalBottom + finalDamage.normalTop) / 2
  finalDamage.criticalAverage = (finalDamage.criticalBottom + finalDamage.criticalTop) / 2
  return finalDamage
}

class BaseATKParams {
  constructor(index, title) {
    this.id = index
    this.title = title
    this.aria = `ATKParam${index}`
    this.value = ''
  }
}

class Situation {
  constructor(index, title, baseATKParamsList, baseATKFormula, coefficientObject, coefficientFormula, defaultPiercingCoefficient, antiSubmarineCoefficient) {
    this.id = index
    this.title = title
    this.caculateAttackRange = caculateAttackRange
    this.caculateFinalDamage = caculateFinalDamage
    this.getGreatDamagePercentage = getGreatDamagePercentage
    this.getSunkPercentage = getSunkPercentage
    baseATKParamsList && (this.baseATKItems = baseATKParamsList.map((item, index) => {
      return new BaseATKParams(index, item.title)
    }))
    baseATKFormula && (this.baseATKFormula = baseATKFormula)
    coefficientFormula && (this.coefficientFormula = coefficientFormula)
    antiSubmarineCoefficient && (this.antiSubmarineCoefficient = antiSubmarineCoefficient)

    coefficientObject && coefficientObject.coefficientList.map((flag, index) => {
      switch (index) {
        case 0:
          this.formationCoefficient = flag ? true : false
          if (coefficientObject.formationValues) {
            this.formationOptions = [{
                name: `单纵阵(${coefficientObject.formationValues[0]})`,
                value: coefficientObject.formationValues[0],
                checked: true
              },
              {
                name: `复纵阵(${coefficientObject.formationValues[1]})`,
                value: coefficientObject.formationValues[1],
                checked: false
              }, {
                name: `轮型阵(${coefficientObject.formationValues[2]})`,
                value: coefficientObject.formationValues[2],
                checked: false
              }, {
                name: `梯形阵(${coefficientObject.formationValues[3]})`,
                value: coefficientObject.formationValues[3],
                checked: false
              }, {
                name: `单横阵(${coefficientObject.formationValues[4]})`,
                value: coefficientObject.formationValues[4],
                checked: false
              }
            ]
          }
          break
        case 1:
          this.directionCoefficient = flag ? true : false
          if (coefficientObject.directionValues) {
            this.directionOptions = [{
                name: `T有利(${coefficientObject.directionValues[0]})`,
                value: coefficientObject.directionValues[0],
                checked: true
              },
              {
                name: `同航(${coefficientObject.directionValues[1]})`,
                value: coefficientObject.directionValues[1],
                checked: false
              }, {
                name: `反航(${coefficientObject.directionValues[2]})`,
                value: coefficientObject.directionValues[2],
                checked: false
              }, {
                name: `T不利(${coefficientObject.directionValues[3]})`,
                value: coefficientObject.directionValues[3],
                checked: false
              }
            ]
          }
          break
        case 2:
          this.skyMasteryCoefficient = flag ? true : false
          this.skyMasteryOptions = [{
            name: '制空权确保(1.1)',
            value: 1.1,
            checked: true
          }, {
            name: '制空权优势(1.05)',
            value: 1.05,
          }, {
            name: '制空权均势(1)',
            value: 1,
          }, {
            name: '制空权劣势(0.95)',
            value: 0.95,
          }, {
            name: '制空权丧失(0.9)',
            value: 0.9,
          }]
          break
        case 3:
          this.sonarCoefficient = flag ? true : false
          break
        case 4:
          this.cartridgeCoefficient = flag ? true : false
          this.cartridgePercents = [{
              id: 0,
              selected: true
            },
            {
              id: 1,
              selected: true
            },
            {
              id: 2,
              selected: true
            },
            {
              id: 3,
              selected: true
            },
            {
              id: 4,
              selected: true
            },
            {
              id: 5,
              selected: true
            },
            {
              id: 6,
              selected: true
            },
            {
              id: 7,
              selected: true
            },
            {
              id: 8,
              selected: true
            },
            {
              id: 9,
              selected: true
            },
            {
              id: 10,
              selected: false
            },
            {
              id: 11,
              selected: false
            }
          ]
          break
        case 5:
          this.torpedoCoefficient = flag ? true : false
          this.torpedoBottom = 0.5
          this.torpedoTop = 1
          break
        case 6:
          this.damageCoefficient = flag ? true : false
          this.damageOptions = [{
            name: '正常(1.0)',
            value: 1,
            checked: true
          }, {
            name: '中破(0.6)',
            value: 0.6,
          }, {
            name: '大破(0.3)',
            value: 0.3,
          }]
          break
        case 7:
          this.attackCoefficient = flag ? true : false
          this.attackDefault = 1
          break
        case 8:
          this.criticalCoefficient = flag ? true : false
          this.criticalDefault = 0.5
          break
        case 9:
          this.floatCoefficient = flag ? true : false
          if (coefficientObject.floatOptions) {
            this.floatBottom = coefficientObject.floatOptions.floatArea[0]
            this.floatTop = coefficientObject.floatOptions.floatArea[1]
            this.floatAverage = (this.floatBottom + this.floatTop) / 2
            this.floatArea = `${this.floatBottom}~${this.floatTop}`
            this.overWeightBullet = coefficientObject.floatOptions.overWeightBullet
          }
          break
        default:
          return
      }
    })

    this.additionalParams = [{
      id: 0,
      title: '敌方装甲',
      calculating(value) {
        return Number(value)
      },
      value: '',
      name: 'enemyArmor'
    }, {
      id: 1,
      title: '敌方血量',
      calculating(value) {
        return Number(value)
      },
      value: '10',
      name: 'enemyLife'
    }, {
      id: 2,
      title: '最终伤害加成',
      calculating(value) {
        return 1 + Number((Number(value) / 100).getFixed())
      },
      value: '',
      name: 'finalDamageCoefficient'
    }, {
      id: 3,
      title: '穿甲系数',
      defaultValue: defaultPiercingCoefficient,
      calculating(value) {
        return this.defaultValue + Number((Number(value) / 100).getFixed())
      },
      value: '',
      name: 'piercingCoefficient'
    }, {
      id: 4,
      title: '减伤系数',
      calculating(value) {
        return 1 - Number((Number(value) / 100).getFixed())
      },
      value: '',
      name: 'damegeReducingCoefficient'
    }, {
      id: 5,
      title: '固定伤害',
      calculating(value) {
        return Number(value)
      },
      value: '',
      name: 'trueDamege'
    }, {
      id: 6,
      title: '攻击战术系数',
      calculating(value) {
        return 1 + Number((Number(value) / 100).getFixed())
      },
      value: '',
      name: 'attackStrategyCoefficient'
    }, {
      id: 7,
      title: '防御战术系数',
      calculating(value) {
        return 1 - Number((Number(value) / 100).getFixed())
      },
      value: '',
      name: 'defenceStrategyCoefficient'
    }]
  }
}

export default Situation