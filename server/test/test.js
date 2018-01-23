const _ = require('lodash')
let data = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}
let doc = _.clone(data)
delete doc.d
console.log(doc)
