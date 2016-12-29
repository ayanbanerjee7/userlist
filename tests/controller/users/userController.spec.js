describe('Testing Users List Controller', function() {
    beforeEach(angular.mock.module('userListApp'));
    
    describe('UsersController', function(){
    var scope,ctrl;
        
      beforeEach(
          inject(function($controller){
          scope = {};
          ctrl = $controller('UserController',{$scope:scope});
       }));    
        
        it('Testing scope values defined from the controller', function(){
            expect(scope.title).toBeDefined();
        });
        
        it('Testing scope values matches  from the controller', function(){
            expect(scope.title).toEqual('Title');
            expect(scope.title).toBe('Title');
        });
    });
    
});
