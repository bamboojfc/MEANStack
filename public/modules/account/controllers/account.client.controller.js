'use strict';

angular.module('account').controller('AccountController', ['$scope','Account','Register',
	function($scope, Account, Register) {
		// Find a list of Member
		$scope.find = function() {
			$scope.members = Account.query();
		};

		// Create new Account
		$scope.create = function() {


			Accounts.save({name: $scope.name, lastname: $scope.lastname, username: $scope.username,password:$scope.password });
		};
	}
]);