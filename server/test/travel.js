const fs = require('fs')
const path = require('path')

function travel(dir, callback) {
  // eslint-disable-next-line
  callback = callback || new Function()
  fs.readdir(dir, function(err, data) {
    if(err) {
      throw err
    }
    data.forEach(file => {
      var pathname = path.join(dir, file)
      if(fs.statSync(pathname).isDirectory()) {
        travel(pathname, callback)
      }else {
        callback(pathname)
      }
    })
  })
}

travel('../public', pathname => console.log(pathname))
