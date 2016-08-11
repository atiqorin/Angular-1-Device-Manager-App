(function(){

    var dataController=function($scope,dataFactory){
        function init(){
            dataFactory.fetchData().success(function (response) {

                $scope.data=response.data;

            }).error(function(data,status,header,config){
                //log error;
            });
        }

        init();
    };

    dataController.$inject=['$scope','dataFactory'];
    angular.module('dataModule').controller('dataController',dataController);




}());