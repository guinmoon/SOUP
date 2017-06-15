var fs = require('fs');
var dateTime = require('node-datetime');
function writeToLog(message){
    
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
   // fs.appendFileSync('log.txt',"\n["+formatted+"] "+message);
}

exports.writeToLog = writeToLog;