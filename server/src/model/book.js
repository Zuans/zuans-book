const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    genre: String,
    author_id: String,
    user_add: String,
    description: String,
    photo: {
        path: String,
        description: String,
        filename: String
    },
    date: Date
})

module.exports = mongoose.model('Book', bookSchema);