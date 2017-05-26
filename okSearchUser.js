var http = require('http');
var request = require("request");
var cheerio = require('cheerio');
var usefull = require("./usefull");
var fs = require('fs');

//remixsid=1386f01c87035e4a96a92a9a2821f30427186b3cc47d39750a672
//AUTHCODE=KYn4ksJlGxXIslo9BTiSywM463em1Xwntf9nWN023Vbn-ISAYwOMLpVyEcgleVhx1isl2H7w5k0k8J3dcPcMm2CnTfJNobG3VSbJ_0WHT38_2;JSESSIONID=aaeef9577cacbde4ebbca98f802743e995f44a513e5390cf

//AGE &st.fromAge=18&st.tillAge=21

// var search_name="Лера  Белоусова";
// search_name=encodeURIComponent(search_name);
// var searchQuery = "https://ok.ru/search?st.query="+search_name+"&st.fromAge=&st.tillAge=&st.mode=Users&st.grmode=Groups&st.posted=set";


// console.log(searchQuery);

// request({
//   //uri: "http://vk.com",
//   uri: searchQuery,
//   method: "GET",
//   headers: {'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
//   "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
//   "Accept-Encoding": 'utf-8',"Cookie":"AUTHCODE=KYn4ksJlGxXIslo9BTiSywM463em1Xwntf9nWN023Vbn-ISAYwOMLpVyEcgleVhx1isl2H7w5k0k8J3dcPcMm2CnTfJNobG3VSbJ_0WHT38_2; JSESSIONID=aaeef9577cacbde4ebbca98f802743e995f44a513e5390cf;"}
// }, function(error, response, body) {
//     var $page = cheerio.load(body);
//     $page('#gs_result_list div.show-on-hover').each(function(i, elm) {
//         var $hover = cheerio.load($page(this).html());
//         var img_src=$hover('img.photo_img').attr('src');
//         img_src = "https:"+img_src;
//         var href=$hover("a[class='gs_result_i_t_name o']").attr('href');
//         href='https://ok.ru'+href;
//         var name=$hover("a[class='gs_result_i_t_name o']").text();
//         var descr=$hover("div[class='gs_result_i_t_addr ellip']").text();
//         descr=descr.trim();
//         descr = descr.split('\n').join('');
//         console.log(img_src); 
//         console.log(href); 
//         console.log(name);
//         console.log(descr);
//     });
// });



function SearchPeoples(pers) {
    return new Promise(function (resolve, reject) {
        ageFrom="";
        ageTo="";
        firstname="";
        lastname="";
        middlename="";
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
            if(pers[i].type=="firstname")
            {
                firstname=pers[i].value;
            }
            if(pers[i].type=="lastname")
            {
                lastname=pers[i].value;
            }
            if(pers[i].type=="middlename")
            {
                middlename=pers[i].value;
            }
            if(pers[i].type=="phone")
            {
                if(pers[i].value!=""){
                    inputPhone=pers[i].value;
                    inputPhone = usefull.transformPhoneNumber(inputPhone);
                    //console.log(inputPhone);
                }
            }
        }
        var search_name = firstname+" "+middlename+" "+lastname;
        search_name=encodeURIComponent(search_name);
        var searchQuery = "https://ok.ru/search?st.query="+search_name+"&st.fromAge="
        +ageFrom+"&st.tillAge="+ageTo+"&st.mode=Users&st.grmode=Groups&st.posted=set";
        request({
            //uri: "http://vk.com",
            uri: searchQuery,
            method: "GET",
            headers: {'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Encoding": 'utf-8',"Cookie":"AUTHCODE=KYn4ksJlGxXIslo9BTiSywM463em1Xwntf9nWN023Vbn-ISAYwOMLpVyEcgleVhx1isl2H7w5k0k8J3dcPcMm2CnTfJNobG3VSbJ_0WHT38_2; JSESSIONID=aaeef9577cacbde4ebbca98f802743e995f44a513e5390cf;"}
            }, function(error, response, body) {
                var $page = cheerio.load(body);
                var Peoples = [];
                $page('#gs_result_list div.show-on-hover').each(function(i, elm) {
                    var $hover = cheerio.load($page(this).html());
                    var img_src=$hover('img.photo_img').attr('src');
                    img_src = "https:"+img_src;
                    var href=$hover("a[class='gs_result_i_t_name o']").attr('href');
                    href='https://ok.ru'+href;
                    var name=$hover("a[class='gs_result_i_t_name o']").text();
                    var descr=$hover("div[class='gs_result_i_t_addr ellip']").text();
                    descr=descr.trim();
                    descr = descr.split('\n').join('');
                    var matchesCount=0;
                    if(ageFrom!="")
                        matchesCount++;
                    if(firstname!="")
                        matchesCount++;
                    if(lastname!="")
                        matchesCount++;
                        
                    var ProfileDescription=[];
                    ProfileDescription.push(name);
                    ProfileDescription.push(descr);
                    
                    Peoples.push({"ProfileURL": href,"AvaURL": img_src,"ProfileDescr":ProfileDescription,
                    "SocialNetwork":"ok","MatchesCount":matchesCount});
                });
                //resul= JSON.stringify(Peoples);
                resul= Peoples;
                resolve(resul);
        });
    });
}

exports.SearchPeoples = SearchPeoples;