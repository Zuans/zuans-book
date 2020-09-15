"use strict";

// Import all model
var Book = require('../model/book');

var Author = require('../model/author');

var User = require('../model/user');

var Genre = require('../model/genre'); // Import package


var Path = require('path');

var jwt = require('jsonwebtoken');

var dotenv = require('dotenv');

var bcrypt = require('bcrypt');

var _require = require('fs'),
    createWriteStream = _require.createWriteStream,
    mkdir = _require.mkdir,
    unlink = _require.unlink;

var shortid = require('shortid');

dotenv.config();

var uploadFile = function uploadFile(value, folder) {
  var dirPath, _ref, stream, filename, mimetype, result;

  return regeneratorRuntime.async(function uploadFile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dirPath = Path.join(__dirname, "../images/".concat(folder)); // Make directory for image

          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(mkdir(dirPath, {
            recursive: true
          }, function (err) {
            if (err) throw new Error(err);
            return console.log('Make directory successfully');
          }));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(processUpload(value, dirPath));

        case 6:
          _ref = _context.sent;
          stream = _ref.stream;
          filename = _ref.filename;
          mimetype = _ref.mimetype;
          _context.next = 12;
          return regeneratorRuntime.awrap(storeFile({
            stream: stream,
            filename: filename,
            mimetype: mimetype
          }, dirPath));

        case 12:
          result = _context.sent;
          _context.next = 15;
          return regeneratorRuntime.awrap(result);

        case 15:
          return _context.abrupt("return", _context.sent);

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", new Error(_context.t0));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 18]]);
};

var processUpload = function processUpload(upload) {
  var _ref2, createReadStream, filename, mimetype, stream, file;

  return regeneratorRuntime.async(function processUpload$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(upload);

        case 2:
          _ref2 = _context2.sent;
          createReadStream = _ref2.createReadStream;
          filename = _ref2.filename;
          mimetype = _ref2.mimetype;
          stream = createReadStream(); // Store img to  folder

          file = {
            stream: stream,
            filename: filename,
            mimetype: mimetype
          };
          return _context2.abrupt("return", file);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var storeFile = function storeFile(_ref3, dirPath) {
  var stream, filename, mimetype, id, path, writeStream;
  return regeneratorRuntime.async(function storeFile$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          stream = _ref3.stream, filename = _ref3.filename, mimetype = _ref3.mimetype;
          id = shortid.generate();
          path = "".concat(dirPath, "/").concat(id, "-").concat(filename);
          filename = "".concat(id, "-").concat(filename); // createWriteStream write our file to directory

          writeStream = new Promise(function (resolve, reject) {
            stream.pipe(createWriteStream(path)).on('finish', function () {
              return resolve({
                path: path,
                mimetype: mimetype,
                filename: filename
              });
            }).on('error', reject);
          });
          return _context3.abrupt("return", writeStream);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var resolvers = {
  Query: {
    book: function book(root, _ref4) {
      var id;
      return regeneratorRuntime.async(function book$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = _ref4.id;
              return _context4.abrupt("return", Book.findById(id).then(function (result) {
                return result;
              })["catch"](function (error) {
                return new Error(error);
              }));

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      });
    },
    books: function books(root, args) {
      return regeneratorRuntime.async(function books$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(Book.find({}).then(function (result) {
                return result;
              })["catch"](function (error) {
                return new Error(error);
              }));

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      });
    },
    author: function author(root, _ref5) {
      var id;
      return regeneratorRuntime.async(function author$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              id = _ref5.id;
              return _context6.abrupt("return", Author.findById(id).then(function (result) {
                return result;
              })["catch"](function (error) {
                return new Error(error);
              }));

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      });
    },
    authors: function authors(root, args) {
      return regeneratorRuntime.async(function authors$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return regeneratorRuntime.awrap(Author.find({}).then(function (result) {
                return result;
              })["catch"](function (error) {
                return new Error(error);
              }));

            case 2:
              return _context7.abrupt("return", _context7.sent);

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      });
    },
    authUser: function authUser(root, _ref6) {
      var email, password, user, isEqual, token;
      return regeneratorRuntime.async(function authUser$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              email = _ref6.email, password = _ref6.password;
              _context8.next = 3;
              return regeneratorRuntime.awrap(User.findOne({
                email: email
              }));

            case 3:
              user = _context8.sent;

              if (user) {
                _context8.next = 6;
                break;
              }

              return _context8.abrupt("return", new Error("User doesn't exist!"));

            case 6:
              _context8.next = 8;
              return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

            case 8:
              isEqual = _context8.sent;

              if (isEqual) {
                _context8.next = 11;
                break;
              }

              return _context8.abrupt("return", new Error("Password Doens't match!"));

            case 11:
              token = jwt.sign({
                user: user._id,
                email: user.email,
                user_type: user.user_type
              }, process.env.TOKEN_SECRET, {
                expiresIn: '2h'
              });
              return _context8.abrupt("return", {
                accessToken: token,
                userId: user._id,
                tokenExpire: 2
              });

            case 13:
            case "end":
              return _context8.stop();
          }
        }
      });
    },
    user: function user(root, args, _ref7) {
      var _ref7$req, userId, isAuth, data;

      return regeneratorRuntime.async(function user$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _ref7$req = _ref7.req, userId = _ref7$req.userId, isAuth = _ref7$req.isAuth;

              if (!(isAuth === "expired")) {
                _context9.next = 3;
                break;
              }

              throw new Error('Your session is expired Please login again');

            case 3:
              _context9.next = 5;
              return regeneratorRuntime.awrap(User.findById(userId));

            case 5:
              data = _context9.sent;
              return _context9.abrupt("return", data);

            case 7:
            case "end":
              return _context9.stop();
          }
        }
      });
    },
    genres: function genres(root, args) {
      return regeneratorRuntime.async(function genres$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return regeneratorRuntime.awrap(Genre.find({}));

            case 2:
              return _context10.abrupt("return", _context10.sent);

            case 3:
            case "end":
              return _context10.stop();
          }
        }
      });
    },
    txtBook: function txtBook(root, _ref8) {
      var key, data;
      return regeneratorRuntime.async(function txtBook$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              key = _ref8.key;
              _context11.prev = 1;
              _context11.next = 4;
              return regeneratorRuntime.awrap(Book.find({
                name: {
                  $regex: new RegExp(key),
                  $options: 'i'
                }
              }));

            case 4:
              data = _context11.sent;
              return _context11.abrupt("return", data);

            case 8:
              _context11.prev = 8;
              _context11.t0 = _context11["catch"](1);
              console.log(_context11.t0);

            case 11:
            case "end":
              return _context11.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  },
  Mutation: {
    addAuthor: function addAuthor(root, _ref9) {
      var name, age, author;
      return regeneratorRuntime.async(function addAuthor$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              name = _ref9.name, age = _ref9.age;
              _context12.prev = 1;
              author = new Author({
                name: name,
                age: age
              });
              _context12.next = 5;
              return regeneratorRuntime.awrap(author.save());

            case 5:
              return _context12.abrupt("return", _context12.sent);

            case 8:
              _context12.prev = 8;
              _context12.t0 = _context12["catch"](1);
              return _context12.abrupt("return", _context12.t0);

            case 11:
            case "end":
              return _context12.stop();
          }
        }
      }, null, null, [[1, 8]]);
    },
    addBook: function addBook(root, _ref10) {
      var name, genre, description, user_add, author_id, photo, detailPhoto, hasImg, book, _book;

      return regeneratorRuntime.async(function addBook$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              name = _ref10.name, genre = _ref10.genre, description = _ref10.description, user_add = _ref10.user_add, author_id = _ref10.author_id, photo = _ref10.photo;
              _context13.next = 3;
              return regeneratorRuntime.awrap(photo);

            case 3:
              hasImg = _context13.sent;
              _context13.prev = 4;

              if (!hasImg) {
                _context13.next = 15;
                break;
              }

              _context13.next = 8;
              return regeneratorRuntime.awrap(uploadFile(hasImg, 'img-card'));

            case 8:
              detailPhoto = _context13.sent;
              book = new Book({
                name: name,
                genre: genre,
                description: description,
                author_id: author_id,
                user_add: user_add,
                photo: {
                  filename: detailPhoto.filename,
                  description: 'Hello world'
                },
                date: Date.now()
              });
              _context13.next = 12;
              return regeneratorRuntime.awrap(book.save());

            case 12:
              return _context13.abrupt("return", _context13.sent);

            case 15:
              _book = new Book({
                name: name,
                genre: genre,
                description: description,
                author_id: author_id,
                user_add: user_add,
                date: Date.now()
              });
              return _context13.abrupt("return", _book.save());

            case 17:
              _context13.next = 22;
              break;

            case 19:
              _context13.prev = 19;
              _context13.t0 = _context13["catch"](4);
              return _context13.abrupt("return", _context13.t0);

            case 22:
            case "end":
              return _context13.stop();
          }
        }
      }, null, null, [[4, 19]]);
    },
    addUser: function addUser(root, _ref11) {
      var username, email, password, avatar, avatarImg, dirImg, avatarData, data, getSalt, hashPassword, user, path;
      return regeneratorRuntime.async(function addUser$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              username = _ref11.username, email = _ref11.email, password = _ref11.password, avatar = _ref11.avatar;
              _context14.next = 3;
              return regeneratorRuntime.awrap(avatar);

            case 3:
              avatarImg = _context14.sent;
              dirImg = 'img-avatar';

              if (!avatarImg) {
                _context14.next = 10;
                break;
              }

              _context14.next = 8;
              return regeneratorRuntime.awrap(uploadFile(avatarImg, dirImg));

            case 8:
              data = _context14.sent;
              avatarData = data;

            case 10:
              _context14.next = 12;
              return regeneratorRuntime.awrap(bcrypt.genSalt(10));

            case 12:
              getSalt = _context14.sent;
              _context14.next = 15;
              return regeneratorRuntime.awrap(bcrypt.hash(password, getSalt)["catch"](function (error) {
                return new Error(error);
              }));

            case 15:
              hashPassword = _context14.sent;
              _context14.prev = 16;
              user = new User({
                username: username,
                email: email,
                password: hashPassword,
                user_type: 'user',
                avatar: {
                  filename: avatarData.filename
                }
              });
              _context14.next = 20;
              return regeneratorRuntime.awrap(user.save());

            case 20:
              return _context14.abrupt("return", _context14.sent);

            case 23:
              _context14.prev = 23;
              _context14.t0 = _context14["catch"](16);
              path = Path.join(__dirname, "../images/".concat(dirImg, "/").concat(avatarData.filename));
              if (avatarImg) unlink(path, function (err) {
                if (err) throw Error(err);
                console.log('delete file successfully');
              });
              return _context14.abrupt("return", _context14.t0);

            case 28:
            case "end":
              return _context14.stop();
          }
        }
      }, null, null, [[16, 23]]);
    },
    addGenre: function addGenre(root, _ref12) {
      var name, newGenre;
      return regeneratorRuntime.async(function addGenre$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              name = _ref12.name;
              _context15.prev = 1;
              newGenre = new Genre({
                name: name
              });
              _context15.next = 5;
              return regeneratorRuntime.awrap(newGenre.save());

            case 5:
              return _context15.abrupt("return", _context15.sent);

            case 8:
              _context15.prev = 8;
              _context15.t0 = _context15["catch"](1);
              console.log(_context15.t0);

            case 11:
            case "end":
              return _context15.stop();
          }
        }
      }, null, null, [[1, 8]]);
    },
    likedBook: function likedBook(root, _ref13, _ref14) {
      var bookId, userId, user;
      return regeneratorRuntime.async(function likedBook$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              bookId = _ref13.bookId;
              userId = _ref14.req.userId;
              _context16.prev = 2;
              _context16.next = 5;
              return regeneratorRuntime.awrap(User.updateOne({
                _id: userId
              }, {
                $push: {
                  likedBook_id: bookId
                }
              }));

            case 5:
              user = _context16.sent;
              return _context16.abrupt("return", {
                success: 'Book successfully added'
              });

            case 9:
              _context16.prev = 9;
              _context16.t0 = _context16["catch"](2);
              throw new Error(_context16.t0);

            case 12:
            case "end":
              return _context16.stop();
          }
        }
      }, null, null, [[2, 9]]);
    },
    unlikedBook: function unlikedBook(root, _ref15, _ref16) {
      var bookId, userId, data;
      return regeneratorRuntime.async(function unlikedBook$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              bookId = _ref15.bookId;
              userId = _ref16.req.userId;
              _context17.prev = 2;
              _context17.next = 5;
              return regeneratorRuntime.awrap(User.updateOne({
                _id: userId
              }, {
                $pull: {
                  likedBook_id: bookId
                }
              }));

            case 5:
              data = _context17.sent;
              return _context17.abrupt("return", {
                success: 'Book Successfully removed '
              });

            case 9:
              _context17.prev = 9;
              _context17.t0 = _context17["catch"](2);
              throw new Error(_context17.t0);

            case 12:
            case "end":
              return _context17.stop();
          }
        }
      }, null, null, [[2, 9]]);
    }
  },
  Book: {
    author: function author(root, args) {
      return regeneratorRuntime.async(function author$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              if (!(!root.author_id || root.author_id == "")) {
                _context18.next = 2;
                break;
              }

              return _context18.abrupt("return", null);

            case 2:
              _context18.next = 4;
              return regeneratorRuntime.awrap(Author.findById(root.author_id).then(function (result) {
                return result;
              })["catch"](function (error) {
                return new Error(error);
              }));

            case 4:
              return _context18.abrupt("return", _context18.sent);

            case 5:
            case "end":
              return _context18.stop();
          }
        }
      });
    }
  },
  Author: {
    books: function books(root, args) {
      return regeneratorRuntime.async(function books$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _context19.next = 2;
              return regeneratorRuntime.awrap(Book.find({
                author_id: root._id
              }).then(function (result) {
                return result;
              })["catch"](function (error) {
                return new Error(error);
              }));

            case 2:
              return _context19.abrupt("return", _context19.sent);

            case 3:
            case "end":
              return _context19.stop();
          }
        }
      });
    }
  },
  User: {
    likedBook: function likedBook(root, args) {
      var booksId;
      return regeneratorRuntime.async(function likedBook$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              _context21.next = 2;
              return regeneratorRuntime.awrap(root.likedBook_id.map(function _callee(id) {
                var book;
                return regeneratorRuntime.async(function _callee$(_context20) {
                  while (1) {
                    switch (_context20.prev = _context20.next) {
                      case 0:
                        _context20.prev = 0;
                        _context20.next = 3;
                        return regeneratorRuntime.awrap(Book.findById(id));

                      case 3:
                        book = _context20.sent;
                        return _context20.abrupt("return", book);

                      case 7:
                        _context20.prev = 7;
                        _context20.t0 = _context20["catch"](0);
                        console.error(_context20.t0);

                      case 10:
                      case "end":
                        return _context20.stop();
                    }
                  }
                }, null, null, [[0, 7]]);
              }));

            case 2:
              booksId = _context21.sent;
              return _context21.abrupt("return", booksId);

            case 4:
            case "end":
              return _context21.stop();
          }
        }
      });
    }
  }
};
module.exports = resolvers;