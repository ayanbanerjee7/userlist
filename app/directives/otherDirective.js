(function(){
    'use strict';

    angular
        .module('userListApp')
        .directive('myDirective', myDirective);
    
    function myDirective(){
        return {
            restrict: 'AE',
            template: '<a href="{{myUrl}}">{{myUrlText}}</a><span>{{twoWay}}</span>',
            scope: {
                myUrl : '@',
                myUrlText: '@refText',
                twoWay:'='
            }
            
        }
        
    }
})();