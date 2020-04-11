// 原型链上的拓展方法需要保险，避免因基础类型原型方法拓展引起的冲突

if (!Number.prototype.floor)
  Number.prototype.floor = function() {
    return Math.floor(this)
  }
else console.error('自定义Number.floor方法与原生方法冲突，已失效')

if (!Number.prototype.getFixed)
  Number.prototype.getFixed = function(dot = 3) {
    let temp = Number(this.toFixed(dot))

    if (!temp && dot < 10) return this.getFixed(dot += 1)
    else return temp
  }
else console.error('自定义Number.getFixed方法与原生方法冲突，已失效')

if (!Array.prototype.findAll)
  Array.prototype.findAll = function(condition) {
    let temp = []
    this.map(item => {
      if (condition(item)) temp.push(item)
    })

    return temp.length === 0 ? false : temp
  }
else console.error('自定义Array.findAll方法与原生方法冲突，已失效')

if (!Array.prototype.equals)
  Array.prototype.equals = function(array) {
    return this.sort().toString() === array.sort().toString()
  }
else console.error('自定义Array.equals方法与原生方法冲突，已失效')