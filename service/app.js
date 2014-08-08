angular.module('App', [])

	.service('PersonService', function ($http, $q) {

		var getPerson = function (id) {
			var deferred = $q.defer();

			$http.get('rest/person_'+id+'.json').success(function (data) {
				deferred.resolve({'message': '', 'data': data});
			}).error(function(){
				deferred.resolve({'message': 'we don\'t have any person for you, man', 'data': []});
			});

			return deferred.promise;
		}

		return{
			get: getPerson
		}
	})

	.directive('person', function (PersonService) {
		return {
			restrict: 'E',
			scope: {
				id: '@'
			},
			controller: function ($scope) {
				PersonService.get($scope.id).then(function(person){
					$scope.person = person;
				});
			},
			templateUrl: 'person.tpl.html'
		}
	})

;