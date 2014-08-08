angular.module('App', [])
	.directive('simple', function () {
		return{
			restrict: 'E',
			scope: {
				name: '@title',
				arr: '='
			},
			controller: function ($scope) {

			},
			templateUrl: 'simple.tpl.html'
		}
	})
;