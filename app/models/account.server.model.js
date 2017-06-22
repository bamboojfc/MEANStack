'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

function validateLength (v) {
  return v.length > 8;
}

/**
 * Account Schema
 */
var AccountSchema = new Schema({
	username: {
		type: String,
		trim: true,
		index: { unique: true },
		required: 'username cannot be blank'
	},
	password: {
		type: String,
		trim: true,
		required: 'password cannot be blank',
		validate: [validateLength, 'Password cannot be shorter than 8 characters']
	},
	created: {         
        type: Date,  
        default: Date.now 
    },
	name : {
		type: String,
		trim: true,
		required: 'name cannot be blank',
	},
	lastname : {
		type: String,
		trim: true,
		required: 'name cannot be blank',
	}
});

mongoose.model('Account', AccountSchema);