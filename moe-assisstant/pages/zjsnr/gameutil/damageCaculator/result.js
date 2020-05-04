const DAMAGE_ITEMS = [{
  title: '正常',
  value: 1
}, {
  title: '中破',
  value: 0.6
}, {
  title: '正常',
  value: 0.3
}]

const SKY_MASTERY_ITEMS = [{
  title: '制空权确保',
  value: 1.1
}, {
  title: '制空权优势',
  value: 1.05
}, {
  title: '制空权均势',
  value: 1.0
}, {
  title: '制空权劣势',
  value: 0.95
}, {
  title: '制空权丧失',
  value: 0.9
}]

const TYPE_TITLE_MAPPING = [{
  type: 0,
  title: '航空战（轰炸机）',
  subParams: [{
    title: '放飞数量',
    key: 'ATKParam0'
  }, {
    title: '轰炸数值',
    key: 'ATKParam1'
  }, {
    title: '制空情况',
    key: 'skyMasteryCoefficientValue'
  }, {
    title: '弹药情况',
    key: 'cartridgePercentage'
  }, {
    title: '战损情况',
    key: 'damageCoefficientValue'
  }, {
    title: '攻击力系数',
    key: 'attackCoefficientValue'
  }, {
    title: '暴击伤害系数',
    key: 'cartridgeCoefficientValue'
  }, {
    title: '敌方护甲值',
    key: 'enemyArmor'
  }, {
    title: '敌方生命值',
    key: 'enemyLife'
  }, {
    title: '最终伤害系数',
    key: 'finalDamageCoefficient'
  }, {
    title: '穿甲系数',
    key: 'piercingCoefficient'
  }, {
    title: '减伤系数',
    key: 'damegeReducingCoefficient'
  }, {
    title: '固定伤害',
    key: 'trueDamege'
  }, {
    title: '攻击战术系数',
    key: 'attackStrategyCoefficient'
  }, {
    title: '防御战术系数',
    key: 'defenceStrategyCoefficient'
  }]
}, {
  type: 1,
  title: '航空战（鱼雷机）',
  subParams: [{
    title: '放飞数量',
    key: 'ATKParam0'
  }, {
    title: '鱼雷数值',
    key: 'ATKParam1'
  }, {
    title: '制空情况',
    key: 'skyMasteryCoefficientValue'
  }, {
    title: '弹药情况',
    key: 'cartridgePercentage'
  }, {
    title: '战损情况',
    key: 'damageCoefficientValue'
  }, {
    title: '攻击力系数',
    key: 'attackCoefficientValue'
  }, {
    title: '暴击伤害系数',
    key: 'cartridgeCoefficientValue'
  }, {
    title: '敌方护甲值',
    key: 'enemyArmor'
  }, {
    title: '敌方生命值',
    key: 'enemyLife'
  }, {
    title: '最终伤害系数',
    key: 'finalDamageCoefficient'
  }, {
    title: '穿甲系数',
    key: 'piercingCoefficient'
  }, {
    title: '减伤系数',
    key: 'damegeReducingCoefficient'
  }, {
    title: '固定伤害',
    key: 'trueDamege'
  }, {
    title: '攻击战术系数',
    key: 'attackStrategyCoefficient'
  }, {
    title: '防御战术系数',
    key: 'defenceStrategyCoefficient'
  }]
}, {
  type: 2,
  title: '昼战反潜（航母类）',
  subParams: [{
    title: '舰船对潜',
    key: 'ATKParam0'
  }, {
    title: '声呐系数',
    key: 'sonarCoefficientValue'
  }, {
    title: '弹药情况',
    key: 'cartridgePercentage'
  }, {
    title: '攻击力系数',
    key: 'attackCoefficientValue'
  }, {
    title: '暴击伤害系数',
    key: 'cartridgeCoefficientValue'
  }, {
    title: '敌方护甲值',
    key: 'enemyArmor'
  }, {
    title: '敌方生命值',
    key: 'enemyLife'
  }, {
    title: '最终伤害系数',
    key: 'finalDamageCoefficient'
  }, {
    title: '穿甲系数',
    key: 'piercingCoefficient'
  }, {
    title: '减伤系数',
    key: 'damegeReducingCoefficient'
  }, {
    title: '固定伤害',
    key: 'trueDamege'
  }, {
    title: '攻击战术系数',
    key: 'attackStrategyCoefficient'
  }, {
    title: '防御战术系数',
    key: 'defenceStrategyCoefficient'
  }]
}, {
  type: 3,
  title: '昼战反潜（深投类）',
  subParams: [{
    title: '舰船对潜',
    key: 'ATKParam0'
  }, {
    title: '深弹对潜',
    key: 'ATKParam1'
  }, {
    title: '声呐系数',
    key: 'sonarCoefficientValue'
  }, {
    title: '战损情况',
    key: 'damageCoefficientValue'
  }, {
    title: '弹药情况',
    key: 'cartridgePercentage'
  }, {
    title: '攻击力系数',
    key: 'attackCoefficientValue'
  }, {
    title: '暴击伤害系数',
    key: 'cartridgeCoefficientValue'
  }, {
    title: '敌方护甲值',
    key: 'enemyArmor'
  }, {
    title: '敌方生命值',
    key: 'enemyLife'
  }, {
    title: '最终伤害系数',
    key: 'finalDamageCoefficient'
  }, {
    title: '穿甲系数',
    key: 'piercingCoefficient'
  }, {
    title: '减伤系数',
    key: 'damegeReducingCoefficient'
  }, {
    title: '固定伤害',
    key: 'trueDamege'
  }, {
    title: '攻击战术系数',
    key: 'attackStrategyCoefficient'
  }, {
    title: '防御战术系数',
    key: 'defenceStrategyCoefficient'
  }]
}, {
  type: 4,
  title: '昼战炮击（航母类）',
  subParams: [{
    title: '火力',
    key: 'ATKParam0'
  }, {
    title: '轰炸',
    key: 'ATKParam1'
  }, {
    title: '鱼雷',
    key: 'ATKParam2'
  }, {
    title: '敌人总对空',
    key: 'ATKParam3'
  }, {
    title: '系数α',
    key: 'ATKParam4'
  }, {
    title: '制空情况',
    key: 'skyMasteryCoefficientValue'
  }, {
    title: '战损情况',
    key: 'damageCoefficientValue'
  }, {
    title: '弹药情况',
    key: 'cartridgePercentage'
  }, {
    title: '攻击力系数',
    key: 'attackCoefficientValue'
  }, {
    title: '暴击伤害系数',
    key: 'cartridgeCoefficientValue'
  }, {
    title: '敌方护甲值',
    key: 'enemyArmor'
  }, {
    title: '敌方生命值',
    key: 'enemyLife'
  }, {
    title: '最终伤害系数',
    key: 'finalDamageCoefficient'
  }, {
    title: '穿甲系数',
    key: 'piercingCoefficient'
  }, {
    title: '减伤系数',
    key: 'damegeReducingCoefficient'
  }, {
    title: '固定伤害',
    key: 'trueDamege'
  }, {
    title: '攻击战术系数',
    key: 'attackStrategyCoefficient'
  }, {
    title: '防御战术系数',
    key: 'defenceStrategyCoefficient'
  }]
}, {
  type: 5,
  title: '昼战炮击（导弹舰）',
  subParams: [{
    title: '火力',
    key: 'ATKParam0'
  }, {
    title: '导弹火力',
    key: 'ATKParam1'
  }, {
    title: '发射架火力',
    key: 'ATKParam2'
  }, {
    title: '阵型情况',
    key: 'formationTitle'
  }, {
    title: '航向情况',
    key: 'directionTitle'
  }, {
    title: '战损情况',
    key: 'damageCoefficientValue'
  }, {
    title: '弹药情况',
    key: 'cartridgePercentage'
  }, {
    title: '攻击力系数',
    key: 'attackCoefficientValue'
  }, {
    title: '暴击伤害系数',
    key: 'cartridgeCoefficientValue'
  }, {
    title: '敌方护甲值',
    key: 'enemyArmor'
  }, {
    title: '敌方生命值',
    key: 'enemyLife'
  }, {
    title: '最终伤害系数',
    key: 'finalDamageCoefficient'
  }, {
    title: '穿甲系数',
    key: 'piercingCoefficient'
  }, {
    title: '减伤系数',
    key: 'damegeReducingCoefficient'
  }, {
    title: '固定伤害',
    key: 'trueDamege'
  }, {
    title: '攻击战术系数',
    key: 'attackStrategyCoefficient'
  }, {
    title: '防御战术系数',
    key: 'defenceStrategyCoefficient'
  }]
}, {
  type: 6,
  title: '昼战炮击（其他类）',
  subParams: [{
    title: '火力',
    key: 'ATKParam0'
  }, {
    title: '阵型情况',
    key: 'formationTitle'
  }, {
    title: '航向情况',
    key: 'directionTitle'
  }, {
    title: '战损情况',
    key: 'damageCoefficientValue'
  }, {
    title: '弹药情况',
    key: 'cartridgePercentage'
  }, {
    title: '攻击力系数',
    key: 'attackCoefficientValue'
  }, {
    title: '暴击伤害系数',
    key: 'cartridgeCoefficientValue'
  }, {
    title: '敌方护甲值',
    key: 'enemyArmor'
  }, {
    title: '敌方生命值',
    key: 'enemyLife'
  }, {
    title: '最终伤害系数',
    key: 'finalDamageCoefficient'
  }, {
    title: '穿甲系数',
    key: 'piercingCoefficient'
  }, {
    title: '减伤系数',
    key: 'damegeReducingCoefficient'
  }, {
    title: '固定伤害',
    key: 'trueDamege'
  }, {
    title: '攻击战术系数',
    key: 'attackStrategyCoefficient'
  }, {
    title: '防御战术系数',
    key: 'defenceStrategyCoefficient'
  }]
}, {
  type: 7,
  title: '昼战雷击',
  subParams: [{
    title: '鱼雷',
    key: 'ATKParam0'
  }, {
    title: '阵型情况',
    key: 'formationTitle'
  }, {
    title: '航向情况',
    key: 'directionTitle'
  }, {
    title: '战损情况',
    key: 'damageCoefficientValue'
  }, {
    title: '弹药情况',
    key: 'cartridgePercentage'
  }, {
    title: '攻击力系数',
    key: 'attackCoefficientValue'
  }, {
    title: '暴击伤害系数',
    key: 'cartridgeCoefficientValue'
  }, {
    title: '敌方护甲值',
    key: 'enemyArmor'
  }, {
    title: '敌方生命值',
    key: 'enemyLife'
  }, {
    title: '最终伤害系数',
    key: 'finalDamageCoefficient'
  }, {
    title: '穿甲系数',
    key: 'piercingCoefficient'
  }, {
    title: '减伤系数',
    key: 'damegeReducingCoefficient'
  }, {
    title: '固定伤害',
    key: 'trueDamege'
  }, {
    title: '攻击战术系数',
    key: 'attackStrategyCoefficient'
  }, {
    title: '防御战术系数',
    key: 'defenceStrategyCoefficient'
  }]
}, {
  type: 8,
  title: '夜战雷击',
  subParams: [{
    title: '鱼雷',
    key: 'ATKParam0'
  }, {
    title: '阵型情况',
    key: 'formationTitle'
  }, {
    title: '战损情况',
    key: 'damageCoefficientValue'
  }, {
    title: '弹药情况',
    key: 'cartridgePercentage'
  }, {
    title: '攻击力系数',
    key: 'attackCoefficientValue'
  }, {
    title: '暴击伤害系数',
    key: 'cartridgeCoefficientValue'
  }, {
    title: '敌方护甲值',
    key: 'enemyArmor'
  }, {
    title: '敌方生命值',
    key: 'enemyLife'
  }, {
    title: '最终伤害系数',
    key: 'finalDamageCoefficient'
  }, {
    title: '穿甲系数',
    key: 'piercingCoefficient'
  }, {
    title: '减伤系数',
    key: 'damegeReducingCoefficient'
  }, {
    title: '固定伤害',
    key: 'trueDamege'
  }, {
    title: '攻击战术系数',
    key: 'attackStrategyCoefficient'
  }, {
    title: '防御战术系数',
    key: 'defenceStrategyCoefficient'
  }]
}, {
  type: 9,
  title: '夜战炮雷合击',
  subParams: [{
    title: '火力',
    key: 'ATKParam0'
  }, {
    title: '鱼雷',
    key: 'ATKParam1'
  }, {
    title: '阵型情况',
    key: 'formationTitle'
  }, {
    title: '战损情况',
    key: 'damageCoefficientValue'
  }, {
    title: '弹药情况',
    key: 'cartridgePercentage'
  }, {
    title: '攻击力系数',
    key: 'attackCoefficientValue'
  }, {
    title: '暴击伤害系数',
    key: 'cartridgeCoefficientValue'
  }, {
    title: '敌方护甲值',
    key: 'enemyArmor'
  }, {
    title: '敌方生命值',
    key: 'enemyLife'
  }, {
    title: '最终伤害系数',
    key: 'finalDamageCoefficient'
  }, {
    title: '穿甲系数',
    key: 'piercingCoefficient'
  }, {
    title: '减伤系数',
    key: 'damegeReducingCoefficient'
  }, {
    title: '固定伤害',
    key: 'trueDamege'
  }, {
    title: '攻击战术系数',
    key: 'attackStrategyCoefficient'
  }, {
    title: '防御战术系数',
    key: 'defenceStrategyCoefficient'
  }]
}, {
  type: 10,
  title: '夜战炮击（巡洋舰）',
  subParams: [{
    title: '火力',
    key: 'ATKParam0'
  }, {
    title: '阵型情况',
    key: 'formationTitle'
  }, {
    title: '战损情况',
    key: 'damageCoefficientValue'
  }, {
    title: '弹药情况',
    key: 'cartridgePercentage'
  }, {
    title: '攻击力系数',
    key: 'attackCoefficientValue'
  }, {
    title: '暴击伤害系数',
    key: 'cartridgeCoefficientValue'
  }, {
    title: '敌方护甲值',
    key: 'enemyArmor'
  }, {
    title: '敌方生命值',
    key: 'enemyLife'
  }, {
    title: '最终伤害系数',
    key: 'finalDamageCoefficient'
  }, {
    title: '穿甲系数',
    key: 'piercingCoefficient'
  }, {
    title: '减伤系数',
    key: 'damegeReducingCoefficient'
  }, {
    title: '固定伤害',
    key: 'trueDamege'
  }, {
    title: '攻击战术系数',
    key: 'attackStrategyCoefficient'
  }, {
    title: '防御战术系数',
    key: 'defenceStrategyCoefficient'
  }]
}, {
  type: 11,
  title: '夜战炮击（其他）',
  subParams: [{
    title: '火力',
    key: 'ATKParam0'
  }, {
    title: '阵型情况',
    key: 'formationTitle'
  }, {
    title: '战损情况',
    key: 'damageCoefficientValue'
  }, {
    title: '弹药情况',
    key: 'cartridgePercentage'
  }, {
    title: '攻击力系数',
    key: 'attackCoefficientValue'
  }, {
    title: '暴击伤害系数',
    key: 'cartridgeCoefficientValue'
  }, {
    title: '敌方护甲值',
    key: 'enemyArmor'
  }, {
    title: '敌方生命值',
    key: 'enemyLife'
  }, {
    title: '最终伤害系数',
    key: 'finalDamageCoefficient'
  }, {
    title: '穿甲系数',
    key: 'piercingCoefficient'
  }, {
    title: '减伤系数',
    key: 'damegeReducingCoefficient'
  }, {
    title: '固定伤害',
    key: 'trueDamege'
  }, {
    title: '攻击战术系数',
    key: 'attackStrategyCoefficient'
  }, {
    title: '防御战术系数',
    key: 'defenceStrategyCoefficient'
  }]
}, {
  type: 12,
  title: '导弹战',
  subParams: [{
    title: '舰船火力',
    key: 'ATKParam0'
  }, {
    title: '导弹火力',
    key: 'ATKParam1'
  }, {
    title: '阵型情况',
    key: 'formationTitle'
  }, {
    title: '战损情况',
    key: 'damageCoefficientValue'
  }, {
    title: '攻击力系数',
    key: 'attackCoefficientValue'
  }, {
    title: '暴击伤害系数',
    key: 'cartridgeCoefficientValue'
  }, {
    title: '敌方护甲值',
    key: 'enemyArmor'
  }, {
    title: '敌方生命值',
    key: 'enemyLife'
  }, {
    title: '最终伤害系数',
    key: 'finalDamageCoefficient'
  }, {
    title: '穿甲系数',
    key: 'piercingCoefficient'
  }, {
    title: '减伤系数',
    key: 'damegeReducingCoefficient'
  }, {
    title: '固定伤害',
    key: 'trueDamege'
  }, {
    title: '攻击战术系数',
    key: 'attackStrategyCoefficient'
  }, {
    title: '防御战术系数',
    key: 'defenceStrategyCoefficient'
  }]
}, {
  type: 13,
  title: '夜间导弹战',
  subParams: [{
    title: '舰船火力',
    key: 'ATKParam0'
  },, {
    title: '导弹火力',
    key: 'ATKParam1'
  }, {
    title: '阵型情况',
    key: 'formationTitle'
  }, {
    title: '战损情况',
    key: 'damageCoefficientValue'
  }, {
    title: '攻击力系数',
    key: 'attackCoefficientValue'
  }, {
    title: '暴击伤害系数',
    key: 'cartridgeCoefficientValue'
  }, {
    title: '敌方护甲值',
    key: 'enemyArmor'
  }, {
    title: '敌方生命值',
    key: 'enemyLife'
  }, {
    title: '最终伤害系数',
    key: 'finalDamageCoefficient'
  }, {
    title: '穿甲系数',
    key: 'piercingCoefficient'
  }, {
    title: '减伤系数',
    key: 'damegeReducingCoefficient'
  }, {
    title: '固定伤害',
    key: 'trueDamege'
  }, {
    title: '攻击战术系数',
    key: 'attackStrategyCoefficient'
  }, {
    title: '防御战术系数',
    key: 'defenceStrategyCoefficient'
  }]
}]

