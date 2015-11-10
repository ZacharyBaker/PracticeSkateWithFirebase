angular.module('skateApp', ['ui.router'])

.constant('fb', {
	url: 'https://skateapp.firebaseio.com/'
})

.config(function($urlRouterProvider, $stateProvider){
	
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'templates/loginTmpl.html',
			controller: 'loginCtrl'
		})
		
		.state('state', {
			url: '/state/:state',
			templateUrl: 'templates/stateTmpl.html',
			controller: 'mainCtrl'
		})
		.state('park', {
			url: '/state/:state/:park',
			templateUrl: 'templates/parksTmpl.html',
			controller: 'parkCtrl'
		})
		
		
		
	$urlRouterProvider
		.otherwise('/login');
	
})