// 说明
/*****
 * 网易投票获取数据
 */
const request = require("request")
const Iconv = require("iconv-lite")
const fs = require("fs")
const path = require('path')

const url = "http://active.163.com/service/form/v1/9449/list.jsonp?pageSize=100"
let list = []
let limit = 0
request(
  {
    url,
    encoding: null
  },
  (err, res, body) => {
    const str = Iconv.decode(body, "GBK").toString()
    list = JSON.parse(str.slice(10, str.length - 2)).list
    list.forEach(i => {
      limit++
      request(
        `http://active.163.com/service/vote/v1/1932.jsonp?id=${i.id}`,
        (err, res, data) => {
          if (!err) {
            data = JSON.parse(data.slice(10, data.length - 2))
            i.score = data.value[i.id]
            limit--
            if (limit === 0) {
              list = list.map(i => {
                return {
                  id: i.id,
                  name: i.name,
                  score: i.score + 1000
                }
              })
              list.sort((a, b) => {
                return b.score - a.score
              })
              list.forEach((i, n) => {
                i.id = n+1
              })
              done()
            }
          }
        }
      )
    })
  }
)
function done() {
  fs.writeFile(path.resolve(__dirname, "./result.json"), JSON.stringify(list), err => {
    if (!err) {
      console.log("获取成功！")
    }
  })
}
