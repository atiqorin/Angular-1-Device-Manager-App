(function () {
    //Gui Module
    var guiModule=angular.module("guiModule", []);
    //data Module
    var dataModule=angular.module("dataModule",[]);
    //Main Module
    var app=angular.module("splApp", ['guiModule','dataModule']);


}());
