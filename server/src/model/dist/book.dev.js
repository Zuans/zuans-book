"use strict";

var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  name: String,
  genre: String,
  author_id: String,
  description: String,
  photo: {
    path: String,
    description: String
  },
  date: Date
});
module.exports = mongoose.model('Book', bookSchema);