angular.module('myApp', [])
	.controller('MyCtrl', function ($scope) {
		$scope.madLibs = {
			malename: 			'male name',
			jobtitle: 			'job title',
			tedioustask: 		'tedious task',
			dirtytask: 			'dirty task',
			celebrity: 			'celebrity',
			uselessskill: 		'useless skill',
			obnoxiouscelebrity: 'obnoxious celebrity',
			hugenumber:  		'huge number',
			adjective: 			'adjective'
		};

		$scope.gender = "male";
		$scope.$watch('gender', function () {
			if ($scope.gender === 'male') {
				$scope.he_she = 'he';
				$scope.his_her = 'his';
			} else {
				$scope.he_she = 'she';
				$scope.his_her = 'her';
			}
		})
	});