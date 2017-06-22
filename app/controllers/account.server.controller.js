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
			res.json({'id':account._id,'username':account.username});
		}
    });
};

/**
 * Show the current Account
 */
exports.read = function(req, res) {
    console.log('reading..');
    res.json(req.account);
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

exports.verify = function(req, res) {
    console.log('verifying account.. ',req.account);
    var account = new Account(req.body);
    account.password = md5(account.password);
    //console.log('comparing password : ',account.password, req.account.password);
    if(account.password!=req.account.password){
        return res.status(400).send({
            message: 'Login failed'
        });
    }else{
        res.json(req.account);
    }

};

/**
 * Middle ware
 */
exports.getByUsername = function(req, res, next, username) {
    console.log('get by username: ',username);
    Account.findOne({'username':username}).exec(function(err, account) {
        if (err) return next(err);
        if (!account) {
            return res.status(404).send({
                message: 'Account not found'
            });
        }
        req.account = account;
        next();
    });
};

