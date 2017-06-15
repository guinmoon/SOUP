
var cookieP = require('cookie');
var sha1 = require('sha1');
var SQLite = require('./sqliteFunctions');
var sleep = require('system-sleep');

function getUserNameByHash(hash,user_agent){
    var U_name="";
    var users =SQLite.selectQuerySync("SELECT * FROM users");
    for(i=0;i<users.length;i++){
        uname=users[i].u_name.toLowerCase();
        Uname=users[i].u_name;
        uhash=users[i].u_hash.toLowerCase();
        ifsession=sha1(uname+uhash+user_agent);
        if(hash==ifsession)
        {
            console.log(ifsession+" "+hash);
            return Uname;
        }
    }
    return "NF";  
    // var contents = fs.readFileSync('users.txt', 'utf8');
    // var lines=contents.split("\r\n");

    // for(i=0;i<lines.length;i++){
    //     var parts=lines[i].split(":");
    //     uname=parts[0].toLowerCase();
    //     Uname=parts[0];
    //     uhash=parts[2].toLowerCase();
    //     ifsession=sha1(uname+uhash+user_agent);
    //     if(hash==ifsession)
    //     {
    //         return Uname;
    //     }
    // }
    
}

function checkCookieSession(){

}

var UserNameGlobal="";

function checkAuth(requestHeader){
    cook=requestHeader['cookie'];   
    if(cook==undefined) 
    {
        console.log("Cookies is empty");
        return false;
    }
    var cookies = cookieP.parse(cook);
    //console.log(cookies);
    if(cookies==undefined){
        console.log("Cookies is empty");
        return false;
    }
    if(cookies.ses==undefined)
    {
        console.log("Cookies session not found");
        return false;
    }
    var uname=getUserNameByHash(cookies.ses,requestHeader['user-agent']);
    console.log(uname);
    if(uname=="NF"||uname==undefined)
    {
        console.log("Cookies session invalid");
        return false;
    }
    UserNameGlobal=uname;
    return true;
}

var allowedUnauthFilesLoad = ["/site/css/passport.css","/site/js/passportController.js","/site/imgs/logo.png"];
var allowedExtensions = [".css",".js","ttf",".woff",".woff2",".png",".gif",".jpg",".docx"];

function route(handle, pathname, response, postData,header) {
  //console.log("About to route a request for " + pathname);
  if /*(pathname=="/site/css/main.css"){*/(fs.existsSync("."+pathname)&&pathname!="/") {
     //console.log("File Exist! " + pathname);
      //   console.log("Try Load! " + pathname);
      var check=false;
      for(k=0;k<allowedExtensions.length;k++){
            if(pathname.indexOf(allowedExtensions[k])!=-1)
            {
                check=true;
                break;
            }
      }
      if(!check){
        return;
      }
      //if(checkAuth(header))
         handle["loadFile"](response, pathname,header,UserNameGlobal);
    //   else{
    //      var check=false;
    //      for(i=0;i<allowedUnauthFilesLoad.length;i++)
    //         if(allowedUnauthFilesLoad[i]==pathname){
    //             check=true;
    //             break;
    //         }
    //      if(!check)
    //         handle["passport"](response, postData,header);
    //      else
    //         handle["loadFile"](response, pathname);
    //   }
  } else{
        //console.log("Else! " + pathname+" Post:"+postData);
        if (typeof handle[pathname] === 'function') {
            if(checkAuth(header)||pathname=="/checkAuth")
                handle[pathname](response, postData,header,UserNameGlobal);
            else
                handle["passport"](response, postData,header); 
            
        } else {
            console.log("No request handler found for " + pathname);
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write("404 Not found");
            response.end();
        }
  }
}

exports.route = route;