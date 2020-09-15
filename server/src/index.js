// Init Package
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
// Graphql package
const {
    ApolloServer
} = require('apollo-server-express');
const {
    makeExecutableSchema
} = require('graphql-tools');



// Middleware for auth;
const isAuth = require('./middleware/is-auth');

// Connect db
const connectDB = require('./db');
connectDB();

// Import schema typeDefs and path for graphql
const typeDefs = require('./apollo-graphql/typeDefs');
const resolvers = require('./apollo-graphql/resolvers');
const graphqlPath = '/graphql';

// Make apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({
        req,
        res
    }) => ({
        req,
        res
    }),
})

// Middleware
app.use(express.json());
app.use(cors());
app.use(isAuth);
// Static for img folder
app.use('/img-avatar', express.static(path.join(__dirname, 'images/img-avatar')));
// Link for access card-img
app.use('/img-card', express.static(path.join(__dirname, 'images/img-card')));

// handle production
if (process.env.NODE_ENV = 'production') {
    // static folder
    app.use(express.static(path.join(__dirname, '../public/')));

    // handle SPA
    app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
}



// Graphql
//// Endpoint
server.applyMiddleware({
    app,
    path: graphqlPath,
})
// Route
app.get('/', (req, res) => {
    res.send('Hello world');
})


// PORT
const PORT = process.env.PORT;


// Run server
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`)
})