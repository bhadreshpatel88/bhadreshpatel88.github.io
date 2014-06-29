angular.module('SameDomainDemo', []).
controller('MyController', function($scope, $http) {
    $scope.getJSONData = function() {
        $http({
        	url: '../js/data.json',
        	method: 'GET'
        })
        .success(function(data) {
            $scope.colors = data;
        });
    };
    $scope.colors = [];
})