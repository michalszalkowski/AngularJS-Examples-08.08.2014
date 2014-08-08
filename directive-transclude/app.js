angular.module('App', [])
	.directive('simple', function () {
		return{
			restrict: 'E',
			transclude: true,
			replace: true,
			scope: {
				name: '@title'
			},
			controller: function ($scope) {

			},
			template: '<div><h1>{{name}}</h1><div ng-transclude></div></div>'
		}
	})

	.directive('person', function () {
		return{
			replace: true,
			restrict: 'E',
			transclude: true,
			scope: {
				person: "="
			},
			templateUrl: "person.tpl.html"
		}
	})

	.directive('address', function () {
		return{
			replace: true,
			restrict: 'E',
			scope: {
				city: '@',
				street: '@'
			},
			templateUrl: 'address.tpl.html'
		}
	})
;