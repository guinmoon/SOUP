//&#9776 buter
var navOpened=false;
var model = {
    userName:"User",
    /*items: [
        { label: "Фамилия",value: "Maria",type: "lastname", done: false},
        { label: "Имя",value: "Hilton",type: "firstname", done: false},
        { label: "Отчество",value: "",type: "patronymic", done: true },
        { label: "Дата Рождения",value: "",type: "bday", done: false}
    ],*/
    cur_country: {
      
    },
    cur_city: {

    },
    items: [
        { id:"0",label: "Фамилия",value: "Дарина",type: "lastname",event: "➕"},
        { id:"1",label: "Имя",value: "Руднева",type: "firstname",event: "➕"},
        { id:"2",label: "Отчество",value: "",type: "middlename" ,event: "➕"},
        { id:"3",label: "ДР / Возраст",value: "19-29",type: "bday",event: "➕"},
        /*{ id:"4",label: "Страна",value: "",type: "country",event: "➕"},*/
        /*{ id:"5",label: "Город",value: "",type: "city",event: "➕"},*/
        { id:"6",label: "Телефон",value: "+79851763447",type: "phone",event: "➕"},
        /*{ id:"7",label: "имя пользователя",value: "",type: "userName",event: "➕"}*/
        
    ],
    socNetworks: [
        {id:"vkCheckBox",class:"networkCheckBoxesChecked",img_src:"site/imgs/vk_ico.png"},
        {id:"okCheckBox",class:"networkCheckBoxesChecked",img_src:"site/imgs/ok_ico.png"},
        {id:"fbCheckBox",class:"networkCheckBoxesChecked",img_src:"site/imgs/fb_ico.png"},
        {id:"twCheckBox",class:"networkCheckBoxesUnchecked",img_src:"site/imgs/tw_ico.png"},
        {id:"inCheckBox",class:"networkCheckBoxesUnchecked",img_src:"site/imgs/in_ico.png"},
        {id:"gpCheckBox",class:"networkCheckBoxesUnchecked",img_src:"site/imgs/gp_ico.png"},
        {id:"ljCheckBox",class:"networkCheckBoxesUnchecked",img_src:"site/imgs/lj_ico.png"},
        {id:"mmCheckBox",class:"networkCheckBoxesUnchecked",img_src:"site/imgs/mm_ico.png"},
        {id:"fqCheckBox",class:"networkCheckBoxesUnchecked",img_src:"site/imgs/fq_ico.png"},
        {id:"mkCheckBox",class:"networkCheckBoxesUnchecked",img_src:"site/imgs/mk_ico.png"}
    ],
    Countries:[
        //{title:"Russia"},
        
    ],
    Cities:[
        //{title:"Russia"},
        
    ],
    progressBarClassName: "ProgressBarInitialized",
    progressBarValue: 0,
    searchButtonStatus: "false",
    idCounter: 10,
    persons: []
};
closeOpenNav();
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

    $('#editable-select').editableSelect();
/////////////////////////////**************************************  APP    ******************************//////////////////////////////////////////////    
    var purchaseApp = angular.module("purchaseApp", ['ui.select']);
    purchaseApp.config(function(uiSelectConfig) {
        uiSelectConfig.theme = 'bootstrap';
    });
