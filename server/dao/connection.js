const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://localhost:27017/blog', {
  useMongoClient: true
})
db.then(function() {
  console.info('we\'re connected')
})
db.on('error', console.error.bind(console, 'connection error'))
module.export = db
