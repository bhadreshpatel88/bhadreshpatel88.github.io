var dApp = angular.module('myApp', []);

	dApp.directive('signForm', function(){
		// Runs during compile
		return {
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			templateUrl: 'sign-up-form.html',
		};
	});