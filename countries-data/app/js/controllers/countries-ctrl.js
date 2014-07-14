// Countries Controller
myApp.controller('countriesCtrl', ['Countries', '$location', '$scope', '$timeout',

  function (Countries, $location, $scope, $timeout) {

    // Set the loading state true.
    $scope.loading = true;

    // Get countries data and set the loading state to false.
    Countries().then(function (data) {
      $timeout(function() {
        $scope.countries = data.geonames;
        $scope.loading = false;
      }, 100);
    });

    // GO to selected country
    $scope.goToCountry = function (country, capital) {
        $location.path('/countries/' + country + '/' + capital);
    };

  }

]);