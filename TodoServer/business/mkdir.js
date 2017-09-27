const schedule = require('node-schedule');
const moment = require('moment');
var fs = require('fs');

function scheduleCronstyle(){
  schedule.scheduleJob('15 0 0 * * *', function(){
    console.log('scheduleCronstyle:' + moment().format('YYYY-MM-DD'));
    fs.mkdir('../routes/'+moment().format('YYYY-MM-DD'));
  });
}

scheduleCronstyle();