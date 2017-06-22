'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Account = mongoose.model('Account'),
    md5 = require('js-md5'),
    _ = require('lodash');

/**
 * Create a Account
 */
exports.create = function(req, res) {
    var account = new Account(req.body);
    account.password = md5(account.password);
    
    account.save(function(err, account){
        if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json({"id":account._id,"username":account.username});
		}
    });
};

/**
 * Show the current Account
 */
exports.read = function(req, res) {
	Account.find().sort('_id').exec(function(err, accounts) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(accounts);
		}
	});
};

/**
 * Update a Account
 */
exports.update = function(req, res) {

};

/**
 * Delete an Account
 */
exports.delete = function(req, res) {

};

/**
 * List of Accounts
 */
exports.list = function(req, res) {

};