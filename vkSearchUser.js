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



function SearchPeoples(pers,soc,countryFromPost,cityFromPost) {
        return new Promise(function (resolve, reject) {
        
        ageFrom="";
        ageTo="";
        firstname="";
        lastname="";
        middlename="";
        inputPhone="";
        Country=countryFromPost.id;
        City=cityFromPost.id;
        console.log(Country);
        console.log(City);
        for(i=0;i<pers.length;i++)
        {
            if(pers[i].type=="bday")
            {
                if(pers[i].value.indexOf('-')!=-1){
                    var ages=pers[i].value.split('-');
                    ageFrom=ages[0];
                    ageTo=ages[1];
                }
                else{
                    if(pers[i].value!=""){
                        ageFrom=pers[i].value;
                        ageTo=pers[i].value;
                    }
                }
            }
            if(pers[i].type=="firstname")
            {
                firstname=pers[i].value;
            }
            if(pers[i].type=="lastname")
            {
                lastname=pers[i].value;
            }
            
            if(pers[i].type=="phone")
            {
                if(pers[i].value!=""){
                    inputPhone=pers[i].value;
                    inputPhone = usefull.transformPhoneNumber(inputPhone);
                   // console.log(inputPhone);
                }
            }
        }
        SearchQuery = firstname+" "+middlename+" "+lastname;
        //console.log(SearchQuery);
            //For new authorisation
           // ({
             /*VK.auth.user({
               scope: ['audio', 'photos', 'friends', 'wall', 'offline']
            }).then(token => {
                return */VK.call('users.search', {
                    q: SearchQuery,
                    age_from:ageFrom,
                    age_to:ageTo,
                    country:Country,
                    city:City, 
                    sort: 1, 
                    fields: 'bdate,photo,city,contacts',
                    count: 1000
            //});
            }).then(users => {
                //resul= JSON.stringify(users);
                var Peoples = [];
                for(i=0;i<users.items.length;i++){
                    var matchesCount=0;
                    if(ageFrom!="")
                        matchesCount++;
                    if(firstname!="")
                        matchesCount++;
                    if(lastname!="")
                        matchesCount++;
                    if(City!=""&&City!=undefined)
                        matchesCount++;
                    if(Country!=""&&Country!=undefined)
                        matchesCount++;
                    var ProfileDescription=[];
                   
                    ProfileDescription.push(users.items[i].first_name+" "+users.items[i].last_name);
                    if(users.items[i].mobile_phone!=NaN && users.items[i].mobile_phone!=undefined && users.items[i].mobile_phone!=""){
                        if(usefull.transformPhoneNumber(users.items[i].mobile_phone)==inputPhone)
                            matchesCount++;    
                        ProfileDescription.push("Номер телефона: "+users.items[i].mobile_phone);                        
                    }
                   
                    if(users.items[i].city!=undefined&&users.items[i].city.title!=NaN && users.items[i].city.title!=undefined && users.items[i].city.title!=""){
                        ProfileDescription.push("Город: "+users.items[i].city.title); 
                    }
                    if(users.items[i].bdate!=NaN && users.items[i].bdate!=undefined && users.items[i].bdate!="")
                         ProfileDescription.push("ДР: "+users.items[i].bdate);
                    
                    Peoples.push({"ProfileURL": "https://vk.com/id"+users.items[i].id,"AvaURL": users.items[i].photo,
                    "SocialNetwork":"vk","ProfileDescr":ProfileDescription,"MatchesCount":matchesCount});
                }

                resul= Peoples;
                resolve(resul);
            }).catch(error => {
                console.log(error);
            });
        });
    }


 function GetVkCountries() {
    return new Promise(function (resolve, reject) {
        var searchQuery = "http://api.vk.com/method/database.getCountries?v=5.5&need_all=1&count=1000";
        request({
            uri: searchQuery,
            method: "GET",
            headers: {'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Encoding": 'utf-8',"Cookie":""}
        }, function(error, response, body) { 
                resolve(body);
        });
    });
}

function GetVkCities(substr) {
    return new Promise(function (resolve, reject) {
        search_name=encodeURIComponent(substr);
        var searchQuery = "https://api.vk.com/api.php?oauth=1&method=database.getCities&v=5.5&country_id=1&q="+search_name+"&offset=0&need_all=1&count=1000";
        request({
            uri: searchQuery,
            method: "GET",
            headers: {'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Encoding": 'utf-8',"Cookie":""}
        }, function(error, response, body) { 
                resolve(body);
        });
    });
}

exports.SearchPeoples = SearchPeoples;
exports.GetVkCountries = GetVkCountries;
exports.GetVkCities = GetVkCities;



