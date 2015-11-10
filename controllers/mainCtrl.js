angular.module('skateApp')

	.controller('mainCtrl', ['$scope', 'mainService', '$stateParams', function ($scope, mainService, $stateParams) {

		
		$scope.state = $stateParams.state;

		$scope.stateParks = mainService.getParks($scope.state);

		$scope.addNewPark = function(){
			mainService.addNewPark($scope.newParkName, $scope.newParkAddress, $scope.newParkState, $scope.newParkImgUrl);
			$scope.stateParks = mainService.getParks($scope.state);
			$scope.newParkName = '';
			$scope.newParkAddress = '';
			$scope.newParkState = '';
			$scope.newParkImgUrl = '';
		}
		


	}]);