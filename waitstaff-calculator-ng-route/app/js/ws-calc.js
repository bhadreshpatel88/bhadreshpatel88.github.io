angular.module('myApp', ['ngRoute'])

	.config(function($routeProvider){
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
	})

	.controller('newMealCtrl', function($scope) {

		// Setting Initial Value
		var initValue = function () {
			$scope.data = {
				charge: {
					subTotal: 0,
					tip: 0,
					total: 0
				},
				earnings: {
					tipTotal: 0,
					mealCount: 0,
					avgTip: 0
				}
			}
		};

		initValue();

		// Calculate meal details
		$scope.submit = function() {
		    if($scope.waitstaff.$valid) {
		    	// Calculate meal charges
		    	$scope.data.charge.subTotal = $scope.data.price + $scope.data.price * $scope.data.rate / 100;
		    	$scope.data.charge.tip = $scope.data.charge.subTotal * $scope.data.tip / 100;
		    	$scope.data.charge.total = $scope.data.charge.subTotal + $scope.data.charge.tip;
		    	// Calculate my earnings
		    	$scope.data.earnings.tipTotal+= $scope.data.tip;
		    	$scope.data.earnings.mealCount++;
		    	$scope.data.earnings.avgTip = $scope.data.earnings.tipTotal / $scope.data.earnings.mealCount;
		    }
		}
	})

	.controller('myEarningsCrtl', function($scope) {
		// Reset the form
		$scope.reset = function() {
			initValue();
		}
	})