/**
 * @namespace changeState
 * @description 修改state的唯一方法
 * @name mutations
 * @author fearclear
 * @export {  }
 */

import * as types from './mutation-types'
console.log(types)

export default {
  addTodo(state, { text }) {
    state.todos.push({
      text,
      done: false
    })
  },
  clearCompleted(state) {
    state.todos = state.todos.filter(todo => !todo.done)
  }
}
