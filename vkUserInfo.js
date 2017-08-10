var usefull = require("./usefull");
var request = require("request");
const VKApi = require('node-vkapi');
const VK    = new VKApi({
  app: {
    id: 5370934,
    secret: 'dpNkXhqq55hZswcRE8dO'
  }, 
  auth: {
    login: 'guinmoon@gmail.com', 
    pass: '1S7R7SFS'
  },
  token: '0d32f173762c7a321645497196bb55014f4b2e85d9a6b3b6c8320f47f0ea97ddfe9c870cb7293f8588544'
});

//token=0d32f173762c7a321645497196bb55014f4b2e85d9a6b3b6c8320f47f0ea97ddfe9c870cb7293f8588544



function GetUserInfo(inputData) {
        return new Promise(function (resolve, reject) {
        inputData = inputData.toString();
        var ind=inputData.indexOf("id");
        var vkId="";
        if(ind!=-1){
            vkId = inputData.substring(ind+2);
        }
        else{
            ind=inputData.indexOf("vk.com/");
            if(ind!=-1){
                vkId=  inputData.substring(ind+7);
            }
            else{
                reject({});
            }
        }
        var vkLnkGlobal = inputData;
       // console.log(vkId);
        //console.log(SearchQuery);
            //For new authorisation
           // ({
             /*VK.auth.user({
               scope: ['audio', 'photos', 'friends', 'wall', 'offline']
            }).then(token => {
                return */VK.call('users.get', {
                    user_ids: vkId,
                    name_case:"Nom",
                    version:"5.65",
                    fields: 'id,sex, bdate, city, country, home_town,photo_max_orig,photo_50, domain, has_mobile, contacts, site, education, universities, schools,  followers_count, common_count, occupation, nickname, relation, personal, connections,  activities, interests, music, movies, tv, books, games, about, quotes, screen_name, maiden_name,  career, military'
                    
            //});
            }).then(userInfos => {
                //resul= JSON.stringify(users);
                //console.log(userInfo);
                //
                var userInfo= userInfos[0];
                //console.log(userInfo);
                var fio="";
                var living="";
                var ava="";
                var phone="";
                var universities="";
                var schools="";
                var career="";
                var smallAva="";
                var idUrl="";
                var bday="";
                if(userInfo.id!=undefined){
                    idUrl="https://vk.com/id"+userInfo.id;
                    vkLnkGlobal = idUrl;
                }
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
                if(userInfo.photo_50!=undefined)
                    smallAva=userInfo.photo_50;
                if(userInfo.mobile_phone!=undefined)
                    phone=userInfo.mobile_phone;
                if(userInfo.bdate!=undefined)
                    bday=userInfo.bdate;
                if(userInfo.home_phone!=undefined&&userInfo.home_phone!="")
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
                infos.push({"InfoTitle":"Ссылка на профиль","InfoData":vkLnkGlobal});
                if(living!=""&&living!=undefined)
                    infos.push({"InfoTitle":"Текущий город","InfoData":living});
                if(bday!=""&&bday!=undefined)
                    infos.push({"InfoTitle":"Дата рождения","InfoData":bday});
                if(phone!=""&&phone!=undefined)
                    infos.push({"InfoTitle":"Телефоны","InfoData":phone});
                if(career!=""&&career!=undefined)
                    infos.push({"InfoTitle":"Карьера","InfoData":career});
                if(universities!=""&&universities!=undefined)
                    infos.push({"InfoTitle":"Учеба","InfoData":universities});
                if(schools!=""&&schools!=undefined)
                    infos.push({"InfoTitle":"Школа","InfoData":schools});
                var resul={"social":"vk.com","profileName":fio,"image":ava,"infos":infos,"smallAva":smallAva,"profileURL":idUrl};
                resolve(resul);
            }).catch(function(errr){console.log("ERROR on VKAPIGetInfo "+errr.message);reject({});});
        });
    }


 
exports.GetUserInfo = GetUserInfo;



