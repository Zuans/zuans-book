const mongoose = require('mongoose');
const {
    isEmail
} = require('validator');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'Username is required',
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email is required',
        validate: [isEmail, 'Email must be valid'],

    },
    password: {
        type: String,
        required: 'Password is required'
    },
    avatar: {
        filename: {
            type: String
        }
    },
    user_type: String,
    likedBook_id: [],
})

module.exports = mongoose.model('User', UserSchema);