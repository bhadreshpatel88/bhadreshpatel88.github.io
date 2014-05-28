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
	});