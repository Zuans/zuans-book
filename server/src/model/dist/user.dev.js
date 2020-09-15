"use strict";

var mongoose = require('mongoose');

var _require = require('validator'),
    isEmail = _require.isEmail;

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: 'Username is required'
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email is required',
    validate: [isEmail, 'Email must be valid']
  },
  password: {
    type: String,
    required: 'Password is required'
  },
  avatar: {
    filename: {
      type: String
    }
  }
});
module.exports = mongoose.model('User', UserSchema);