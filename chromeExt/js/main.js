//&#9776 buter
var model = {
    cur_userList: {

    },
    userLists:[
        //{title:"Russia"},
        
    ],
    url_list:{

    },
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

    //var serverHost="http://193.93.237.224:8888/";
    var serverHost="http://127.0.0.1:8888/";

    $scope.getLists = function() {
        $http.post(serverHost+"getLists").success(function (answ) {
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
                $http.post(serverHost+"addToListExt", postData).success(function (answ) {
                    
                    if(answ=="success"){
                        console.log(answ);    
                        model.addProfileStyle="display: none;";
                        model.okAddProfileStyle="display: inline-block;";
                    }
                });
            }
        ); 
    }
    $scope.addList = function(urllist)
    {
        //console.log("list"+model.cur_userList);
        for(i=0;i<model.url_list.length;i++){
            var tarea = document.getElementById('myTextarea');
             var postData = {"list_id":model.cur_userList,"lnk":model.url_list[i]};
                $http.post(serverHost+"addToListExt", postData).success(function (answ) {
                    if(answ=="success"){
                        console.log(answ); 
                        selectTextareaLine(tarea,i);   
                    }
            });
            //$scope.addToList();
            
            // // selects line 3
        }    
    }  
   
    
});

function selectTextareaLine(tarea,lineNum) {
    lineNum--; // array starts at 0
    var lines = tarea.value.split("\n");

    // calculate start/end
    var startPos = 0, endPos = tarea.value.length;
    for(var x = 0; x < lines.length; x++) {
        if(x == lineNum) {
            break;
        }
        startPos += (lines[x].length+1);

    }

    var endPos = lines[lineNum].length+startPos;

    // do selection
    // Chrome / Firefox

    if(typeof(tarea.selectionStart) != "undefined") {
        tarea.focus();
        tarea.selectionStart = startPos;
        tarea.selectionEnd = endPos;
        return true;
    }

    // IE
    if (document.selection && document.selection.createRange) {
        tarea.focus();
        tarea.select();
        var range = document.selection.createRange();
        range.collapse(true);
        range.moveEnd("character", endPos);
        range.moveStart("character", startPos);
        range.select();
        return true;
    }
}
