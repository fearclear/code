var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/save', function (req, res, next) {
  res.send('respond with a resource post');
})
router.post('/file', function (req, res, next) {
  var fstream;
  req.pipe(req.busboy);
  req.busboy.on('file', function (fieldname, file, filename) {
    console.log("Uploading: " + filename);
    fstream = fs.createWriteStream(__dirname + '/files/' + filename);
    file.pipe(fstream);
    fstream.on('close', function () {

    });
  });
  req.on('end', function () {
    console.log('end')
    res.send('done')
  })
})

module.exports = router;
