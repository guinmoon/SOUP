fs = require('fs')
var request = require("request");
var sha1 = require('sha1');
var cookieP = require('cookie');
var sleep = require('system-sleep');

var vk = require("./vkSearchUser");
var vkInf = require("./vkUserInfo");
var ok = require("./okSearchUser");
var okInf = require("./okUserInfo");
var fb = require("./fbSearchUser");
var yp = require("./ypSearchUser");
var log = require('./WriteToLog');
var docx = require('./docxGenerator');
var SQLite = require('./sqliteFunctions');



var currentJob="nothing";

function passport(response,postData,requestHeader) {
  console.log("Request handler 'passport' was called.");
  log.writeToLog("Request handler 'passport' was called.");
  var body = fs.readFileSync('site/login.html', 'utf8');
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function logout(response,postData,requestHeader) {
    cook=requestHeader['cookie'];   
    if(cook==undefined) 
    {
        console.log("Cookies is empty");
        log.writeToLog("Cookies is empty");
        return false;
    }
    var cookies = cookieP.parse(cook);
    //console.log(cookies);
    if(cookies==undefined){
        console.log("Cookies is empty");
        log.writeToLog("Cookies is empty");
        return false;
    }
    if(cookies.ses==undefined)
    {
        console.log("Cookies session not found");
        log.writeToLog("Cookies session not found");
        return false;
    }
    console.log("Request handler 'logout' was called.");
    log.writeToLog("Request handler 'logout' was called.");
    response.writeHead(200, {"Content-Type": "text/html","Set-Cookie":"ses="+cookies.ses+"; Expires=Thu, 01 Jan 1970 00:00:00 GMT"});
    response.write("success");
    response.end();
}

async function checkAuth(response,postData,requestHeader) {
  console.log("Request handler 'checkAuth' was called.");
  log.writeToLog("Request handler 'checkAuth' was called.");
  var pData=JSON.parse(postData.toLowerCase());
  var sha1Pass="";
  if(pData[1]!=undefined)
    sha1Pass=sha1(pData[1]);
  var checkA= false;
  var users =await SQLite.selectQuerySync("SELECT * FROM users");
  for(i=0;i<users.length;i++){
      uname=users[i].u_name.toLowerCase();
      uhash=users[i].u_hash.toLowerCase();
      if(uname==pData[0]&&uhash==sha1Pass){
        var usession=sha1(uname+uhash+requestHeader['user-agent']);
       // console.log("session:"+usession);
        response.writeHead(200, {"Content-Type": "text/html","Set-Cookie":"ses="+usession});
        response.write("success");
        response.end();
        checkA = true;
        return;
      }

  }
  if(!checkA)
  {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("fail");
      response.end();
      return;
  }
}

// function getUserNameByHash(hash,user_agent){
//     var contents = fs.readFileSync('users.txt', 'utf8');
//     var lines=contents.split("\r\n");

//     for(i=0;i<lines.length;i++){
//         var parts=lines[i].split(":");
//         uname=parts[0];
//         uhash=parts[2];
//         ifsession=sha1(uname+uhash+user_agent);
//         if(hash==ifsession)
//         {
//             return uname;
//         }
//     }
// }

function start(response,postData,requestHeader,userNameGlobal) {
    
    console.log("["+userNameGlobal+"] Request handler 'start' was called.");
    var body = fs.readFileSync('site/index.html', 'utf8');
    body=body.replace("[[list.userName]]",userNameGlobal);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}


class Person {
  // Destructure the JSON object into the parameters with defaults
  constructor ({label, value, type,event}) {
    this.label = label
    this.value = value
    this.type = type
    this.event = event
  }
}


// 2 - FaceBook
// 3 - twitter
// 4 - Vk
// 5 - Ok
// 6 - Live Journal
// 7 - Мой Мир
// 8 - LinkedIn
// 9 - Мой Круг
// 10 - Google+
// 17 - FourSquare
// 18 - instagram

function getAllUsersInfo(serialisedData){
    return new Promise(function (resolve, reject) {
        var profiles=[];
        var counter=0;
        for(i=0;i<serialisedData.length;i++){
            if(serialisedData[i].socialNetwork=="site/imgs/vk_ico.png")
            {
                vkInf.GetUserInfo(serialisedData[i].lnk).then(function (value3) {
                    profiles.push(value3);
                    //console.log(value3);
                    counter++;
                    if(counter==serialisedData.length)
                      resolve(profiles);
                });
            }
            else if(serialisedData[i].socialNetwork=="site/imgs/ok_ico.png")
            {
                okInf.GetUserInfo(serialisedData[i].lnk).then(function (value4) {
                    profiles.push(value4);
                    //console.log(value3);
                    counter++;
                    if(counter==serialisedData.length)
                      resolve(profiles);
                });
            }
            else{
              counter++;
            }
            console.log("[exported] " +serialisedData[i].lnk);
            sleep(500);

        }
        //console.log(ressss);    
        
    });
}

function exportToWord(response,postData) {
    console.log("Request handler 'exportToWord' was called.");
    var serialisedData=JSON.parse(postData);
    getAllUsersInfo(serialisedData).then(function (value1) {
        //console.log(value3);
        docx.generateDocxFile(value1).then(function (value3){;
          console.log("report generate was succesfull");
          //var ressss=JSON.stringify(value3);
          response.writeHead(200, {"Content-Type": "application/octet-stream"});
          response.write("success");
          response.end();
        });
       // response.end(); 
    });
}


async function createNewList(response,postData,header,Uname,UserId) {
    console.log("Request handler 'createNewList' was called.");
    var serialisedData=JSON.parse(postData);
   // console.log(serialisedData);
    await SQLite.createNewList(serialisedData,UserId);
    
}

async function getListById(response,postData,header,Uname,UserId) {
  console.log("Request handler 'getListById' was called.");
  var list="empty";
  var list_id =postData;
  list = await SQLite.getListById(list_id,UserId);
  //console.log(list);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(JSON.stringify(list));
  response.end(); 
}

async function getLists(response,postData,header,Uname,UserId) {
  console.log("["+Uname+"] Request handler 'getLists' was called.");
  var lists="empty";
  lists = await SQLite.getLists(UserId);
  //console.log(lists);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(JSON.stringify(lists));
  response.end();  
}

async function addToList(response,postData,header,Uname,UserId) {
    console.log("Request handler 'addToList' was called.");
    var list="empty";
    var serialisedData=JSON.parse(postData);
    var list_id =serialisedData.list_id;
    await  SQLite.addToList(list_id,UserId,serialisedData.personss);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("success");
    response.end(); 
}


function getPersonFromUrl(url){
  
  var personss=[];
  return new Promise(function (resolve, reject) {
    if(url.indexOf("vk.com")!=-1){

          vkInf.GetUserInfo(url).then(function (userInfo) {
            //console.log(userInfo);
              var description=[];
              description.push({"class":"uncolored","prop":"","value":userInfo.profileName});
              for(i=1;i<userInfo.infos.length;i++){
                description.push({"class":"uncolored","prop":userInfo.infos[i].InfoTitle+":","value":userInfo.infos[i].InfoData});
              }
              //console.log(personss);
              personss.push({"lnk":userInfo.profileURL,"photo":userInfo.smallAva,"description":description,"socialNetwork":"site/imgs/vk_ico.png"});
              resolve(personss);
          }).catch(function(){reject([])});

    }
  });
}

async function addToListExt(response,postData,header,Uname,UserId) {
    console.log("Request handler 'addToListExt' was called.");
    var list="empty";
    
    var serialisedData=JSON.parse(postData);
    var list_id =serialisedData.list_id;
    var urlReq =serialisedData.lnk;
    var personss=[];
    getPersonFromUrl(urlReq).then(function(pers){
        personss=pers;
        console.log(personss);
        SQLite.addToList(list_id,UserId,personss).then(function(){;
          response.writeHead(200, {"Content-Type": "text/plain"});
          if(personss!=undefined&&personss.length!=0)
            response.write("success");
          else
            response.write("error");
          response.end(); 
        });
    }).catch(function(){response.write("error"); response.end(); });
    
}



function getCities(response,postData) {
  console.log("Request handler 'getCities' was called.");
  var Cities="empty";
  
  var serialisedData=JSON.parse(postData);
 // console.log(serialisedData);
   vk.GetVkCities(serialisedData[0],serialisedData[1].id).then(function (value3) {
    Cities=value3;
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(Cities);
    response.end(); 
  });
}

function getCountries(response,postData) {
  console.log("Request handler 'getCounties' was called.");
  var Countries="empty";
   vk.GetVkCountries().then(function (value3) {
    Countries=value3;
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(Countries);
    response.end(); 
  })
  
}



function stillWaitingForSearch(response,postData) {
  console.log("Request handler 'stillWaitingForSearch' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(currentJob);
    response.end();
}

function searchPeople(response,postData,header,UserNameGlobal) {
  console.log("["+UserNameGlobal+"] Request handler 'searchPeople' was called.");
  log.writeToLog("["+UserNameGlobal+"] Request handler 'SearchPeoples' was called.");
  //console.log(postData);
  var pers = JSON.parse(postData, function (k,v) {
    if (Array.isArray(this) && v.name) {
      return new Person(v)
    }
    return v
  })
  var socialNetwork = pers[0].label;
  var countryFromPost = pers[1];
  var cityFromPost = pers[2];
 // console.log(countryFromPost.title);
 // console.log(cityFromPost.title);
  pers.shift();
  pers.shift();
  pers.shift();
  var resultValue=[];
  var socId="2";
  var neededFunction=vk.SearchPeoples;
  log.writeToLog("Search for "+postData);

  if(socialNetwork=="vkCheckBox"){
    neededFunction=vk.SearchPeoples;
  }
  if(socialNetwork=="okCheckBox"){
    neededFunction=ok.SearchPeoples;
  }
  if(socialNetwork=="fbCheckBox"){
    neededFunction=yp.SearchPeoples;
    //neededFunction=fb.SearchPeoples;
    socId="2";
  }
  if(socialNetwork=="twCheckBox"){
    neededFunction=yp.SearchPeoples;
    socId="3";
  }
  if(socialNetwork=="ljCheckBox"){
    neededFunction=yp.SearchPeoples;
    socId="6";
  }
  if(socialNetwork=="mmCheckBox"){
    neededFunction=yp.SearchPeoples;
    socId="7";
  }
  if(socialNetwork=="liCheckBox"){
    neededFunction=yp.SearchPeoples;
    socId="8";
  }
  if(socialNetwork=="mkCheckBox"){
    neededFunction=yp.SearchPeoples;
    socId="9";
  }
  if(socialNetwork=="gpCheckBox"){
    neededFunction=yp.SearchPeoples;
    socId="10";
  }
  if(socialNetwork=="fqCheckBox"){
    neededFunction=yp.SearchPeoples;
    socId="17";
  }
  if(socialNetwork=="inCheckBox"){
    neededFunction=yp.SearchPeoples;
    socId="18";
  }

  neededFunction(pers,socId,countryFromPost,cityFromPost)
  .then(function (value3) {
    resultValue = resultValue.concat(value3); 
      console.log(socialNetwork+" search done.");
      //console.log("PeoplesReturned");
      var returnValue =JSON.stringify(resultValue);
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(returnValue);
      response.end();       
  })       
       

  // searchInAllSocial(pers)
  // .then(function (resultValue) {
  //      var returnValue =JSON.stringify(resultValue);
  //      console.log("PeoplesReturned");
  //      response.write(returnValue);
  //      response.end();
  // })
    
}

function loadFile(response,pathName,header,UserNameGlobal) {
    console.log("["+UserNameGlobal+"] Request handler 'loadFile' was called. "+pathName);
    if(pathName.charAt(0) === '/')
      pathName = pathName.substr(1);
    var css = fs.readFileSync(pathName, 'utf8');
    if(pathName.indexOf(".css")!=-1)
      response.writeHead(200, {"Content-Type": "text/css"});
    if(pathName.indexOf(".png")!=-1||pathName.indexOf(".woff")!=-1
    ||pathName.indexOf(".woff2")!=-1||pathName.indexOf(".ttf")!=-1){
      response.writeHead(200, {"Content-Type": "image/png"});
      var s = fs.createReadStream(pathName);
      s.on('open', function () {
          s.pipe(response);
      });
    }
    else if(pathName.indexOf(".docx")!=-1){
        response.writeHead(200, {"Content-Type": "application/zip"});
        var s = fs.createReadStream(pathName);
        s.on('open', function () {
          s.pipe(response);
        });
    }
    else{
      response.write(css);
      response.end();
    }
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
//exports.upload = upload;
exports.loadFile = loadFile;
exports.searchPeople = searchPeople;
exports.stillWaitingForSearch = stillWaitingForSearch;
exports.getCountries = getCountries;
exports.getCities = getCities;
exports.passport = passport;
exports.checkAuth = checkAuth;
exports.logout = logout;
exports.exportToWord = exportToWord;
exports.getLists = getLists;
exports.createNewList = createNewList;
exports.getListById = getListById;
exports.addToList = addToList;
exports.addToListExt = addToListExt;