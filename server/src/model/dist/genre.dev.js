"use strict";

var mongoose = require('mongoose');

var genreSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  }
});
module.exports = mongoose.model('genres', genreSchema);