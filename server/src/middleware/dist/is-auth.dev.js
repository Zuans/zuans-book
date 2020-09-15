"use strict";

var jwt = require('jsonwebtoken');

var dotenv = require('dotenv');

dotenv.config();

module.exports = function _callee(req, res, next) {
  var token, decodeToken;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          token = req.get('authorization');

          if (token) {
            _context.next = 4;
            break;
          }

          req.isAuth = false;
          return _context.abrupt("return", next());

        case 4:
          token = req.get('authorization').split(" ")[1];

          if (!(!token || token === "")) {
            _context.next = 8;
            break;
          }

          req.isAuth = false;
          return _context.abrupt("return", next());

        case 8:
          _context.prev = 8;
          _context.next = 11;
          return regeneratorRuntime.awrap(jwt.verify(token, process.env.TOKEN_SECRET));

        case 11:
          decodeToken = _context.sent;
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](8);
          req.isAuth = "expired";
          return _context.abrupt("return", next());

        case 18:
          if (decodeToken) {
            _context.next = 21;
            break;
          }

          req.isAuth = false;
          return _context.abrupt("return", next());

        case 21:
          req.userId = decodeToken.user;
          req.isAuth = true;
          return _context.abrupt("return", next());

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[8, 14]]);
};