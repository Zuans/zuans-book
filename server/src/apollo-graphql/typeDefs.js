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
        date : DateCustom
        description : String
        author : Author
        photo : File
        user_add : String
    }

    type BooksPaginate {
        books : [Book]
        pageInfo : PageInfo
    }


    type Author {
        _id : String!
        name : String!
        age : Int!
        books : [Book]
    }

    type AuthorsPaginate {
        authors : [Author]
        pageInfo : PageInfo
    }

    type User {
        _id : String!
        username : String! 
        password : String!
        email : String!
        avatar : File
        user_type : String
        likedBook : [Book]
    }

    type PageInfo {
        hasNextPage : Boolean
    }

    type LogDesc {
        description : String
        date : DateCustom
    }

    type AuthUser {
        userId : String!
        accessToken : String!
        tokenExpire : Int!
        userType : String!
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

    type Amount {
        count : Int,
        date  : DateCustom,
        month : String,
    }


    type Query {
        book(id: String!): Book!
        books(limit : Int ) : [Book!]
        booksPage(limit : Int!, page: Int!, key:String, author:String, genre:String ): BooksPaginate!
        txtBook( key: String!): [Book]
        genres : [Genre!]!
        author(id: String!): Author!
        authors : [Author!]
        authorsPage(limit: Int!, page: Int!, key:String ): AuthorsPaginate!
        user: User! 
        authUser(email: String!, password: String!): AuthUser!
        logoutUser( description : String ): LogDesc
        verifyAdmin(password: String): Status
        allLogs: [LogDesc!]
        manyBooks: [Amount]!
        manyVisitor: [Amount]!

    }

    type Mutation {
        addBook(username: String!, genre: String!, description: String, user_add: String ,photo: Upload, author_id: String! ): Book!
        addUser(username : String!, email: String!, avatar: Upload, password: String!): User!
        addVisitor: Amount
        updateBook(bookId:String!, name : String!, genre: String!, description: String, author_id:String, imgDefault:Boolean, photo : Upload ):Book
        deleteBook(bookId:String!): Status
        likedBook(bookId: String!): Status
        unlikedBook(bookId: String! bookId: String!): Status
        addAuthor( name:String!, age:Int!): Author
        updateAuthor( author_id:String!, name:String!, age:Int!): Author
        deleteAuthor( author_id:String! ): Status
        addGenre(name: String!): Genre!
        deleteGenre(genreId: String!): Status
        updateAdmin(username: String!, email:String!, password: String!, avatar: Upload, imgDefault: Boolean ):User
    }

`

module.exports = typeDefs;