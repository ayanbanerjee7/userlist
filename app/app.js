(function () {
    'use strict';

    angular
        .module('userListApp', ['ngRoute'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider','$interpolateProvider'];
    function config($routeProvider, $locationProvider, $interpolateProvider) {
        
        $interpolateProvider.startSymbol('__');
        $interpolateProvider.endSymbol('__');
        
        $routeProvider
            .when('/userlist', {
                controller: 'UserController',
                templateUrl: '/views/userlist.view.html',
                controllerAs: 'vm'
            })
            
            .when('/other', {
                controller: 'OtherController',
                templateUrl: '/views/other.view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/userlist' });
    }

    run.$inject = ['$rootScope', '$location', '$http'];
    function run($rootScope, $location, $http) {
    

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            
            // redirect to login page if not logged in and trying to access a restricted page
            
            var restrictedPage = $.inArray($location.path(), ['/userlist']) === -1;
            if ($location.path() && restrictedPage) {
                var answer = confirm("Are you sure you want to leave this page? Please make sure you have save your all unsaved data before leaving.")
                if (!answer) {
                    event.preventDefault();
                }
              //$location.path('/userlist'); // Another way of redirecting
            }
        });
    }

})();