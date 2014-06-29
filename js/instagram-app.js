
angular.module('myApp', ['ngAnimate'])

  .controller('instaGramCtrl', function($scope, $http){

    // Search Instagram
    $scope.search = function(keyword){

      if(!$scope.instagramForm.$error.required){

        var url = 'https://api.instagram.com/v1/tags/'+keyword+'/media/recent';

        var params = {
          client_id: "e95e8068418541cf9cf3b913d99c829c",
          callback: "JSON_CALLBACK"
        };

        $http({
          url: url,
          method: 'JSONP',
          params: params
        }).
        success(function(data){
          $scope.results = data.data;

        }).
        error(function(){
          console.log('error');
        });

        $scope.results = [];
        $scope.submitted = true;
        $scope.searchGram = '';
        $scope.query = $scope.searchGram;
      }

    }

  });