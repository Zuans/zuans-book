const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:10115/zuans-books',{
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useFindAndModify : false,
        })
        console.log('Connect to db');
    } catch (error) {
        console.log('Cannot connect to db retry in 5 seconds');
        setTimeout(connectDB,5000);
        console.log(error);
    }
}

module.exports = connectDB;