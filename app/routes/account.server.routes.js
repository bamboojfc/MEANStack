'use strict';

module.exports = function(app) {
	var accounts = require('../controllers/account.server.controller');

	app.get('/members',accounts.list);
	app.route('/members/:username')
		.get(accounts.read)
		.delete(accounts.delete)
		.put(accounts.update);

	app.route('register')
		.post(accounts.isUserExist)
		.post(accounts.create);

	app.post('/login/:username',accounts.verify);

	app.param('username',accounts.getByUsername);

};