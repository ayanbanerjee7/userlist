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

describe('first directive', function(){
    var compile, scope, directiveElem;

    beforeEach(function () {
        angular.module('firstDirectiveApp', [])
            .directive('firstDirective', function(){
                return function(scope, elem){
                    elem.append('<span>This span is appended from directive.</span>');
                };
            });
    });

    beforeEach(function() {
        module('firstDirectiveApp');

        inject(function ($compile, $rootScope) {
            compile=$compile;
            scope=$rootScope.$new();
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
        var compiledDirective = compile(angular.element('<div first-directive></div>'))(scope);
        scope.$digest();
        return compiledDirective;
    }

    it('should have span element', function () {
        var spanElement = directiveElem.find('span');
        expect(spanElement).toBeDefined();
        expect(spanElement.text()).toEqual('This span is appended from directive.');
    });
});

describe('customSort directive', function(){
    beforeEach(function() {
        module('userListApp');

        inject(function ($compile, $rootScope) {
            compile=$compile;
            scope=$rootScope.$new();
        });

        directiveElem = getCompiledCustomSortElement();
        
        
    });
    
    function getCompiledCustomSortElement(){
        
        var elementToCompile =  '<th class="lastName" custom-sort order="lastName" sort="sort">Last Name</th>';
        var compiledDirective = compile(angular.element(elementToCompile))(scope);
        scope.sort = { sortingOrder : 'lastName',reverse : false };
        scope.$digest();
        return compiledDirective;
    }
    
    it('should applied template', function () {
        expect(directiveElem.html()).not.toEqual('');
    });
    
    it('should have `<a>` element', function () {
        var spanElement = directiveElem.find('a');
        expect(spanElement).toBeDefined();
    });
    
    
    it('should get called on a click', function() {

    directiveElem.click();
    scope.sort.reverse;   

  });
    
    it('Labels order (reverse)', function () {
      var isolateScope = directiveElem.isolateScope();
      var sortingOrder = isolateScope.sort.sortingOrder;
        expect(sortingOrder).toEqual('lastName');
        expect(isolateScope.selectedCls("lastName")).toEqual('fa fa-caret-up');
  });

});
