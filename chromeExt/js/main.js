//&#9776 buter
var model = {
    cur_userList: {

    },
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

    
/////////////////////////////**************************************  APP    ******************************//////////////////////////////////////////////    
    var purchaseApp = angular.module("purchaseApp", ['ui.select']);
    
/////////////////////////////**************************************  CONTROLLER    ******************************//////////////////////////////////////////////
    purchaseApp.controller("purchaseController", function ($scope,$http) {

    $scope.list = model;

    $scope.showListsClicked = function(){
        model.listsVisible = "block";
        if(model.listsBottom != "10px")
            model.listsBottom = "10px";
        else
            model.listsBottom = "-40px";
    }

    

    $scope.getLists = function() {
        $http.post("http://127.0.0.1:8888/getLists").success(function (answ) {
            $scope.response=answ;
            console.log(answ);
            result = angular.fromJson(answ); 
            for(i=0;i<result.length;i++){
                model.userLists.push({"id":result[i].id,"title":result[i].list_name});
                
            }
            //console.log(result);
        });
        // var xhr = new XMLHttpRequest();

        // xhr.open("GET", "http://127.0.0.1:8888/getLists", false);
        // xhr.send();

        // var result = xhr.responseText;
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
            $scope.response=answ;
            result =answ;
            //console.log(result);
        });
    }

   
    
});