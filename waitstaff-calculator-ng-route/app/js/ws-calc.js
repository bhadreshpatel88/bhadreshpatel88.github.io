	app.config(function($routeProvider){
	    $routeProvider.when('/', {
	        templateUrl: './home.html'
	    })
	    .when('/new-meal', {
	        templateUrl : './new-meal.html',
	        controller : 'newMealCtrl',
	    })
	    .when('/my-earnings', {
	        templateUrl : './my-earnings.html',
	        controller : 'myEarningsCrtl'
	    })
	    .otherwise({
	    	redirectTo : '/'
	    });
	});

	app.controller('navCtrl', function($scope, $location) {
		$scope.isActive = function (path) {
			return path === $location.path();
		}
	});

	app.controller('newMealCtrl', function($scope, wsTipTotal) {
		$scope.wsService = wsTipTotal;
		// Calculate meal details
		$scope.submit = function() {
		    if($scope.waitstaff.$valid) {
		    	$scope.wsService.allCalc($scope.data);
		    }
		};
	});

	app.controller('myEarningsCrtl', function($scope, wsTipTotal) {
		$scope.wsService = wsTipTotal;
		// Reset the form
		$scope.reset = function() {
			$scope.wsService.reset();
		}
	});