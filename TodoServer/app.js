var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var busboy = require('connect-busboy');
const util = require('util');
const fs = require('fs');
const index = require('./routes/index');
const editor = require('./routes/editor');
const port = require('./routes/port');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
let accessLogStream= fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
logger.format('joke', '[request] :method :url :status');
app.use(logger('dev'));
// app.use(logger('dev', {stream: accessLogStream}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(busboy());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/angular-test-app/*', function (req, res, next){
  res.sendFile(path.resolve(__dirname, 'public/angular-test-app', 'index.html'));
});
app.use('/', index);
app.use('/editor', editor);
app.use('/port', port);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
