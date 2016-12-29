(function(){
    'use strict';

    angular
        .module('userListApp')
        .directive('searchResultDirective', searchResultDirective);
    
    function searchResultDirective(){
        return {
           restrict: 'AECM',
           templateUrl: 'directives/serchresult.html',
           replace: true,
            transclude:true,
           scope: {
               personObject: "=",
               formattedAddressFunction: "&"
           },
            compile: function(elem,attrs){
                
                console.log('Compiling....');
                console.log(elem);
                
                return {
                     pre: function(scope,element,attrs){
                          console.log("Pre-Linking.......");
                          console.log(element);
                         
                         
                     },
                    post: function(scope,element,attrs){
                          console.log("Post-Linking.......");
                          console.log(scope);
                    }
                }
            }
       }
        
    }
})();