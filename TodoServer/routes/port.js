var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(req.connection.remoteAddress)
    res.send({a:req.connection.remoteAddress});
});
router.get('/jsonp', function(req, res, next){
    console.log(req.connection.remoteAddress)
    var callback = 'var ip = "'+req.connection.remoteAddress+'";'
    res.send(callback);
})

module.exports = router;
