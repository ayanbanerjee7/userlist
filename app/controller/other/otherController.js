(function () {
    'use strict';

    angular
        .module('userListApp')
        .controller('OtherController', OtherController);

    OtherController.$inject = ['$scope','$interpolate','EmailParser'];
    function OtherController($scope,$interpolate,EmailParser) {

    // init
      $scope.other = "Hi John!";
        $scope.today = new Date();
        //Set up watch 
        
      $scope.$watch('emailBody', function(body){
       if(body){
           var template = $interpolate(body);
           //$scope.previewText = template({to : $scope.to});
           $scope.previewText = EmailParser.parse(body,{to : $scope.to,other : $scope.other});
       }
      });
        
    $scope.person = {
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
    }
    
    $scope.formattedAddress = function(person) {
      
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
        
    };    
        
    
    }
})();
