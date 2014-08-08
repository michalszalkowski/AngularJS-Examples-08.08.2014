angular.module('App', [])

	.directive('contactForm', function () {
		return{
			restrict: 'E',
			scope: {
				title:'@'
			},
			controller: function ($scope) {
				$scope.submitMe = function(){
					if($scope.mycontact.$valid){
						console.log($scope.contact);
					}else{
						alert('no no no!');
					}
				}
			},
			templateUrl: 'form.tpl.html'
		}
	})
;