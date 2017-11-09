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
var log4js = require('log4js');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(busboy());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/editor', editor);


//log文件
// log4js.configure({
//   appenders: {
//     out: {type: 'console'},
//     task: {type: 'dateFile', filename: '../logs/task/', "pattern": "yyyy-MM-dd.log",maxLogSize: 121, backups: 3, alwaysIncludePattern: true},
//     result: {type: 'dateFile', filename: '../logs/result/', "pattern": "yyyy-MM-dd.log",maxLogSize: 121, backups: 3, alwaysIncludePattern: true},
//     error: {type: 'dateFile', filename: '../logs/error/', "pattern": "yyyy-MM-dd.log",maxLogSize: 121, backups: 3, alwaysIncludePattern: true},
//     default: {type: 'dateFile', filename: '../logs/default/', "pattern": "yyyy-MM-dd.log",maxLogSize: 121, backups: 3, alwaysIncludePattern: true},
//     rate: {type: 'dateFile', filename: '../logs/rate/', "pattern": "yyyy-MM-dd.log",maxLogSize: 121, backups: 3, alwaysIncludePattern: true}
//   },
//   categories: {
//     default: {appenders: ['out', 'default'], level: 'info'},
//     task: {appenders: ['task'], level: 'info'},
//     result: {appenders: ['result'], level: 'info'},
//     error: {appenders: ['error'], level: 'error'},
//     rate: {appenders: ['rate'], level: 'info'}
//   },
//   replaceConsole: true,
// });
// app.use(log4js.connectLogger(logger, {level:log4js.levels.INFO}));

// catch 404 and forward to error handler
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
