// 创建Emitter类
class Emitter {
  constructor() {
    this._events = this._events || new Map()
    this._maxl = this._maxl || 10
  }
}

// 添加事件绑定
Emitter.prototype.addListener = function(type, fn) {
  const handler = this._events.get(type)
  if(!handler) {
    // 设置对应的事件
    this._events.set(type, fn)
  }else if(typeof handler === 'function') {
    // 如果已经绑定一个事件则创建数据添加该事件
    this._events.set(type, [handler, fn])
  }else {
    // 已经是数组的话只需要添加一个函数进去
    handler.push(fn)
  }
}

Emitter.prototype.removeListener = function(type, fn) {
  let handler = this._events.get(type)
  if(!handler) return this
  if(typeof handler === 'function') {
    // 绑定事件是函数则移除
    this._events.delete(type)
  }else {
    for (let i = 0; i < handler.length; i++) {
      if(handler[i] === fn) {
        handler.splice(i, 1)
        // 由于数据变化导致i指向错误，确定不会漏删除相邻的两个相同绑定事件，所以--
        i--
        if(handler.length === 1) {
          handler = handler[0]
        }
      }
    }
  }
}

Emitter.prototype.emit = function(type, ...args) {
  const handler = this._events.get(type)
  if(!handler) {
    // 未绑定事件不能触发
    console.warn(`can not find ${type} in Emitter`)
  }
  if(typeof handler === 'function') {
    if(args.length) {
      // apply适用于多参数调用
      handler.apply(this, args)
    }else {
      // 单参数call效率更高
      handler.call(this)
    }
  }else {
    for(let i = 0; i< handler.length;i++) {
      if(args.length) {
        handler[i].apply(this, args)
      }else {
        handler[i].call(this)
      }
    }
  }
}

const emit = new Emitter()
emit.addListener('hi', a => {
  console.log(`hi ${a}`)
})

emit.addListener('hi', a => {
  console.log('hi hi hi')
})

emit.addListener('hello', fn)

function fn() {
  console.log('hello')
}

emit.emit('hi', 'gooo')
emit.emit('hello')

console.log(emit)

emit.removeListener('hello')

console.log(emit)