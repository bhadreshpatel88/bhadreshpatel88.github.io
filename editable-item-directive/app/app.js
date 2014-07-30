var dApp = angular.module('d-App', []);

dApp.directive('editableD', function() {
    return {
        restrict: 'A',
        transclude: true,
        templateUrl: 'makeEditable.html',
        scope: true,

        link: function(scope, element, attrs) {
            scope.edit = {
               init: function(){ scope.editable = 'false'; scope.showEdit = true; scope.showSave = false; },
               editText: function() { scope.editable = 'true'; scope.showEdit = false; scope.showSave = true; },
               saveText: function() { scope.editable = 'false'; scope.showEdit = true; scope.showSave = false; }
            };
            scope.edit.init();
        }
    }
});


