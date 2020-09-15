const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


module.exports = async (req, res, next) => {
    let token = req.get('authorization');
    if (!token) {
        req.isAuth = false;
        return next();
    }
    token = req.get('authorization').split(" ")[1];
    if (!token || token === "") {
        req.isAuth = false;
        return next()
    }
    let decodeToken;
    try {
        decodeToken = await jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (error) {
        req.isAuth = "expired";
        return next()
    }
    if (!decodeToken) {
        req.isAuth = false;
        return next();
    }
    req.userId = decodeToken.user;
    req.isAuth = true;
    return next();
}