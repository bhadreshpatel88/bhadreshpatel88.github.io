angular.module('myApp', [])
	.controller('MyCtrl', function ($scope) {
		
		$scope.gender = "male";
		$scope.submitted = false;
		$scope.homePage = false;

		// $scope.madLibs = {
		// 	name: 				'name',
		// 	jobtitle: 			'job title',
		// 	tedioustask: 		'tedious task',
		// 	dirtytask: 			'dirty task',
		// 	celebrity: 			'celebrity',
		// 	uselessskill: 		'useless skill',
		// 	obnoxiouscelebrity: 'obnoxious celebrity',
		// 	hugenumber:  		'huge number',
		// 	adjective: 			'adjective'
		// };

		// Watch gender change.
		$scope.$watch('gender', function () {
			if ($scope.gender === 'male') {
				$scope.he_she = 'he';
				$scope.his_her = 'his';
			} else {
				$scope.he_she = 'she';
				$scope.his_her = 'her';
			}
		})

		// Submit the form.
		$scope.submit = function () {
		    if(!$scope.madLibForm.$error.required){
		      $scope.submitted = true;
			}
		}

		// Reset the form
		$scope.reset = function () {
			$scope.homePage = true;
			$scope.submitted = false;
			$scope.madLibs = '';
		}
	});