const mongoose = require('mongoose');


const logSchema = new mongoose.Schema({
    count : Number,
    date : Date,
});

module.exports = mongoose.model('visitors',logSchema);