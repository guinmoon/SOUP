var sqlite3 = require('sqlite3').verbose();  
var sleep = require('system-sleep');


function selectQueryAsync(query){
    return new Promise(function (resolve, reject) {
        var file = "soupBase.db";  
        var db = new sqlite3.Database(file);  
        db.all(query, function(err, rows) { 
            resolve(rows); 
        });   
        db.close(); 
    });
}

function selectQuerySync(query){
    var finished=false;
    var result="";
    selectQueryAsync(query).then(function (value1) {
        result=value1;   
        finished = true; 
    });
    while(finished==false){sleep(100);}
    return result;
}

//selectQuerySync("SELECT * FROM users");

exports.selectQuerySync = selectQuerySync;
exports.selectQueryAsync = selectQueryAsync;
 

