

    //"https://graph.facebook.com/oauth/access_token?client_id=260032061103299&client_secret=0606156121891946ec2b376dfba137dc&grant_type=client_credentials"
//access_token":"260032061103299|dat0LLis6OBV0l_3O3SB7TW6e5

var http = require('http');
var request = require("request");
var cheerio = require('cheerio');
var usefull = require("./usefull");
var fs = require('fs');





function SearchPeoples(pers,soc,countryFromPost,cityFromPost) {
    return new Promise(function (resolve, reject) {
        ageFrom="";
        ageTo="";
        fio="";
       // lastname="";
       // middlename="";
        inputPhone="";
        //Country=countryFromPost.title;
        City=cityFromPost.title;
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
            if(pers[i].type=="fio")
            {
                fio=pers[i].value;
            }
           /* if(pers[i].type=="lastname")
            {
                lastname=pers[i].value;
            }
            if(pers[i].type=="middlename")
            {
                middlename=pers[i].value;
            }*/
            if(pers[i].type=="phone")
            {
                if(pers[i].value!=""){
                    inputPhone=pers[i].value;
                    inputPhone = usefull.transformPhoneNumber(inputPhone);
                    //console.log(inputPhone);
                }
            }
        }
        var search_name =/* firstname+" "+middlename+" "+lastname*/fio;
        search_name=encodeURIComponent(search_name);
        var citySerchStr="";
        if(City!=""&&City!=undefined)
            citySerchStr = "&st.location="+encodeURIComponent(City)+"&st.city="+encodeURIComponent(City);
        var searchQuery = "https://graph.facebook.com/oauth/access_token?client_id=260032061103299&client_secret=0606156121891946ec2b376dfba137dc&grant_type=client_credentials";
        request({
            uri: searchQuery,
            method: "GET",
            headers: {'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Encoding": 'utf-8',"Cookie":""}
        }, function(error, response, body) {
                fs.writeFile("fbSearch.html", body, function(err) {
                        if(err) {
                            return console.log(err);
                        }
                });
                
                
                Peoples="";
                resul= Peoples;
                resolve(resul);
        });
    });
}

exports.SearchPeoples = SearchPeoples;