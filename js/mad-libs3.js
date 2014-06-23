angular.module('myApp', ['ngAnimate'])
	
	.controller('MyCtrl', function($scope) {
		
		// MadLibs Object
		$scope.madLibs = {
			gender: 'male', 
			heShe: "he", 
			hisHer: "his", 
			generateMadLibs: false
		}

		// Submit MadLibs
		$scope.submit = function() {

			// Set male/female value
			if($scope.madLibs.gender == 'male') {
				$scope.madLibs.heShe = "he";
				$scope.madLibs.hisHer = "his";
				$scope.madLibs.himHer = "him"
			} else {
				$scope.madLibs.heShe = "she";
				$scope.madLibs.hisHer	= "her";
				$scope.madLibs.himHer = "her"
			};

			// Submit form.
			if($scope.madLibForm.$valid) {
				$scope.generateMadLibs = true;
			} else {
				$scope.generateMadLibs = false;
			};
		};

		// Reset MadLibs
		$scope.reset = function() {
			$scope.generateMadLibs = false;
		}
	}
);