'use strict';

angular.module('account').factory('Account', ['$resource',
	function($resource) {
		return $resource('members',
		{
			update: {
				method: 'PUT'
			}
		});
	}
]);