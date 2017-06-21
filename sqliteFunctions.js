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
        var db = new sqlite3.Database(file);  
        await db.run("INSERT into lists(list_name,user_id) VALUES ('"+data.listName+"',"+user_id+")",function(){
            db.all("SELECT max(id) as id FROM lists where user_id="+user_id, function(err, rows) { 
               //console.log(rows[0].id);
                var newListId = rows[0].id;
                var stmt = db.prepare("INSERT INTO listsData(list_id,profileURL,imgUrl,profileDescr,socialNetwork) VALUES (?,?,?,?,?)");
                
                for (var i = 0; i < data.personss.length; i++) {
                    //console.log(newListId+" "+data.personss[i].lnk+" "+data.personss[i].photo+" "+"");
                    //console.log(data.personss[i].description);
                    var descr="";
                    for(k=0;k<data.personss[i].description.length;k++){
                        descr+="[descr]"+"[prop]"+data.personss[i].description[k].prop+"[value]"+data.personss[i].description[k].value;
                    }
                    stmt.run(newListId,data.personss[i].lnk,data.personss[i].photo,descr,data.personss[i].socialNetwork);
                }
                stmt.finalize();
                db.close(); 
            });
        });
}

async function addToList(list_id,user_id,personss){
        var db = new sqlite3.Database(file);  
        //console.log("addCaled");
    try{
        await db.all("SELECT id FROM lists where id="+list_id+" and user_id="+user_id, function(err, rowsTmp) { 
                if(rowsTmp==undefined||rowsTmp.length==0){
                    db.close(); 
                    resolve("");
                }
                else{ 
                    var stmt = db.prepare("INSERT INTO listsData(list_id,profileURL,imgUrl,profileDescr,socialNetwork) VALUES (?,?,?,?,?)");
                    
                    for (var i = 0; i < personss.length; i++) {
                        var descr="";
                        for(k=0;k<personss[i].description.length;k++){
                            descr+="[descr]"+"[prop]"+personss[i].description[k].prop+"[value]"+personss[i].description[k].value;
                        }
                        //console.log(descr);
                        try{
                            stmt.run(list_id,personss[i].lnk,personss[i].photo,descr,personss[i].socialNetwork);
                        }
                        catch(errr){console.log(err.message)}
                    }
                    stmt.finalize();
                    db.close(); 
                }
        });
    }
    catch(err){console.log(err.message)}
}

async function getListById(list_id,user_id){
        var db = new sqlite3.Database(file);  
        return new Promise(function (resolve, reject) {
            db.all("SELECT id FROM lists where id="+list_id+" and user_id="+user_id, function(err, rowsTmp) { 
                if(rowsTmp==undefined||rowsTmp.length==0){
                    db.close(); 
                    resolve("");
                }
                else{
                    db.all("SELECT profileURL,imgUrl,profileDescr,socialNetwork FROM listsData where list_id="+list_id, function(err, rows) { 
                        db.close(); 
                        //console.log(rows);
                        resolve(rows);
                    });
                }
            });
        });
}

//selectQuerySync("SELECT * FROM users");

exports.selectQuerySync = selectQuerySync;
exports.selectQueryAsync = selectQueryAsync;
exports.getLists = getLists;
exports.createNewList = createNewList;
exports.getListById = getListById;
exports.addToList = addToList;
 

