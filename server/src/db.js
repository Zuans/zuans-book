const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async (key,name) => {
    console.log(name);
    console.log(key);
    try {
        await mongoose.connect(`mongodb+srv://juan123:${key}@cluster0.npqqt.mongodb.net/${key}?retryWrites=true&w=majority`,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useFindAndModify : false,
        })
        console.log('Connect to db');
    } catch (error) {
        console.log('Cannot connect to db retry in 5 seconds');
        setTimeout( async () => {
            await connectDB(key,name);
        },5000);
        console.log(error);
    }
}

module.exports = connectDB;