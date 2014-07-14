// Defining routes here.
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'tpl/home/home.html'
    })
    .when('/countries', {
      templateUrl: 'tpl/countries/countries.html',
      controller: 'countriesCtrl'
    })
    .when('/countries/:id/:city', {
      templateUrl: 'tpl/country/country.html',
      controller: 'countryCtrl'
    })
    .otherwise({ redirectTo: '/' });
  }
]);