const fs = require('fs')
const path = require('path')
const iconv = require('iconv-lite')

function readText(pathname) {
  let bin = fs.readFileSync(pathname)
  if(bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
    bin = bin.slice(3)
  }
  return bin.toString('utf-8')
}

function readGBKText(pathname) {
  let bin = fs.readFileSync(pathname)
  return iconv.decode(bin, 'gbk')
}

fs.readFile('./UTF-8-bom.txt', (err, data) => {
  console.log(data.toString(), '不去BOM')
})

console.log(readText('./UTF-8-bom.txt'), '去BOM')
console.log(readGBKText('./GBKText.txt'), 'gbk')
process.exit(0)
