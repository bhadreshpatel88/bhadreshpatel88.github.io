// City Controller
myApp.controller('countryCtrl', ['CapitalData', 'CountryData', 'Neighbors', 'NeighborData', '$routeParams', '$scope', '$timeout',

  function (CapitalData, CountryData, Neighbors, NeighborData, $routeParams, $scope, $timeout) {

    var countryId = $routeParams.id;
    var capital = $routeParams.city;
    $scope.city = $routeParams.city;
    $scope.countryId = $routeParams.id;
    $scope.mapcountryId = $routeParams.id.toLowerCase();
    $scope.loading = true;

    $timeout(function() {
        // Countries neighbors.
      Neighbors(countryId).then(function (data) {
        NeighborData(data).then(function (neighbors) {
          $scope.neighbors = neighbors;
        });
      });

      // Capital Data.
      CapitalData(countryId, capital).then(function (data) {
        $scope.capital = data;
      });

      // Country Data.
      CountryData(countryId).then(function (data) {
        $scope.country = data;
      });

      // Set loading to false.
      $scope.loading = false;
    }, 1000);
  }
]);