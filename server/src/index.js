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
const keyDB = process.env.PASSWORD || null ;
const nameDB = process.env.DB_NAME || null ;
console.log(keyDB,nameDB),'this in index js';
connectDB(keyDB,nameDB);

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
    uploads :{
        maxFieldSize : 20000000,
        maxFileSize : 20000000,
    }
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
if (process.env.NODE_ENV === 'production') {
    console.log('production');
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


// PORT
const PORT = process.env.PORT || 5000;


// Run server
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`)
})