'use strict';

//Setting up route
angular.module('account').config(['$stateProvider',
	function($stateProvider) {
		// Account state routing
		$stateProvider.
		state('create-account', {
			url: '/account/create',
			templateUrl: 'modules/account/views/create-account.client.view.html'
		}).
		state('account', {
			url: '/account/view',
			templateUrl: 'modules/account/views/account.client.view.html'
		});
	}
]);