//&#9776 buter
var model = {
    cur_userList: {

    },
    userLists:[
        //{title:"Russia"},
        
    ],
    addProfileStyle:"",
    okAddProfileStyle:"",
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

    
/////////////////////////////**************************************  APP    ******************************//////////////////////////////////////////////    
    var purchaseApp = angular.module("purchaseApp", ['ui.select']);
    
/////////////////////////////**************************************  CONTROLLER    ******************************//////////////////////////////////////////////
    purchaseApp.controller("purchaseController", function ($scope,$http) {

    $scope.list = model;

    

    $scope.getLists = function() {
        $http.post("http://127.0.0.1:8888/getLists").success(function (answ) {
            $scope.response=answ;
            //console.log(answ);
            result = angular.fromJson(answ); 
            for(i=0;i<result.length;i++){
                model.userLists.push({"id":result[i].id,"title":result[i].list_name});
                
            }
            if(model.userLists.length>0)
                model.cur_userList = model.userLists[0].id; 
            
            //console.log(model.cur_userList);
        });
    };

    $scope.getLists();

   $scope.addToList = function(selectedList){
       //console.log(selectedList);
        var checkedPersons=[];
        var taburl= "";
        chrome.tabs.getSelected(null,function(tab){
                console.log(tab.url);
                taburl= tab.url;
                var postData = {"list_id":selectedList,"lnk":taburl};
                $http.post("http://127.0.0.1:8888/addToListExt", postData).success(function (answ) {
                    
                    if(answ=="success"){
                        console.log(answ);    
                        model.addProfileStyle="display: none;";
                        model.okAddProfileStyle="display: inline-block;";
                    }
                });
            }
        );
        
        
    }

   
    
});