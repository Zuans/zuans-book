const Book = require('../model/book');
const User = require('../model/user');
const Logs = require('../model/logs');
const Visitor = require('../model/visitor');
const Genre = require('../model/genre');

const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();
const mustache = require('mustache');
const { readFileSync } = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');



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


const genereteToken = async ( id,email,password ) => {
    const token = await jwt.sign({
        id,
        email,
        password,
    },process.env.TOKEN_SECRET,{
        expiresIn : '2h',
    });
    return token;
}

const sendEmailVerify = async (user) => {
    try {
        const template = await readFileSync(path.join(__dirname,'../template/email.html'),'utf8');
        const pass = process.env.EMAIL_PASS;
        const configMail = {
            service : 'gmail',
            auth : {
                user : 'juandev.net@gmail.com',
                pass : pass,
            }
        };

        const {
            username ,
            email
        } = user;

        const token = await genereteToken(user.id,user.email,user.password);

        const varTemp = {
            username,
            email,
            verifyLink : `http://localhost:8080/auth/verify-account/${token}`,
        }

        const transporter = await nodemailer.createTransport(configMail);
        const mail = {
            to : user.email,
            from : 'anonnymous@gmail.com',
            subject : 'Email Verification',
            html : mustache.render(template,varTemp)
        }
        transporter.sendMail(mail);
    } catch(err) {
        console.log(err);
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
    sendEmailVerify,
    compareDay,
    sendLog,
    getGenre,
    newDay,
    delFromLiked
}