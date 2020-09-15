const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://juan123:${process.env.PASSWORD}@cluster0.npqqt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log('Connect to db');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;