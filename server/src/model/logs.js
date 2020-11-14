const mongoose = require('mongoose');


const logSchema = new mongoose.Schema({
    description : {
        required : true,
        type : String,
    },
    date : {
        type : Date,
        default : Date.now(),
    }
})

module.exports = mongoose.model('logs',logSchema);