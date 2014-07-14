angular.module('cc-service', [])

  .constant('CC_API_PREFIX', 'http://api.geonames.org/countryInfoJSON?')
  .constant('CC_API_AUTH', '&username=bhadresh88')
  .constant('CC_NEIGHBORS_PATH', 'http://api.geonames.org/neighboursJSON?country=')
  .constant('CC_SEARCH_PATH', 'http://api.geonames.org/searchJSON?')

  // Countries factory service.
  .factory('Countries', [ 'CC_API_AUTH', 'CC_API_PREFIX', '$http', '$q',
                  function (CC_API_AUTH, CC_API_PREFIX, $http, $q) {
      return function () {
        var defer = $q.defer();
        $http.get(CC_API_PREFIX + CC_API_AUTH, { cache: true })
          .success(function (data) {
            defer.resolve(data);
          });
        return defer.promise;
      };
    }
  ])

  // Countries Neighbors service.
  .factory('Neighbors', ['CC_API_AUTH', '$http', 'NeighborData', 'CC_NEIGHBORS_PATH', '$q',
                  function (CC_API_AUTH, $http, NeighborData, CC_NEIGHBORS_PATH, $q) {
      return function (countryId) {
        var defer = $q.defer();
        $http.get(CC_NEIGHBORS_PATH + countryId + CC_API_AUTH, { cache: true })
          .success(function (data) {
            if (data.totalResultsCount > 0) {
              var countryIds = [];
              for (var n = 0; n < data.geonames.length; n++) {
                countryIds.push(data.geonames[n].countryCode);
              };
              defer.resolve(countryIds);
            };
          });
        return defer.promise;
      };
    }
  ])

  // Countries Neighbors Data service.
  .factory('NeighborData', ['CC_API_AUTH','CC_API_PREFIX','$http','$q',
                    function (CC_API_AUTH, CC_API_PREFIX, $http, $q) {
      return function (countryArray) {
        var countryIds = countryArray.join('&country=');
        var defer = $q.defer();
        $http.get(CC_API_PREFIX + '&country=' + countryIds + CC_API_AUTH, { cache: true })
          .success(function (data) {
            defer.resolve(data.geonames);
          });
        return defer.promise;
      };
    }
  ])

  // Countries Capital Data service.
  .factory('CapitalData', ['CC_API_AUTH','$http','$q','CC_SEARCH_PATH',
                  function (CC_API_AUTH, $http, $q, CC_SEARCH_PATH) {
      return function (countryId, capital) {
        var defer = $q.defer();
        $http.get(CC_SEARCH_PATH + '&name_equals=' + capital + '&country=' + countryId + CC_API_AUTH, { cache: true })
          .success(function (data) {
            defer.resolve(data.geonames[0]);
          });
        return defer.promise;
      };
    }
  ])

  // Country Data service.
  .factory('CountryData', ['CC_API_AUTH','$http','$q','CC_API_PREFIX',
                  function (CC_API_AUTH, $http, $q, CC_API_PREFIX) {
      return function (countryId) {
        var defer = $q.defer();
        $http.get(CC_API_PREFIX + '&country=' + countryId + CC_API_AUTH, { cache: true })
        .success(function (data) {
          defer.resolve(data.geonames[0]);
        });
        return defer.promise;
      };
    }
  ]);