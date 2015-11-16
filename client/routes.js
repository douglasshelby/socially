angular.module('socially').run(function($rootScope, $state){
	$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
		if (error == 'AUTH_REQUIRED'){
			$state.go('parties');
		}
	});
});

angular.module('socially').config(function($urlRouterProvider, $stateProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	
	$stateProvider
		.state('parties',{
			url: '/parties',
			templateUrl: 'client/parties/views/parties-list.html',
			controller: 'PartiesListCtrl'
		})
		.state('partyDetails',{
			url: '/parties/:partyId',
			templateUrl: 'client/parties/views/party-details.html',
			controller: 'PartyDetailsCtrl',
			resolve: {
				"currentUser": function($meteor){
					return $meteor.requireUser();
				}
			}
		});
	$urlRouterProvider.otherwise("/parties");
});