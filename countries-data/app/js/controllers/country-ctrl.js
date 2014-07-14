// City Controller
myApp.controller('countryCtrl', ['CapitalData', 'CountryData', 'Neighbors', 'NeighborData', '$routeParams', '$scope', '$timeout',

  function (CapitalData, CountryData, Neighbors, NeighborData, $routeParams, $scope, $timeout) {

    var id = $routeParams.id;
    var capital = $routeParams.city;
    $scope.city = $routeParams.city;
    $scope.id = $routeParams.id;
    $scope.mapId = $routeParams.id.toLowerCase();
    $scope.loading = true;

    $timeout(function() {
        // Countries neighbors.
      Neighbors(id).then(function (data) {
        NeighborData(data).then(function (neighbors) {
          $scope.neighbors = neighbors;
        });
      });

      // Capital Data.
      CapitalData(id, capital).then(function (data) {
        $scope.capital = data;
        $scope.loading = false;
      });

      // Country Data.
      CountryData(id).then(function (data) {
        $scope.country = data;
      });
    }, 1000);
  }
]);