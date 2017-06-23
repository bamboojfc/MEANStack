'use strict';

//Setting up route
angular.module('account').config(['$stateProvider',
	function($stateProvider) {
		// Account state routing
		$stateProvider.
		state('account', {
			url: '/account/view',
			templateUrl: 'modules/account/views/account.client.view.html'
		});
	}
]);