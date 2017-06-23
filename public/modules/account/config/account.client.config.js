'use strict';

// Account module config
angular.module('account').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Accounts', 'accounts', 'dropdown', '/account(/create)?');
		Menus.addSubMenuItem('topbar', 'accounts', 'List all members', 'account/view');
	}
]);