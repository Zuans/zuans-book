const {
    gql
} = require("apollo-server");

const {
    DateCustom
} = require('./customScalar');

const typeDefs = gql `
    scalar DateCustom

    type Book {
        _id : String!
        name : String!
        genre : String!
        date : DateCustom!
        description : String
        author : Author
        photo : File
        user_add : String
    }

    type Author {
        _id : String!
        name : String!
        age : Int!
        books : [Book]
    }

    type User {
        _id : String!
        username : String! 
        password : String!
        email : String!
        avatar : File
        likedBook : [Book]
    }

    type AuthUser {
        userId : String!
        accessToken : String!
        tokenExpire : Int!
    }

    type File {
        filename : String
        description : String
        path : String
    }
    
    type Genre {
        _id : String!
        name : String!
    }

    type Status {
        success : String,
        error : String,
    }

    type Query {
        book(id: String!): Book!
        books : [Book!]
        author(id: String!): Author!
        authors : [Author!]
        user: User! 
        authUser(email: String!, password: String!): AuthUser!
        genres : [Genre!]!
        txtBook( key: String!): [Book]
    }

    type Mutation {
        addAuthor(name: String!, age: Int!): Author!
        addBook(name: String!, genre: String!, description: String, user_add: String ,photo: Upload, author_id: String! ): Book!
        addUser(username : String!, email: String!, avatar: Upload, password: String!): User!
        addGenre(name: String!): Genre!
        likedBook(bookId: String!): Status
        unlikedBook(bookId: String! bookId: String!): Status
    }

`

module.exports = typeDefs;