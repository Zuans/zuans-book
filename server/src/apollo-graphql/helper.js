const Book = require('../model/book');
const User = require('../model/user');
const Logs = require('../model/logs');
const Visitor = require('../model/visitor');
const Genre = require('../model/genre');

const sendLog = async (description) => {
    console.log('log Worked')
    try {
        const log = new Logs({
            description,
        });
        await log.save();
    } catch(err) {
        console.log(err)
        return new Error(err);
    }
}


const compareDay = (lastData,thisDay) => {
    const beforeDate = `${lastData.getDate()}/${lastData.getMonth()+1 }/${lastData.getFullYear()}`;
    const nowDate = `${thisDay.getDate()}/${thisDay.getMonth()+1}/${thisDay.getFullYear()}`
    if( beforeDate == nowDate ) {
        return true;
    } else {
        return false;
    }
};

const getGenre = async(genreId) => {
    try {
        if(genreId == "") return "";
        const { name } = await Genre.findById(genreId);
        return name;
    } catch(err) {
        console.log(err);
    }
}


const newDay = async () => {
    try {
    const visitor = new Visitor({
        date : Date.now(),
        count : 1,
    });
    await visitor.save();
    } catch(err) {
        console.log(err);
    }
}

const delFromLiked = async (bookId) => {
    try {
        console.log(bookId);
        const { ok } = await User.updateMany(
            {},
            {
                "$pull" : {
                    likedBook_id : bookId,
                }
            }
        );
        return ok;
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    compareDay,
    sendLog,
    getGenre,
    newDay,
    delFromLiked
}