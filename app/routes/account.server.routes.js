'use strict';

module.exports = function(app) {
	var accounts = require('../controllers/account.server.controller');

	app.get('/members',accounts.list);
	app.get('/members/:username',accounts.read);

	app.post('/register',accounts.create);

	app.post('/login/:username',accounts.verify);

	app.param('username',accounts.getByUsername);

};