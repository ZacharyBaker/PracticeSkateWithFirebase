angular.module('skateApp')

	.controller('loginCtrl', ['$scope', 'mainService', '$stateParams', '$state', function ($scope, mainService, $stateParams, $state) {

		$scope.states = mainService.getStates();
		// console.log(mainService.getStates())
		$scope.skateparks = mainService.getData();



		$scope.state = $stateParams.state;

		//changing the state
		$scope.changeState = function (stat){
			$state.go('state', {
				state: stat
			});
			// console.log(stat);
		}
	
	
		
		

	}])