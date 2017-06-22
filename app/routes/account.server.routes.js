'use strict';

module.exports = function(app) {
	var accounts = require('../controllers/account.server.controller');

	app.get('/members',accounts.read);

	app.post('/register',accounts.create);

};