/////////////////////////////**************************************  CONTROLLER    ******************************//////////////////////////////////////////////
    purchaseApp.controller("purchaseController", function ($scope,$http) {

    $scope.list = model;

    $scope.options = [{
        name: 'a',
        value: 'value-a'
        }, {
        name: 'b',
        value: 'value-b'
    }];

    $scope.selectedOption = $scope.options[0];

    $http.post("getCountries", "").success(function (answ) {
        $scope.response=answ;
        result = angular.fromJson(answ);
        for(i=0;i<result.response.items.length;i++)
        {
                countryId="";
                try{ countryId=result.response.items[i].id; }catch(err){}
                title=""
                try{ title=result.response.items[i].title; }catch(err){}
                model.Countries.push({"id":countryId,"title":title});
        }
        //console.log(result);
        //console.log(model.Countries);              
    });

    $scope.$watch('text', function(v) {
        for (var i in $scope.options) {
            var option = $scope.options[i];
            if (option.name === v) {
            $scope.selectedOption = option;
            break;
            }
        }
    });

    
    $scope.addItem = function (itemId,itemName,itemEvent) {
        console.log(itemName);
        if(itemEvent=="➕"){
            
            for(i=0;i<$scope.list.items.length;i++)
            {
                if($scope.list.items[i]["id"]==itemId)
                {
                    console.log($scope.list.idCounter);
                    $scope.list.idCounter++;
                    $scope.list.items.splice(i+1,0,
                    {id:$scope.list.idCounter, label: $scope.list.items[i]["label"],value: "",type: $scope.list.items[i]["type"],event: "➖"});
                    break;
                }
            }
            
        }
        if(itemEvent=="➖"){
            console.log(itemId);
            for(i=0;i<$scope.list.items.length;i++)
            {
                if($scope.list.items[i]["id"]==itemId)
                {
                    console.log($scope.list.items[i]["label"]);
                    $scope.list.items.splice(i,1);
                    break;
                }
            }
        }
    }

    $scope.socialClicked= function(socName)
    {
        console.log(socName);
        for(i=0;i<$scope.list.socNetworks.length;i++){
            if($scope.list.socNetworks[i]["id"]==socName)
            {
                if($scope.list.socNetworks[i]["class"]=="networkCheckBoxesChecked")
                {
                    $scope.list.socNetworks[i]["class"]="networkCheckBoxesUnchecked";
                    break;
                }
                if($scope.list.socNetworks[i]["class"]=="networkCheckBoxesUnchecked")
                {
                    $scope.list.socNetworks[i]["class"]="networkCheckBoxesChecked";
                    break;
                }
                break;
            }

        }
    }

    $scope.cityTyping = function(typed) {
        $http.post("getCities", typed).success(function (answ) {
            $scope.response=answ;
            result = angular.fromJson(answ);
            model.Cities=[];
            for(i=0;i<result.response.items.length;i++)
            {
                    cityId="";
                    try{ cityId=result.response.items[i].id; }catch(err){}
                    title=""
                    try{ title=result.response.items[i].title; }catch(err){}
                    region=""
                    try{ region=result.response.items[i].region; }catch(err){}
                    area=""
                    try{ area=result.response.items[i].area; }catch(err){}
                    model.Cities.push({"id":cityId,"title":title,"region":region,"area":area});
            }
           // console.log(result);
            //console.log(model.Countries);              
        });
    };

    $scope.logout = function(){
        console.log("logout");
        $http.post("logout","").success(function (answ) {
            console.log(answ);
            if(answ=="success")
                location.reload(true);
       });
    }

    $scope.peopleSearch = function (searchValue, searchForm) {
        console.log(model.cur_city);
        console.log(model.cur_country);
        var searchInSocials = [{"label":"fb"}];
        if(model.cur_country==null)
            model.cur_country={};
        if(model.cur_city==null)
            model.cur_city={};
        var CountryAndCity=[model.cur_country,model.cur_city];
        var searchRaw=searchValue;
        model.persons = [];
        var checkedSocialCount=0;
        for(snI=0;snI<$scope.list.socNetworks.length;snI++){
            if($scope.list.socNetworks[snI]["class"]=="networkCheckBoxesUnchecked")
                continue;
            checkedSocialCount++;
        }
        var currentSocNum=0;
        $scope.list.searchButtonStatus="true";
        for(snI=0;snI<$scope.list.socNetworks.length;snI++){
            if($scope.list.socNetworks[snI]["class"]=="networkCheckBoxesUnchecked")
                continue;
            searchInSocials = [{"label":$scope.list.socNetworks[snI]["id"]}];
            searchValue = CountryAndCity.concat(searchRaw);
            searchValue = searchInSocials.concat(searchValue);
            console.log(searchValue);
            $http.post("peopleSearch", searchValue).success(function (answ) {
                        $scope.response=answ;
                        result = angular.fromJson(answ);
                        
                    //console.log(result);
                        //console.log(result.length);
                        for(i=0;i<result.length;i++)
                        {
                                ProfileUrl="";
                                try{ ProfileUrl=result[i].ProfileURL; }catch(err){}
                                AvaUrl=""
                                try{ AvaUrl=result[i].AvaURL; }catch(err){}
                                Description="";
                                try{ Description=result[i].ProfileDescr; }catch(err){}
                                SocialNetwork="";
                                try{ SocialNetwork=result[i].SocialNetwork; }catch(err){}
                                SocialNetwork = "site/imgs/"+SocialNetwork+"_ico.png";
                                MatchesCount="";
                                try{ MatchesCount=result[i].MatchesCount; }catch(err){}
                                model.persons.push({"lnk":ProfileUrl,"description":Description,
                                "photo":AvaUrl,"socialNetwork":SocialNetwork,"matchesCount":MatchesCount});
                        }
                        
                        model.progressBarValue = ((currentSocNum+1)/checkedSocialCount)*100;
                        currentSocNum++;
                        if(model.progressBarValue==100){
                            model.progressBarValue=0;
                           // model.searchButtonStatus="";
                        }
                        //console.log(model.progressBarValue);
                    });

            
        }
        
        //model.progressBarValue=0;
    }



    
});//End Controller




function closeOpenNav() {
    if(navOpened==true){
        navOpened=false
        document.getElementById("mySidenav").style.paddingLeft = "40px";
        document.getElementById("mySidenav").style.width = "40px";
        document.getElementById("closebtn").innerText='☰';
        document.getElementById("workArea").style.left='40px';
    }
    else{
        navOpened=true;
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("mySidenav").style.paddingLeft = "5px";
        document.getElementById("closebtn").innerText='×';
        document.getElementById("workArea").style.left='250px';
    }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}