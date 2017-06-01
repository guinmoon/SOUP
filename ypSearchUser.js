var http = require('http');
var request = require("request");
var cheerio = require('cheerio');
var usefull = require("./usefull");
var fs = require('fs');

//remixsid=1386f01c87035e4a96a92a9a2821f30427186b3cc47d39750a672
//AUTHCODE=KYn4ksJlGxXIslo9BTiSywM463em1Xwntf9nWN023Vbn-ISAYwOMLpVyEcgleVhx1isl2H7w5k0k8J3dcPcMm2CnTfJNobG3VSbJ_0WHT38_2;JSESSIONID=aaeef9577cacbde4ebbca98f802743e995f44a513e5390cf

//AGE &st.fromAge=18&st.tillAge=21

// var search_name="Лера Белоусова";
// search_name=encodeURIComponent(search_name);
// var searchQuery = "https://yandex.ru/people?text="+search_name+"&lr=36&ps_network=7";


function SearchPeoples(pers,network) {
    return new Promise(function (resolve, reject) {
        ageFrom="";
        ageTo="";
        fio="";
       // lastname="";
       // middlename="";
        inputPhone="";
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
            /*if(pers[i].type=="lastname")
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
        var search_name = /*firstname+" "+lastname*/fio;
        search_name=encodeURIComponent(search_name);
        var citySerchStr="";
        if(City!=""&&City!=undefined)
            citySerchStr = "&ps_geo="+encodeURIComponent(City);
        var searchQuery = "https://yandex.ru/people?text="+search_name+"&lr=36&ps_network="+network+citySerchStr;
        request({
            //uri: "http://vk.com",
            uri: searchQuery,
            method: "GET",
            headers: {'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Encoding": 'utf-8',"Cookie":"AUTHCODE=KYn4ksJlGxXIslo9BTiSywM463em1Xwntf9nWN023Vbn-ISAYwOMLpVyEcgleVhx1isl2H7w5k0k8J3dcPcMm2CnTfJNobG3VSbJ_0WHT38_2; JSESSIONID=aaeef9577cacbde4ebbca98f802743e995f44a513e5390cf;"}
        }, function(error, response, body) {
                /*fs.writeFile("ypSearch.html", body, function(err) {
                        if(err) {
                            return console.log(err);
                        }
                }); */
                var $page = cheerio.load(body);
                var Peoples = [];
                //console.log("Before_iter");
                $page("div.main__content li[class='serp-item people people_has-avatar_yes clearfix z-people']").each(function(i, elm) {
                    try{
                        var $hover = cheerio.load($page(this).html());
                        var img_src=$hover("div[class='people__avatar']").attr('style');
                        img_src = img_src.replace("background-image:url(","http:");
                        img_src = img_src.replace(")","");
                        var href=$hover("a[class='link people__avatar-link i-bem']").attr('href');
                        var name=$hover("a[class='link serp-item__title-link i-bem']").text();
                        //console.log(name);
                        var ProfileDescription=[];
                            ProfileDescription.push(name);
                        var descr=$hover("div[class='people__birth']").text();
                            ProfileDescription.push(descr);
                        $hover("div[class='data-row']").each(function(j, elem) {
                            descr =$hover(this).text();
                            ProfileDescription.push(descr);
                        });
                        var matchesCount=0;
                        //if(ageFrom!="")
                        //    matchesCount++;
                        if(fio!="")
                            matchesCount++;
                       /* if(lastname!="")
                            matchesCount++;*/

                        var social="YandexPeople";
                        if(href.indexOf("facebook")!=-1)
                            social = "fb";   
                        if(href.indexOf("instagram")!=-1)
                            social = "in";
                        if(href.indexOf("my.mail")!=-1)
                            social = "mm";
                        if(href.indexOf("livejournal.com")!=-1)
                            social = "lj";
                        if(href.indexOf("plus.google")!=-1)
                            social = "gp";
                        if(href.indexOf("moikrug.ru")!=-1)
                            social = "mk";
                        if(href.indexOf("twitter.com")!=-1)
                            social = "tw";
                        if(href.indexOf("foursquare.com")!=-1)
                            social = "fq";
                        if(href.indexOf("linkedin.com")!=-1)
                            social = "li";

                        Peoples.push({"ProfileURL": href,"AvaURL": img_src,"ProfileDescr":ProfileDescription,
                        "SocialNetwork":social,"MatchesCount":matchesCount});
                    }
                    catch (errr){
                        console.log(errr.message);
                    }
                });
                //resul= JSON.stringify(Peoples);
                resul= Peoples;
                resolve(resul);
        });
    });
}

exports.SearchPeoples = SearchPeoples;