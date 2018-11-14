const _  = require('lodash')

function cloneDeep(target) {
  const parents = []
  function _clone(target) {
    const type = Object.prototype.toString.call(target)
    // circuler
    parents.push(target)
    // 基本数据类型和函数类型返回其本身
    if(typeof target !== 'object') {
      return target
    }
    // 正则和时间表达式和Primise返回其本身
    if(type === '[object Date]' || type === '[object RegExp]' || type === '[object Promise]') {
      return target
    }
    // set和map
    if(type === '[object Set]') {
      let set = new Set()
      for(let i of target) {
        set.add(i)
      }
      return set
    }
    if(type === '[object Map]') {
      let map = new Map()
      for(let [key, value] of target) {
        map.set(key, value)
      }
      return map
    }
    var temp = type === '[object Array]' ? [] : {}
    for(let i in target) {
      if(target.hasOwnProperty(i)) {
        if(typeof target[i] === 'object') {
          if(parents.indexOf(target[i])<0) {
            temp[i] = _clone(target[i])
          }else {
            temp[i] = target[i]
          }
        }else {
          temp[i] = target[i]
        }
      }
    }
    return temp
  }
  return _clone(target)
}



const test = {
  a: 1,
  b: {
    b1: 1,
    b2: 2
  },
  c: [1, 2, {
    c1: 1,
    c2: 2
  }],
  d: /a/,
  e: new Date(),
  f: function() {},
  s: new Set(),
  m: new Map()
}

test.b.b3 = test.c
test.c[2].c3 = test.b
test.s.add(1)
test.s.add(2)
test.m.set('a', 1)
test.m.set('b', 1)

let result = cloneDeep(test)

test.s.add(3)
test.m.set('c', 1)

console.log(test)
console.log(result)

// console.log(_.cloneDeep(test))