const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID }
    = require('graphql');

// Import Model
const Author = require('../model/author');
const Book = require('../model/book');


// Import Type
const { BookType, AuthorType } = require('./types');


// Query

const query = new GraphQLObjectType({
    name: 'query',
    fields: () => ({
        book: {
            type: BookType,
            args: {
                id: { type: GraphQLID }
            },
            async resolve(parent, args) {
                try {
                    const response = await Book.findById(args.id);
                    return await response
                } catch (error) {
                    return error;
                }
            }
        },
        books: {
            type: GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({}).then(data => data).catch(error => error);
            }
        },
        author: {
            type: AuthorType,
            args: {
                id: { type: GraphQLID },
            },
            resolve(parent, args) {
                return Author.findById(args.id).then(data => data).catch(error => error);
            }
        },
        authors: {
            type: GraphQLList(AuthorType),
            resolve(parent, args) {
                return Author.find({}).then(data => data).catch(error => error)
            }
        }
    })
})

// Mutation

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                age: { type: GraphQLNonNull(GraphQLInt) },
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age,
                })
                return author.save();
            }
        },
        addBooks: {
            type: BookType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                genre: { type: GraphQLNonNull(GraphQLString) },
                author_id: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    author_id: args.author_id
                });
                return book.save()
            }
        }
    })
})


module.exports = new GraphQLSchema({
    query: query,
    mutation: mutation
})