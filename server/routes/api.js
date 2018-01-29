const express = require('express')
const router = express.Router()
const fc = require('./fc')

/* GET api listing. */
router.get('/', function(req, res, next) {
  res.send('404')
})

router.use('/user', fc.user)

module.exports = router
