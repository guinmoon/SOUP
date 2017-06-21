var sqlite3 = require('sqlite3').verbose();  
var sleep = require('system-sleep');
var file = "soupBase.db";  

function selectQueryAsync(query){
    return new Promise(function (resolve, reject) {
        
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

async function createNewList(data,user_id){

  //  return new Promise(function (resolve, reject) { 
        var db = new sqlite3.Database(file);  
        await db.run("INSERT into lists(list_name,user_id) VALUES ('"+data.listName+"',"+user_id+")",function(){
            db.all("SELECT max(id) as id FROM lists where user_id="+user_id, function(err, rows) { 
               //console.log(rows[0].id);
               var newListId = rows[0].id;
                var stmt = db.prepare("INSERT INTO listsData(list_id,profileURL,imgUrl,profileDescr) VALUES (?,?,?,?)");
                for (var i = 0; i < data.personss.length; i++) {
                    console.log(newListId+" "+data.personss[i].lnk+" "+data.personss[i].photo+" "+"");
                    stmt.run(newListId,data.personss[i].lnk,data.personss[i].photo,"descr");
                }
                stmt.finalize();
                db.close(); 
                console.log("insert done");
            });
           
           
        });
        
  //  });
}
//selectQuerySync("SELECT * FROM users");

exports.selectQuerySync = selectQuerySync;
exports.selectQueryAsync = selectQueryAsync;
exports.getLists = getLists;
exports.createNewList = createNewList;
 

