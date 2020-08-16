// Init Package
const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose');
const app = express();

// Connect db
const connectDB = require('./db');
connectDB();

// Import schema
const schema = require('./graphql/schema')

// Middleware
app.use(express.json());

// Graphql
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

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