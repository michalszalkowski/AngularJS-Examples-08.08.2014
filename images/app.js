angular.module('App', [])
	.controller('ImagesCtrl', function ($scope) {

		$scope.countries = [
			{name: 'China', file: 'china.svg.png'},
			{name: 'Estonia', file: 'estonia.svg.png'},
			{name: 'France', file: 'france.svg.png'},
			{name: 'Japan', file: 'japan.svg.png'},
			{name: 'Poland', file: 'poland.svg.png'},
			{name: 'United_States', file: 'united_States.svg.png'}
		];

	})
;