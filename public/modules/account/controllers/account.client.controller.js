'use strict';

angular.module('account').controller('AccountController', ['$scope','Account',
	function($scope, Account) {
		// Find a list of Member
		$scope.find = function() {
			$scope.members = Account.query();
		};
	}
]);