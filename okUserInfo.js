var http = require('http');
var request = require("request");
var cheerio = require('cheerio');
var usefull = require("./usefull");
var fs = require('fs');



function GetUserInfo(inputData) {
        return new Promise(function (resolve, reject) {
            inputData = inputData.toString();
            okLnk = inputData.substring(0,inputData.indexOf("?"));
            var searchQuery = okLnk+"/about";
            console.log(searchQuery);
            request({
                //uri: "http://vk.com",
                uri: searchQuery,
                method: "GET",
                headers: {'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Encoding": 'utf-8',"Cookie":"AUTHCODE=KYn4ksJlGxXIslo9BTiSyxEd60X0ih2qNWSwDcF9z4J_91fOPFCrY-gM3GzueItymZtVKBpYbqVqQgMrlnvRzkc3sN7kmq2EpAfvBK73IA4_2; JSESSIONID=8c3da6f6f242e72b4c651e9a1d374c9ac6f695f98e89d33.56498573;"}
            }, function(error, response, body) {
                    //fs.writeFile("okInfo.html", body, function(err) {if(err) {return console.log(err);}});
                    var $page = cheerio.load(body);
                    var Peoples = [];
                    $page("#FriendProfileSummaryOwn").each(function(i, elm) {

                        var $hover = cheerio.load($page(this).html());
                        console.log($page(this).text());
                    });
                    //resul= JSON.stringify(Peoples);
                    resul= "";
                    resolve(resul);
            });
            /*
                    //resul= JSON.stringify(users);
                    //console.log(userInfo);
                    //
                    var userInfo= userInfos[0];
                    var fio="";
                    var living="";
                    var ava="";
                    var phone="";
                    var universities="";
                    var schools="";
                    var career="";
                    if(userInfo.first_name!=undefined)
                        fio+=userInfo.first_name;
                    if(userInfo.nickname!=undefined)
                        fio+=" "+userInfo.nickname;
                    if(userInfo.last_name!=undefined)
                        fio+=" "+userInfo.last_name;
                    if(userInfo.country!=undefined)
                        living+=userInfo.country.title;
                    if(userInfo.city!=undefined)
                        living+=" "+userInfo.city.title;
                    if(userInfo.photo_max_orig!=undefined)
                        ava=userInfo.photo_max_orig;
                    if(userInfo.mobile_phone!=undefined)
                        phone=userInfo.mobile_phone;
                    if(userInfo.home_phone!=undefined)
                        phone+=" "+userInfo.home_phone;
                    if(userInfo.universities!=undefined){
                        for(k=0;k<userInfo.universities.length;k++){
                            universities+="("+k.toString()+") "+userInfo.universities[k].name
                            +", "+userInfo.universities[k].faculty_name+", "+userInfo.universities[k].chair_name+" ";
                        }
                    }
                    if(userInfo.schools!=undefined){
                        for(k=0;k<userInfo.schools.length;k++){
                            schools+="("+k.toString()+") "+userInfo.schools[k].name+" ";
                        }
                    }
                    if(userInfo.career!=undefined){
                        for(k=0;k<userInfo.career.length;k++){
                            career+="("+k.toString()+") "+userInfo.career[k].company+", "
                            +userInfo.career[k].position+" ";
                        }
                    }
                    
                    var infos=[];
                    infos.push({"InfoTitle":"Текущий город","InfoData":living});
                    infos.push({"InfoTitle":"Телефоны","InfoData":phone});
                    infos.push({"InfoTitle":"Карьера","InfoData":career});
                    infos.push({"InfoTitle":"Учеба","InfoData":universities});
                    infos.push({"InfoTitle":"Школа","InfoData":schools});
                    var resul={"social":"vk.com","profileName":fio,"image":ava,"infos":infos};
                    resolve(resul);**/
        });
    }


 
exports.GetUserInfo = GetUserInfo;



