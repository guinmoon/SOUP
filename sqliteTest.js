var sqlite3 = require('sqlite3').verbose();  
var file = "soupBase.db";  
var db = new sqlite3.Database(file);  
db.all("SELECT * FROM users", function(err, rows) {  
        rows.forEach(function (row) {  
            console.log(row.u_name);  
        })  
    });   
db.close();  