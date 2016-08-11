(function () {

    var navItems = function ($scope) {
        var vm = $scope;
        vm.icons = [' fa-search', 'fa-home', 'fa-rocket', 'fa-users', 'fa-gear', 'fa-key', 'fa-book', 'fa-sign-out'];
    };

    navItems.$inject = ['$scope'];
    angular.module('guiModule').controller('navctrl', navItems);

}());