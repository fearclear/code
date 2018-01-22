const express = require('express')
const router = express.Router()
const fc = require('./fc')

/* GET api listing. */
router.get('/', function(req, res, next) {
  res.send('404')
})

router.all('/sign:res?', fc.sign)

module.exports = router
