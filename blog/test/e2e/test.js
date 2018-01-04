/* eslint-disable */
let fs = require('fs')
if (fs.existsSync('./result.json')) {
  fs.unlinkSync('./result.json')
}
/* const length = 10
const single = 0.5
const count = 72
let probability = 0,
  probabilityDay = 0,
  probabilityYear = 0
const list = []
for (let i = 1; i <= length; i++) {
  probability = Math.pow(single, i)
  for (let index = 0; index < count; index++) {

  }
  list.push({
    '单次': probability,
    '每日': count * probability,
    '每年': 365 * probability
  })
}
console.log(JSON.stringify(list)); */
// fs.appendFileSync('./result.json', JSON.stringify(list))
function queue(num, size) {
  var arr = Array.from(new Array(num).keys());
  if (size > arr.length) { return; }
  var allResult = [];

  (function (arr, size, result) {
    if (result.length == size) {
      allResult.push(result);
    } else {
      for (var i = 0, len = arr.length; i < len; i++) {
        var newArr = [].concat(arr),
          curItem = newArr.splice(i, 1);
        arguments.callee(newArr, size, [].concat(result, curItem));
      }
    }
  })(arr, size, []);

  return allResult.length;
}


function choose(num, size) {
  var arr = Array.from(new Array(num).keys());
  var allResult = [];

  (function (arr, size, result) {
    var arrLen = arr.length;
    if (size > arrLen) {
      return;
    }
    if (size == arrLen) {
      allResult.push([].concat(result, arr))
    } else {
      for (var i = 0; i < arrLen; i++) {
        var newResult = [].concat(result);
        newResult.push(arr[i]);

        if (size == 1) {
          allResult.push(newResult);
        } else {
          var newArr = [].concat(arr);
          newArr.splice(0, i + 　1);
          arguments.callee(newArr, size - 1, newResult);
        }
      }
    }
  })(arr, size, []);

  return allResult.length;
}


console.log(choose(4, 1)*72);