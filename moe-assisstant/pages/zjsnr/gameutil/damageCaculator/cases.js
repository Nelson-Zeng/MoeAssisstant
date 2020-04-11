const SITUATION_CASES = [{
    title: '航空战（轰炸机）',
    baseATKParamsList: [{
        title: '放飞数量'
      },
      {
        title: '轰炸数值'
      }
    ],
    baseATKFormula: {
      title: 'ln(放飞数量+1)*2*轰炸数值+25',
      formula: dataContainer => {
        let result = ''

        if (dataContainer['ATKParam0'] && dataContainer['ATKParam1'])
          result = Math.log(Number(dataContainer['ATKParam0']) + 1) * 2 * dataContainer['ATKParam1'] + 25

        return Math.ceil(result)
      }
    },
    coefficientObject: {
      coefficientList: [0, 0, 1, 0, 1, 0, 1, 1, 1, 1],
      floatOptions: {
        floatArea: [0.89, 1.22],
        overWeightBullet: false
      }
    },
    coefficientFormula: '制空系数*弹药系数*舰损系数*攻击力系数',
    defaultPiercingCoefficient: 1
  }, {
    title: '航空战（鱼雷机）',
    baseATKParamsList: [{
        title: '放飞数量'
      },
      {
        title: '鱼雷数值'
      }
    ],
    baseATKFormula: {
      title: 'ln(放飞数量+1)*2*鱼雷数值+25',
      formula: dataContainer => {
        let result = ''

        if (dataContainer['ATKParam0'] && dataContainer['ATKParam1'])
          result = Math.log(dataContainer['ATKParam0'] + 1) * 2 * dataContainer['ATKParam1'] + 25

        return Math.ceil(result)
      }
    },
    coefficientObject: {
      coefficientList: [0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
      floatOptions: {
        floatArea: [0.89, 1.22],
        overWeightBullet: false
      }
    },
    coefficientFormula: '制空系数*弹药系数*战损系数*攻击力系数',
    defaultPiercingCoefficient: 2
  }, {
    title: '昼战反潜（航母类）',
    baseATKParamsList: [{
      title: '舰船对潜'
    }],
    baseATKFormula: {
      title: '舰船对潜 / 3 + 30',
      formula: dataContainer => {
        let result = ''

        if (dataContainer['ATKParam0'])
          result = dataContainer['ATKParam0'] / 3 + 30

        return Math.ceil(result)
      }
    },
    coefficientObject: {
      coefficientList: [0, 0, 0, 1, 1, 0, 0, 1, 1, 1],
      floatOptions: {
        floatArea: [0.89, 1.22],
        overWeightBullet: false
      }
    },
    coefficientFormula: '声呐系数*弹药系数*攻击力系数',
    defaultPiercingCoefficient: 2,
    antiSubmarineCoefficient: 15
  }, {
    title: '昼战反潜（深投类）',
    baseATKParamsList: [{
        title: '舰船对潜'
      },
      {
        title: '深弹对潜'
      }
    ],
    baseATKFormula: {
      title: '舰船对潜/3+深弹对潜*1.3+30(有深弹);舰船对潜/3(无深弹)',
      formula: dataContainer => {
        let result = ''

        if (dataContainer['ATKParam0']) {
          if (dataContainer['ATKParam1']) result = dataContainer['ATKParam0'] / 3 + dataContainer['ATKParam1'] * 1.3 + 30
          else result = dataContainer['ATKParam0'] / 3
        }

        return Math.ceil(result)
      }
    },
    coefficientObject: {
      coefficientList: [0, 0, 0, 1, 1, 0, 1, 1, 1, 1],
      floatOptions: {
        floatArea: [0.89, 1.22],
        overWeightBullet: false
      }
    },
    coefficientFormula: '声呐系数*弹药系数*战损系数*攻击力系数',
    defaultPiercingCoefficient: 2,
    antiSubmarineCoefficient: 10
  }, {
    title: '昼战炮击（航母类）',
    baseATKParamsList: [{
        title: '火力'
      },
      {
        title: '轰炸'
      },
      {
        title: '鱼雷'
      },
      {
        title: '敌人总对空'
      }
    ],
    baseATKFormula: {
      title: '(火力+轰炸*2+鱼雷)*取最高值(0,1-敌人总对空*随机系数α（范围0,1）/150) + 35',
      formula: dataContainer => {
        let result = ''

        if (dataContainer['ATKParam0'] && (dataContainer['ATKParam1'] || dataContainer['ATKParam1'] === 0) && (dataContainer['ATKParam2'] || dataContainer['ATKParam2'] === 0) && dataContainer['ATKParam3']) {
          const bottom = (dataContainer['ATKParam0'] + dataContainer['ATKParam1'] * 2 + dataContainer['ATKParam2']) * Math.max(0, 1 - dataContainer['ATKParam3'] * 1 / 150) + 35
          const top = (dataContainer['ATKParam0'] + dataContainer['ATKParam1'] * 2 + dataContainer['ATKParam2']) * Math.max(0, 1 - dataContainer['ATKParam3'] * 0 / 150) + 35
          result = `${Math.ceil(bottom.getFixed())}~${Math.ceil(top.getFixed())}`
        }

        return result
      }
    },
    coefficientObject: {
      coefficientList: [0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
      floatOptions: {
        floatArea: [0.89, 1.22],
        overWeightBullet: false
      }
    },
    coefficientFormula: '制空系数*弹药系数*攻击力系数',
    defaultPiercingCoefficient: 1
  },
  {
    title: '昼战炮击（导弹舰）',
    baseATKParamsList: [{
      title: '火力'
    }, {
      title: '导弹火力'
    }, {
      title: '发射架火力'
    }],
    baseATKFormula: {
      title: '导弹火力 + 发射架火力 + 5',
      formula: dataContainer => {
        let result = ''

        if (dataContainer['ATKParam0'] && dataContainer['ATKParam1'] && dataContainer['ATKParam2'])
          result = dataContainer['ATKParam0'] + dataContainer['ATKParam1'] + dataContainer['ATKParam2'] + 5

        return Math.ceil(result)
      }
    },
    coefficientObject: {
      coefficientList: [1, 1, 0, 0, 1, 0, 1, 1, 1, 1],
      formationValues: [1, 0.8, 0.75, 1, 0.8],
      directionValues: [1.15, 1, 0.8, 0.65],
      floatOptions: {
        floatArea: [0.89, 1.22],
        overWeightBullet: true
      }
    },
    coefficientFormula: '阵型系数*航向系数*弹药系数*战损系数*攻击力系数',
    defaultPiercingCoefficient: 0.6
  },
  {
    title: '昼战炮击（其他类）',
    baseATKParamsList: [{
      title: '火力'
    }],
    baseATKFormula: {
      title: '火力 + 5',
      formula: dataContainer => {
        let result = ''

        if (dataContainer['ATKParam0'])
          result = dataContainer['ATKParam0'] + 5

        return Math.ceil(result)
      }
    },
    coefficientObject: {
      coefficientList: [1, 1, 0, 0, 1, 0, 1, 1, 1, 1],
      formationValues: [1, 0.8, 0.75, 1, 0.8],
      directionValues: [1.15, 1, 0.8, 0.65],
      floatOptions: {
        floatArea: [0.89, 1.22],
        overWeightBullet: true
      }
    },
    coefficientFormula: '阵型系数*航向系数*弹药系数*战损系数*攻击力系数',
    defaultPiercingCoefficient: 0.6
  },
  {
    title: '昼战雷击',
    baseATKParamsList: [{
      title: '鱼雷'
    }],
    baseATKFormula: {
      title: '鱼雷 + 5',
      formula: dataContainer => {
        let result = ''

        if (dataContainer['ATKParam0'])
          result = dataContainer['ATKParam0'] + 5

        return result
      }
    },
    coefficientObject: {
      coefficientList: [1, 1, 0, 0, 1, 0, 1, 1, 1, 1],
      formationValues: [1, 0.9, 0.8, 1, 0.8],
      directionValues: [1.15, 1, 0.8, 0.65],
      floatOptions: {
        floatArea: [0.89, 1.22],
        overWeightBullet: false
      }
    },
    coefficientFormula: '阵型系数*航向系数*弹药系数*战损系数*攻击力系数',
    defaultPiercingCoefficient: 1
  },
  {
    title: '夜战雷击',
    baseATKParamsList: [{
      title: '鱼雷'
    }],
    baseATKFormula: {
      title: '鱼雷 + 10',
      formula: dataContainer => {
        let result = ''

        if (dataContainer['ATKParam0'])
          result = dataContainer['ATKParam0'] + 10

        return Math.ceil(result)
      }
    },
    coefficientObject: {
      coefficientList: [1, 0, 0, 0, 1, 0, 1, 1, 1, 1],
      formationValues: [1.1, 0.9, 1, 1, 1],
      floatOptions: {
        floatArea: [2.4, 3],
        overWeightBullet: false
      }
    },
    coefficientFormula: '阵型系数*弹药系数*战损系数*攻击力系数',
    defaultPiercingCoefficient: 1
  },
  {
    title: '夜战炮雷合击',
    baseATKParamsList: [{
      title: '火力'
    }, {
      title: '鱼雷'
    }],
    baseATKFormula: {
      title: '火力 + 鱼雷 + 10',
      formula: dataContainer => {
        let result = ''

        if (dataContainer['ATKParam0'] && dataContainer['ATKParam1'])
          result = dataContainer['ATKParam0'] + dataContainer['ATKParam1'] + 10

        return Math.ceil(result)
      }
    },
    coefficientObject: {
      coefficientList: [1, 0, 0, 0, 1, 0, 1, 1, 1, 1],
      formationValues: [1.1, 0.9, 1, 1, 1],
      floatOptions: {
        floatArea: [1.2, 1.8],
        overWeightBullet: false
      }
    },
    coefficientFormula: '阵型系数*弹药系数*战损系数*攻击力系数',
    defaultPiercingCoefficient: 1
  },
  {
    title: '夜战炮击（巡洋舰）',
    baseATKParamsList: [{
      title: '火力'
    }],
    baseATKFormula: {
      title: '火力 + 10',
      formula: dataContainer => {
        let result = ''

        if (dataContainer['ATKParam0'])
          result = dataContainer['ATKParam0'] + 10

        return Math.ceil(result)
      }
    },
    coefficientObject: {
      coefficientList: [1, 0, 0, 0, 1, 0, 1, 1, 1, 1],
      formationValues: [1.1, 0.9, 1, 1, 1],
      floatOptions: {
        floatArea: [2.4, 3.6],
        overWeightBullet: false
      }
    },
    coefficientFormula: '阵型系数*弹药系数*战损系数*攻击力系数',
    defaultPiercingCoefficient: 0.6
  },
  {
    title: '夜战炮击（其他）',
    baseATKParamsList: [{
      title: '火力'
    }],
    baseATKFormula: {
      title: '火力 + 10',
      formula: dataContainer => {
        let result = ''

        if (dataContainer['ATKParam0'])
          result = dataContainer['ATKParam0'] + 10

        return Math.ceil(result)
      }
    },
    coefficientObject: {
      coefficientList: [1, 0, 0, 0, 1, 0, 1, 1, 1, 1],
      formationValues: [1.1, 0.9, 1, 1, 1],
      floatOptions: {
        floatArea: [1.2, 1.8],
        overWeightBullet: false
      }
    },
    coefficientFormula: '阵型系数*弹药系数*战损系数*攻击力系数',
    defaultPiercingCoefficient: 0.6
  },
  {
    title: '导弹战(开闭幕)',
    baseATKParamsList: [{
      title: '舰船火力'
    }, {
      title: '导弹火力'
    }],
    baseATKFormula: {
      title: '舰船火力+导弹火力*3（独立计算不叠加）',
      formula: dataContainer => {
        let result = ''

        if (dataContainer['ATKParam0'] && dataContainer['ATKParam1'])
          result = dataContainer['ATKParam0'] + dataContainer['ATKParam1'] * 3

        return Math.ceil(result)
      }
    },
    coefficientObject: {
      coefficientList: [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      formationValues: [1, 0.8, 0.75, 1, 0.8],
      floatOptions: {
        floatArea: [0.89, 1.22],
        overWeightBullet: false
      }
    },
    coefficientFormula: '阵型系数*战损系数*敌方装甲减伤系数*攻击力系数',
    defaultPiercingCoefficient: 0.9
  },
  {
    title: '夜间导弹战',
    baseATKParamsList: [{
      title: '舰船火力'
    }, {
      title: '导弹火力'
    }],
    baseATKFormula: {
      title: '舰船火力+导弹火力*3（独立计算不叠加）',
      formula: dataContainer => {
        let result = ''

        if (dataContainer['ATKParam0'] && dataContainer['ATKParam1'])
          result = dataContainer['ATKParam0'] + dataContainer['ATKParam1'] * 3

        return Math.ceil(result)
      }
    },
    coefficientObject: {
      coefficientList: [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      formationValues: [1.1, 0.9, 1, 1, 1],
      floatOptions: {
        floatArea: [1.2, 1.5],
        overWeightBullet: false
      }
    },
    coefficientFormula: '阵型系数*战损系数*攻击力系数',
    defaultPiercingCoefficient: 0.9
  }
]

export default SITUATION_CASES