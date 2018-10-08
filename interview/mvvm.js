
// 数据劫持
const data = {
  name: ''
}

function sayName(v) {
  switch (v) {
    case '1':
      console.log('get 1')
      break
    case '2':
      console.log('hi 2')
      break
    default:
      break
  }
}

let v = '1'

Object.defineProperty(data, 'name', {
  enumerable: true,
  configurable: true,
  get() {
    return v
  },
  set(value) {
    console.log(`我的名字是${value}`)
    v = value
    sayName(v)
  }
})

console.log(data.name)

data.name = '2'

console.log(data.name)