// 判断是否是数组
function isArray(target) {
  return Object.prototype.toString.call(target) === '[object Array]'
}

// 深度克隆函数
function deepClone(target) {
  // 处理circular对象
  const parents = []
  function _clone(target) {
    parents.push(target)
    // 如果是基础数据类型或者是函数类型则返回本身
    if (typeof target !== 'object' && typeof target !== 'function') {
      return target
    }
    // 如果是正则或时间格式也返回其本身
    if (Object.prototype.toString.call(target) === '[object Date]' || Object.prototype.toString.call(target) === '[object RegExp]') {
      return target
    }
    // 如果是数组则遍历数组，是对象则遍历对象
    let tmp = isArray(target) ? [] : {}
    for (const i in target) {
      if (target.hasOwnProperty(i)) {
        if(typeof target[i] === 'object' && parents.indexOf(target)<0) {
          // 如果是仍然是对象则递归
          tmp[i] = _clone(target[i])
        }else {
          tmp[i] = target[i]
        }
      }
    }
    return tmp
  }
  return _clone(target)
}

// 测试用例
const test = {
  a: 1,
  b: {
    a: 1,
    b: 2
  },
  c: [1, 22, {
    a: 1,
    b: 3
  }],
  d: new Date(),
  e: /a/
}

test.b.c = test.b

const result = deepClone(test)

console.log(result)
