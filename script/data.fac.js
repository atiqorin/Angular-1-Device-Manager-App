(function () {

    var dataFactory=function($http){
        factoryData={};
        factoryData.fetchData=function(){
            return $http.get('res/data.json');
        }
        return factoryData;
    };
    dataFactory.$inject=['$http'];
    angular.module("dataModule").factory("dataFactory",dataFactory);

}());
