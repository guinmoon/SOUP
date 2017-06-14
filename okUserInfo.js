var http = require('http');
var request = require("request");
var request2 = require("request");
var cheerio = require('cheerio');
var cheerio2 = require('cheerio');
var usefull = require("./usefull");
var fs = require('fs');

var httpHeader= {'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Encoding": 'utf-8',"Cookie":"AUTHCODE=KYn4ksJlGxXIslo9BTiSyxEd60X0ih2qNWSwDcF9z4J_91fOPFCrY-gM3GzueItymZtVKBpYbqVqQgMrlnvRzkc3sN7kmq2EpAfvBK73IA4_2; JSESSIONID=8c3da6f6f242e72b4c651e9a1d374c9ac6f695f98e89d33.56498573;"};

function GetUserInfo(inpData) {
        return new Promise(function (resolve, reject) {
            var inputData = inpData.toString();
            okLnk = inputData.substring(0,inputData.indexOf("?"));
            //console.log(okLnk);
            var searchQuery = okLnk;
            request({
                uri: searchQuery,
                method: "GET",
                headers:httpHeader
            }, function(error0, response0, body0) {
                    var $page0 = cheerio2.load(body0);
                    //getting Ava
                    var ava ="http:"+$page0('#viewImageLinkId').attr('src');
                    //console.log(ava);
                    //getting info
                    var inputData = inpData.toString();
                    var okLnk = inputData.substring(0,inputData.indexOf("?"));
                    var searchQuery = okLnk+"/about";
                    request2({
                    uri: searchQuery,
                    method: "GET",
                    headers: httpHeader
                    }, function(error, response, body) {
                        //fs.writeFile("okInfo.html", body, function(err) {if(err) {return console.log(err);}});
                        var $page = cheerio.load(body);
                        var fio="Неизвестно";
                        var info="";
                        var infos=[];
                        $page("h1[class='mctc_name_tx bl']").each(function(i, elm) {
                            fio = $page(this).text();
                            
                        });
                        $page("#FriendProfileSummaryOwn div[class='portlet_b']").each(function(i, elm) {
                            var $userInfoBlock = cheerio.load($page(this).html());
                            var descr=$userInfoBlock("div[class='lh-150']").text();
                            
                            infos.push({"InfoTitle":"О Себе","InfoData":descr});
                            $userInfoBlock("li[class='tico_ul_li']").each(function(i, elm) {
                                infos.push({"InfoTitle":"Доп. Инфо","InfoData":$userInfoBlock(this).text()});
                            });
                        });
                        var resul={"social":"ok.ru","profileName":fio,"image":ava,"infos":infos};
                        //console.log(resul);
                        resolve(resul);
                  });
            });
           
                    
        });
    }


 
exports.GetUserInfo = GetUserInfo;



