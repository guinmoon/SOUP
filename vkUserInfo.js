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
        vkId = inputData.substring(inputData.indexOf("id")+2);
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
                    fields: 'sex, bdate, city, country, home_town,photo_max_orig, domain, has_mobile, contacts, site, education, universities, schools,  followers_count, common_count, occupation, nickname, relation, personal, connections,  activities, interests, music, movies, tv, books, games, about, quotes, screen_name, maiden_name,  career, military'
                    
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
                var infos=[];
                infos.push({"InfoTitle":"Текущий город","InfoData":living});
                infos.push({"InfoTitle":"Телефоны","InfoData":phone});
                var resul={"social":"vk.com","profileName":fio,"ava":ava,"infos":infos};
                resolve(resul);
            });
        });
    }


 
exports.GetUserInfo = GetUserInfo;


