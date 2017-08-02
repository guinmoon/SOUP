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
        var searchQuery = "https://ok.ru/search?st.query="+search_name+"&st.fromAge="
        +ageFrom+"&st.tillAge="+ageTo+"&st.mode=Users&st.grmode=Groups&st.posted=set"+citySerchStr;
        request({
            //uri: "http://vk.com",
            uri: searchQuery,
            method: "GET",
            headers: {'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Encoding": 'utf-8',"Cookie":"AUTHCODE=KYn4ksJlGxXIslo9BTiSy_MqN1mtdLxZoQ3X4RSHlJFdoUQQlTxWopqkLlrOzFAt605zKMJmdLdVBo2vCk-JMtQVdBsFBEyelhBN1KTP9A4_2; JSESSIONID=ae8b8d7d59561c4d8bb5b32229d34444b2f4a8775fdbeca4.d359804c;"}
        }, function(error, response, body) {
                /*fs.writeFile("okSearch.html", body, function(err) {
                        if(err) {
                            return console.log(err);
                        }
                });*/
                var $page = cheerio.load(body);
                var Peoples = [];
                $page("#gs_result_list div[class='ucard-v __h']").each(function(i, elm) {
                   // console.log("iter");
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
                    if(fio!="")
                        matchesCount++;
                    /*if(lastname!="")
                        matchesCount++;*/
                    if(City!=""&&City!=undefined)
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