class result {
  constructor(data) {
    let result = []
    const situationCase = TYPE_TITLE_MAPPING.find(item => {
      return item.type === data.type
    })

    result.push({
      title: '伤害模式',
      value: situationCase.title
    })

    // 鱼雷机独有系数
    if (situationCase.type === 1) {
      result.push({
        title: '鱼雷机系数',
        value: "[0.5, 1]"
      })
    }

    situationCase.subParams.map(item => {
      switch (item.key) {
        case 'skyMasteryCoefficientValue':
          result.push({
            title: item.title,
            value: SKY_MASTERY_ITEMS.find(subItem => {
              return subItem.value === data[item.key]
            }).title
          })
          break
        case 'damageCoefficientValue':
          result.push({
            title: item.title,
            value: DAMAGE_ITEMS.find(subItem => {
              return subItem.value === data[item.key]
            }).title
          })
          break
        case 'formationTitle':
          result.push({
            title: item.title,
            value: data[item.key]
          })
          break
        case 'directionTitle':
          result.push({
            title: item.title,
            value: data[item.key]
          })
          break
        default:
          result.push({
            title: item.title,
            value: data[item.key]
          })
      }
    })

    result.push({
      title: '伤害范围',
      value: `[${data.finalDamage.normalBottom}, ${data.finalDamage.normalTop}]`,
      important: true
    })
    result.push({
      title: '暴击伤害范围',
      value: `[${data.finalDamage.criticalBottom}, ${data.finalDamage.criticalTop}]`,
      important: true
    })
    result.push({
      title: '大破率',
      value: data.greatDamagePercentage,
      important: true
    })
    result.push({
      title: '击沉率',
      value: data.sunkPercentage,
      important: true
    })

    return result
  }
}

export default result