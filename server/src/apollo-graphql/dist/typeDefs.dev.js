"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    scalar DateCustom\n\n    type Book {\n        _id : String!\n        name : String!\n        genre : String!\n        date : DateCustom!\n        description : String\n        author : Author\n        photo : File\n        user_add : String\n    }\n\n    type Author {\n        _id : String!\n        name : String!\n        age : Int!\n        books : [Book]\n    }\n\n    type User {\n        _id : String!\n        username : String! \n        password : String!\n        email : String!\n        avatar : File\n        likedBook : [Book]\n    }\n\n    type AuthUser {\n        userId : String!\n        accessToken : String!\n        tokenExpire : Int!\n    }\n\n    type File {\n        filename : String\n        description : String\n        path : String\n    }\n    \n    type Genre {\n        _id : String!\n        name : String!\n    }\n\n    type Status {\n        success : String,\n        error : String,\n    }\n\n    type Query {\n        book(id: String!): Book!\n        books : [Book!]\n        author(id: String!): Author!\n        authors : [Author!]\n        user: User! \n        authUser(email: String!, password: String!): AuthUser!\n        genres : [Genre!]!\n        txtBook( key: String!): [Book]\n    }\n\n    type Mutation {\n        addAuthor(name: String!, age: Int!): Author!\n        addBook(name: String!, genre: String!, description: String, user_add: String ,photo: Upload, author_id: String! ): Book!\n        addUser(username : String!, email: String!, avatar: Upload, password: String!): User!\n        addGenre(name: String!): Genre!\n        likedBook(bookId: String!): Status\n        unlikedBook(bookId: String! bookId: String!): Status\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require("apollo-server"),
    gql = _require.gql;

var _require2 = require('./customScalar'),
    DateCustom = _require2.DateCustom;

var typeDefs = gql(_templateObject());
module.exports = typeDefs;