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
    cur_userList: {

    },
    items: [
        { id:"0",label: "Ф.И.О или Ник",value: "Мария Смородина",type: "fio",event: "➕"},
        /*{ id:"1",label: "Имя",value: "Руднева",type: "firstname",event: "➕"},*/
       /* { id:"2",label: "Отчество",value: "",type: "middlename" ,event: "➕"},*/
        { id:"3",label: "ДР / Возраст",value: "16-49",type: "bday",event: "➕"},
        /*{ id:"4",label: "Страна",value: "",type: "country",event: "➕"},*/
        /*{ id:"5",label: "Город",value: "",type: "city",event: "➕"},*/
        { id:"6",label: "Телефон",value: "89887605589",type: "phone",event: "➕"},
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
    userLists:[
        //{title:"Russia"},
        
    ],
    userId:"",
    reportGeneratingVisible:"none",
    listsVisible:"block",
    listsBottom:"-40px",
    searchResult:"",
    serarchResultDisplay:"none",
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
        $scope.list.cur_country = {id:"1",title:"Россия"};
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

    $scope.selectAll = function(){
        for(i=0;i<$scope.list.persons.length;i++){
            $scope.list.persons[i].checked='YES';
        }
    }
    
    $scope.addItem = function (itemId,itemName,itemEvent) {
       // console.log(itemName);
        if(itemEvent=="➕"){
            
            for(i=0;i<$scope.list.items.length;i++)
            {
                if($scope.list.items[i]["id"]==itemId)
                {
                  //  console.log($scope.list.idCounter);
                    $scope.list.idCounter++;
                    $scope.list.items.splice(i+1,0,
                    {id:$scope.list.idCounter, label: $scope.list.items[i]["label"],value: "",type: $scope.list.items[i]["type"],event: "➖"});
                    break;
                }
            }
            
        }
        if(itemEvent=="➖"){
         //   console.log(itemId);
            for(i=0;i<$scope.list.items.length;i++)
            {
                if($scope.list.items[i]["id"]==itemId)
                {
                 //   console.log($scope.list.items[i]["label"]);
                    $scope.list.items.splice(i,1);
                    break;
                }
            }
        }
    }

    $scope.socialClicked= function(socName)
    {
        //console.log(socName);
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

    $scope.showListsClicked = function(){
        model.listsVisible = "block";
        if(model.listsBottom != "10px")
            model.listsBottom = "10px";
        else
            model.listsBottom = "-40px";
    }

    $scope.listsFocusLost = function(){
        console.log("focus lost");
    }

    $scope.getLists = function() {
        $http.post("getLists", "").success(function (answ) {
            $scope.response=answ;
            result = angular.fromJson(answ); 
            model.userLists=[];
            for(i=0;i<result.length;i++){
                model.userLists.push({"id":result[i].id,"title":result[i].list_name});
                
            }
            //console.log(result);
        });
    };

    $scope.getLists();

    $scope.saveListsClicked = function(){
        
        var listName=window.prompt("Ведити название нового списка","Новый Список");
        //console.log(listName);
        if(listName==undefined||listName=="")
            return;
        var checkedPersons=[];
        for(i=0;i<model.persons.length;i++){
            if(model.persons[i].checked=='YES')
                checkedPersons.push(model.persons[i]);
        }
        var postData = {"listName":listName,"personss":checkedPersons};
        $http.post("createNewList", postData).success(function (answ) {
            //$scope.response=answ;
            result =answ;
            $scope.getLists();
            console.log(result);
        });
    }

    $scope.cityTyping = function(typed) {
        postData = [typed,$scope.list.cur_country];
        $http.post("getCities", postData).success(function (answ) {
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
        });
    };

    $scope.exportClicked = function(){
        var checkedPersons=[];
        for(i=0;i<model.persons.length;i++){
            if(model.persons[i].checked=='YES')
                checkedPersons.push(model.persons[i]);
        }
        postData = checkedPersons;
        //model.reportGeneratingVisible = "block";
        $http.post("exportToWord", postData).success(function (answ) {
            $scope.response=answ;
            if(answ=="success"){
                location.pathname="/output.docx";
                model.reportGeneratingVisible = "none";
            }
            
            console.log(answ);
            //console.log(model.Countries);              
        });
    }

    $scope.showList = function(result){
        model.persons = [];
        for(i=0;i<result.length;i++)
        {
            ProfileUrl="";
            try{ ProfileUrl=result[i].profileURL; }catch(err){}
            AvaUrl=""
            try{ AvaUrl=result[i].imgUrl; }catch(err){}
            Description_text="";
            Description = [];
            try{ 
                var ProfileDescr = result[i].profileDescr.split("[descr]");
                for(k=1;k<ProfileDescr.length;k++){
                    Description_text=ProfileDescr[k].toString(); 
                    descr_class="uncolored";
                    descr_prop="";
                    descr_value="";
                    descr_prop=Description_text.substring(Description_text.indexOf("[prop]")+6,Description_text.indexOf("[value]"));
                    descr_value=Description_text.substring(Description_text.indexOf("[value]")+7);
                    Description.push({class:descr_class,prop:descr_prop,value:descr_value});
                }
            }catch(err){console.log(err.message);}
            SocialNetwork="";
            try{ SocialNetwork=result[i].socialNetwork; }catch(err){}
            MatchesCount="0";
            model.persons.push({"lnk":ProfileUrl,"description":Description,
            "photo":AvaUrl,"socialNetwork":SocialNetwork,"matchesCount":MatchesCount,"checked":"NO"});
        }
    }

    $scope.listSelected = function(selectedList){
        //console.log(selectedList);
        postData = selectedList.id;
        $http.post("getListById", postData).success(function (answ) {
            $scope.response=answ;
            result = angular.fromJson(answ);
            //console.log(result);    
            $scope.showList(result)
        });
    }

    $scope.addToList = function(selectedList){
        //console.log(selectedList);
        var checkedPersons=[];
        for(i=0;i<model.persons.length;i++){
            if(model.persons[i].checked=='YES')
                checkedPersons.push(model.persons[i]);
        }
        var postData = {"list_id":selectedList.id,"personss":checkedPersons};
        $http.post("addToList", postData).success(function (answ) {
            $scope.response=answ;
            result = angular.fromJson(answ);
            //console.log(result);    
            $scope.getLists();
        });
    }

    $scope.logout = function(){
        console.log("logout");
        $http.post("logout","").success(function (answ) {
            console.log(answ);
            if(answ=="success")
                location.reload(true);
       });
    }

    $scope.peopleSearch = function (searchValue, searchForm) {
        //console.log(model.cur_city);
        //console.log(model.cur_country);
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
           // console.log(searchValue);
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
                                Description_text="";
                                Description = [];
                                try{ 
                                    for(k=0;k<result[i].ProfileDescr.length;k++){
                                        Description_text=result[i].ProfileDescr[k].toString(); 
                                       // console.log(Description_text);
                                        descr_class="uncolored";
                                        descr_prop="";
                                        descr_value="";
                                        if(Description_text.indexOf("[colored]")!=-1){
                                            descr_class="colored";    
                                            Description_text=Description_text.replace("[colored]","");
                                        }
                                        descr_prop=Description_text.substring(0,Description_text.indexOf(":")+1);
                                        descr_value=Description_text.substring(Description_text.indexOf(":")+1,Description_text.length);
                                        Description.push({class:descr_class,prop:descr_prop,value:descr_value});
                                    }
                                }catch(err){console.log(err.message);}
                                SocialNetwork="";
                                try{ SocialNetwork=result[i].SocialNetwork; }catch(err){}
                                SocialNetwork = "site/imgs/"+SocialNetwork+"_ico.png";
                                MatchesCount="";
                                try{ MatchesCount=result[i].MatchesCount; }catch(err){}
                                model.persons.push({"lnk":ProfileUrl,"description":Description,
                                "photo":AvaUrl,"socialNetwork":SocialNetwork,"matchesCount":MatchesCount,"checked":"NO"});
                        }
                        
                        model.progressBarValue = ((currentSocNum+1)/checkedSocialCount)*100;
                        currentSocNum++;
                        if(model.progressBarValue==100){
                            model.progressBarValue=0;
                           // model.searchButtonStatus="";
                        }
                        //console.log(model.progressBarValue);
                        model.searchResult=model.persons.length;
                        model.serarchResultDisplay = "block";
                        //console.log(model.persons.length);
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
        document.getElementById("workArea").style.marginLeft='40px';
    }
    else{
        navOpened=true;
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("mySidenav").style.paddingLeft = "5px";
        document.getElementById("closebtn").innerText='×';
        document.getElementById("workArea").style.marginLeft='250px';
    }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
/*function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
*/
// Close the dropdown menu if the user clicks outside of it
/*window.onclick = function(event) {
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
}*/