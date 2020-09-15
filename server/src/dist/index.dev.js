"use strict";

// Init Package
var express = require('express');

var app = express();

var cors = require('cors');

var path = require('path'); // Graphql package


var _require = require('apollo-server-express'),
    ApolloServer = _require.ApolloServer;

var _require2 = require('graphql-tools'),
    makeExecutableSchema = _require2.makeExecutableSchema; // Middleware for auth;


var isAuth = require('./middleware/is-auth'); // Connect db


var connectDB = require('./db');

connectDB(); // Import schema typeDefs and path for graphql

var typeDefs = require('./apollo-graphql/typeDefs');

var resolvers = require('./apollo-graphql/resolvers');

var graphqlPath = '/graphql'; // Make apollo server

var server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: function context(_ref) {
    var req, res;
    return regeneratorRuntime.async(function context$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req, res = _ref.res;
            return _context.abrupt("return", {
              req: req,
              res: res
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  }
}); // Middleware

app.use(express.json());
app.use(cors());
app.use(isAuth); // Static for img folder

app.use('/img-avatar', express["static"](path.join(__dirname, 'images/img-avatar'))); // Link for access card-img

app.use('/img-card', express["static"](path.join(__dirname, 'images/img-card'))); // handle production

if (process.env.NODE_ENV = 'production') {
  // static folder
  app.use(express["static"](__dirname + '/public/')); // handle SPA

  app.get(/.*/, function (req, res) {
    return res.sendFile(__dirname + '/public/index.html');
  });
} // Graphql
//// Endpoint


server.applyMiddleware({
  app: app,
  path: graphqlPath
}); // Route
// PORT

var PORT = process.env.PORT || 5000; // Run server

app.listen(PORT, function () {
  console.log("Server Running on port ".concat(PORT));
});