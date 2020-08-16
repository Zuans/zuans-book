const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    genre: String,
    author_id: String,
})

module.exports = mongoose.model('Book', bookSchema);