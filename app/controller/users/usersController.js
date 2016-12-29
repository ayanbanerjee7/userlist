(function () {
    'use strict';

    angular
        .module('userListApp')
        .controller('UserController', UserController);

    UserController.$inject = ['$scope', '$filter','UserServices'];
    
    function UserController($scope, $filter,UserServices) {

    // init
    $scope.sort = { sortingOrder : 'lastName',reverse : false };
    $scope.newuser = {id:'',lastName:'',firstName:'',age:'',email:'',isActive:false};
    $scope.title = "Title";
    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 10;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
    $scope.items = UserServices.GetAll();
    $scope.gap = ( $scope.items.length / $scope.itemsPerPage );
    $scope.startItem = 0 ;
    $scope.lastItem = 0 ;
    $scope.addEditUser = false;
    $scope.updateShowingLabel = function(){
        
        $scope.startItem = ($scope.currentPage * $scope.itemsPerPage)+1;
        
        $scope.lastItem = (($scope.startItem-1)+$scope.itemsPerPage);
            
            if($scope.lastItem > $scope.items.length){
                 
                $scope.lastItem = $scope.items.length;
            }
    };
    
    $scope.rollBack = function(){
        $scope.newuser.id = $scope.olduser.id;
        $scope.newuser.lastName = $scope.olduser.lastName;
        $scope.newuser.firstName = $scope.olduser.firstName;
        $scope.newuser.email = $scope.olduser.email;
        $scope.newuser.age = $scope.olduser.age;
        $scope.newuser.isActive = $scope.olduser.isActive;
        $scope.newuser.createdOn = $scope.olduser.createdOn;
        $scope.newuser.lastEdited = $scope.olduser.lastEdited;
        
    }
    
    $scope.editUser = function(user){
        $scope.olduser = user;
        $scope.newuser.id = user.id;
        $scope.newuser.lastName = user.lastName;
        $scope.newuser.firstName = user.firstName;
        $scope.newuser.email = user.email;
        $scope.newuser.age = user.age;
        $scope.newuser.isActive = user.isActive;
        $scope.newuser.createdOn = user.createdOn;
        $scope.newuser.lastEdited = user.lastEdited;
        $scope.addEditUser = true;
    };
    
    $scope.updateUser = function(){
        console.log($scope.newuser);
        $scope.validateDefalut = {isLastName:false,isFirstName:false,isEmail:false};
        if(!($scope.newuser.lastName)){
          $scope.validateDefalut.isLastName = true;
        }
        if(!($scope.newuser.firstName)){
          $scope.validateDefalut.isFirstName = true;
        } 
        if(!($scope.newuser.email)){
           $scope.validateDefalut.isEmail = true;
        }
        if($scope.validateDefalut.isLastName || $scope.validateDefalut.isFirstName || $scope.validateDefalut.isEmail) {return false; }
        $scope.newuser.duplicateEmail = false;
        if($scope.newuser.id){ 
            $scope.newuser.duplicateEmail = UserServices.Update($scope.newuser);
        }else{
            $scope.newuser.duplicateEmail = UserServices.Create($scope.newuser);
        }
        if($scope.newuser.duplicateEmail) {return false; }
        
        $scope.newuser = {id:'',lastName:'',firstName:'',age:'',email:'',isActive:false};
        $scope.addEditUser = false;
        $scope.items = UserServices.GetAll();
        $scope.displayUserList();
    };
    
    
    $scope.deleteUser = function(usedid){
        UserServices.Delete(usedid);
        $scope.items = UserServices.GetAll();
        $scope.displayUserList();
    }
    
    // init the filtered items
    $scope.displayUserList = function () {
        
        // take care of the sorting order
        if ($scope.sort.sortingOrder !== '') {
            $scope.filteredItems = $filter('orderBy')($scope.items, $scope.sort.sortingOrder, $scope.sort.reverse);
        }
        $scope.currentPage = 0;
        // now group by pages
        $scope.groupToPages();
        $scope.updateShowingLabel();
    };
    
  
    // calculate page in place
    $scope.groupToPages = function () {
        $scope.pagedItems = [];
        
        for (var i = 0; i < $scope.filteredItems.length; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
            }
        }
    };
    
    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
        $scope.updateShowingLabel();
    };
    
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
            $scope.currentPage++;
        }
        $scope.updateShowingLabel();
    };

    // functions have been describe process the data for display
    $scope.displayUserList();

}

})();
