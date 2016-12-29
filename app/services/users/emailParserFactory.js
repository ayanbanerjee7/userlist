(function(){
    'use strict';

    angular
        .module('userListApp')
        .factory('EmailParser', EmailParser);
    

    EmailParser.$inject = ['$filter','$interpolate'];
    
    function EmailParser($filter,$interpolate){
        
        var service = {};

        service.parse = parse;

        return service;    
        //get all user data
        function parse(text,context) {
            var template = $interpolate(text);
            return template(context);
        }
    } 
    
    
})();