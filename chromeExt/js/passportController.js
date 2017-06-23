//&#9776 buter
var navOpened=false;
var model = {
    
    login:"",
    password:"",
    loginStatus:""
};

/////////////////////////////**************************************  APP    ******************************//////////////////////////////////////////////    
var passportApp = angular.module("passportApp",[]);

/////////////////////////////**************************************  CONTROLLER    ******************************//////////////////////////////////////////////
passportApp.controller("passportController", function ($scope,$http) {

$scope.list = model;

    $scope.loginFunc = function(searchForm){
        console.log(searchForm);
        $http.post("checkAuth", [searchForm.login,searchForm.password]).success(function (answ) {
            console.log(answ);
            if(answ=="success")
                location.reload(true);
            else
                $scope.list.loginStatus="Ошибка входа";
       });
    }    
    $scope.checkIfEnterKeyWasPressed = function($event){
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            $scope.loginFunc($scope.list);
        }

    };

    /*$http.post("getCountries", "").success(function (answ) {
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
    */
    
    
});//End Controller



