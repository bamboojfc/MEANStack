'use strict';

angular.module('account').factory('Account', ['$resource',
	function($resource) {
		return $resource('members');
	}
]);


angular.module('account').factory('Register', ['$resource',
	function($resource) {
		return $resource('register');
	}
]);