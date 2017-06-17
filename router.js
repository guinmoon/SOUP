
var cookieP = require('cookie');
var sha1 = require('sha1');
var SQLite = require('./sqliteFunctions');
var sleep = require('system-sleep');

async function getUserNameByHash(hash,user_agent){
    var U_name="";
    var u_id="";
    var users =await SQLite.selectQuerySync("SELECT * FROM users");
    for(i=0;i<users.length;i++){
        uname=users[i].u_name.toLowerCase();
        Uname=users[i].u_name.toString();
        u_id= users[i].id;
        uhash=users[i].u_hash.toLowerCase();
        ifsession=sha1(uname+uhash+user_agent);
        if(hash==ifsession)
        {
            //console.log(ifsession+" "+hash);
          //  console.log(Uname);
            return {id:u_id,name:Uname.toString()};
        }
    }
    return "NF";     
}

function checkCookieSession(){

}

var UserNameGlobal="";
var UserIdGlobal="";

async function checkAuth(requestHeader){
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
    var uname=await getUserNameByHash(cookies.ses,requestHeader['user-agent']);
    //console.log(uname);
    if(uname=="NF"||uname==undefined)
    {
        console.log("Cookies session invalid");
        return false;
    }
    UserNameGlobal=uname.name;
    UserIdGlobal=uname.id;
    return true;
}

var allowedUnauthFilesLoad = ["/site/css/passport.css","/site/js/passportController.js","/site/imgs/logo.png"];
var allowedExtensions = [".css",".js","ttf",".woff",".woff2",".png",".gif",".jpg",".docx"];

async function route(handle, pathname, response, postData,header) {
  if (fs.existsSync("."+pathname)&&pathname!="/") {
      var check=false;
      for(k=0;k<allowedExtensions.length;k++){
            if(pathname.indexOf(allowedExtensions[k])!=-1)
            {
                check=true;
                break;
            }
      }
      if(!check){
        console.log("Unnalowed request! " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
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
            if(await checkAuth(header)||pathname=="/checkAuth")
                handle[pathname](response, postData,header,UserNameGlobal,UserIdGlobal);
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