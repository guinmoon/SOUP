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

async function selectQuerySync(query){
    var finished=false;
    var result="";
    result = await selectQueryAsync(query);
    //console.log(result);
    //while(finished==false){sleep(100);}
    return result;
}


async function getLists(UserId){

    var result = await selectQuerySync("SELECT * FROM lists where user_id="+UserId);
    //console.log(result);
    return result;
}
//selectQuerySync("SELECT * FROM users");

exports.selectQuerySync = selectQuerySync;
exports.selectQueryAsync = selectQueryAsync;
exports.getLists = getLists;
 

