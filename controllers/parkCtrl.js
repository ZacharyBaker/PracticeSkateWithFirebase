angular.module('skateApp')

	.controller('parkCtrl', ['$scope', 'mainService', '$stateParams', function ($scope, mainService, $stateParams) {

		$scope.park = $stateParams.park;

		$scope.singlePark = mainService.getSinglePark($scope.park);

		$scope.getParkMessages = function () {
			$scope.parkMessages = mainService.getMessages($scope.singlePark.name);
			return $scope.parkMessages;
		}
		
		$scope.parkMessages = mainService.getMessages($scope.singlePark.name);


		$scope.sendMessageToService = function () {
			console.log('here is message, name, and user', $scope.message, $scope.singlePark.name, $scope.user);
			mainService.addMessage($scope.message, $scope.singlePark.name, $scope.user);
			$scope.getParkMessages();
			$scope.message = '';
			$scope.user = '';
		}


	}]);