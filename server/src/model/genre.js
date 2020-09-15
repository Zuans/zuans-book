const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('genres', genreSchema);