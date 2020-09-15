// Import all model
const Book = require('../model/book');
const Author = require('../model/author');
const User = require('../model/user');
const Genre = require('../model/genre');

// Import package
const Path = require('path');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const {
    createWriteStream,
    mkdir,
    unlink
} = require('fs');
const shortid = require('shortid');



dotenv.config();


const uploadFile = async (value, folder) => {
    const dirPath = Path.join(__dirname, `../images/${folder}`);
    // Make directory for image
    try {
        await mkdir(dirPath, {
            recursive: true,
        }, (err) => {
            if (err) throw new Error(err);
            return console.log('Make directory successfully');
        });
        const {
            stream,
            filename,
            mimetype
        } = await processUpload(value, dirPath);
        const result = await storeFile({
            stream,
            filename,
            mimetype
        }, dirPath);
        return await result;
    } catch (error) {
        return new Error(error);
    }
}



const processUpload = async (upload) => {
    const {
        createReadStream,
        filename,
        mimetype
    } = await upload;

    const stream = createReadStream();
    // Store img to  folder
    const file = {
        stream,
        filename,
        mimetype
    };
    return file;
}

const storeFile = async ({
    stream,
    filename,
    mimetype
}, dirPath) => {
    const id = shortid.generate();
    const path = `${dirPath}/${id}-${filename}`;
    filename = `${id}-${filename}`;
    // createWriteStream write our file to directory
    const writeStream = new Promise((resolve, reject) => {
        stream.pipe(createWriteStream(path))
            .on('finish', () => resolve({
                path,
                mimetype,
                filename
            }))
            .on('error', reject);
    });
    return writeStream;
}




const resolvers = {
    Query: {

        async book(root, {
            id
        }) {
            return Book.findById(id)
                .then(result => result)
                .catch(error => new Error(error));
        },

        async books(root, args) {
            return await Book.find({})
                .then(result => result)
                .catch(error => new Error(error));
        },


        async author(root, {
            id
        }) {
            return Author.findById(id)
                .then(result => result)
                .catch(error => new Error(error));
        },

        async authors(root, args) {
            return await Author.find({})
                .then(result => result)
                .catch(error => new Error(error));
        },

        async authUser(root, {
            email,
            password
        }) {
            const user = await User.findOne({
                email
            })
            if (!user) return new Error("User doesn't exist!");
            const isEqual = await bcrypt.compare(password, user.password);
            if (!isEqual) return new Error("Password Doens't match!");
            const token = jwt.sign({
                user: user._id,
                email: user.email,
                user_type: user.user_type,
            }, process.env.TOKEN_SECRET, {
                expiresIn: '2h'
            });
            return {
                accessToken: token,
                userId: user._id,
                tokenExpire: 2
            }
        },


        async user(root, args, {
            req: {
                userId,
                isAuth
            }
        }) {
            if (isAuth === "expired") throw new Error('Your session is expired Please login again');
            const data = await User.findById(userId);
            return data;
        },

        async genres(root, args) {
            return await Genre.find({});
        },

        async txtBook(root, {
            key
        }) {
            try {
                const data = await Book.find({
                    name: {
                        $regex: new RegExp(key),
                        $options: 'i'
                    }
                });
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    },

    Mutation: {
        async addAuthor(root, {
            name,
            age
        }) {
            try {
                const author = new Author({
                    name,
                    age
                });
                return await author.save();
            } catch (error) {
                return error;
            }
        },

        async addBook(root, {
            name,
            genre,
            description,
            user_add,
            author_id,
            photo
        }) {
            // img uploaded
            let detailPhoto;
            const hasImg = await photo;
            try {
                if (hasImg) {
                    detailPhoto = await uploadFile(hasImg, 'img-card');
                    const book = new Book({
                        name,
                        genre,
                        description,
                        author_id,
                        user_add,
                        photo: {
                            filename: detailPhoto.filename,
                            description: 'Hello world'
                        },
                        date: Date.now()
                    });
                    return await book.save();
                } else {
                    const book = new Book({
                        name,
                        genre,
                        description,
                        author_id,
                        user_add,
                        date: Date.now()
                    });
                    return book.save();
                }
            } catch (error) {
                return error;
            }
        },

        async addUser(root, {
            username,
            email,
            password,
            avatar
        }) {
            const avatarImg = await avatar;
            const dirImg = 'img-avatar';
            let avatarData;
            if (avatarImg) {
                const data = await uploadFile(avatarImg, dirImg);
                avatarData = data
            }
            const getSalt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, getSalt).catch(error => new Error(error));
            try {
                const user = new User({
                    username,
                    email,
                    password: hashPassword,
                    user_type: 'user',
                    avatar: {
                        filename: avatarData.filename,
                    },
                })
                return await user.save();
            } catch (error) {
                const path = Path.join(__dirname, `../images/${dirImg}/${avatarData.filename}`);
                if (avatarImg) unlink(path,
                    function (err) {
                        if (err) throw Error(err);
                        console.log('delete file successfully');
                    })
                return error;
            }
        },

        async addGenre(root, {
            name
        }) {
            try {
                const newGenre = new Genre({
                    name,
                })
                return await newGenre.save();
            } catch (error) {
                console.log(error);
            }
        },

        async likedBook(root, {
            bookId
        }, {
            req: {
                userId
            }
        }) {
            try {
                const user = await User.updateOne({
                    _id: userId
                }, {
                    $push: {
                        likedBook_id: bookId
                    }
                }, );
                return {
                    success: 'Book successfully added'
                };
            } catch (error) {
                throw new Error(error);
            }
        },
        async unlikedBook(root, {
            bookId
        }, {
            req: {
                userId
            }
        }) {
            try {
                const data = await User.updateOne({
                    _id: userId
                }, {
                    $pull: {
                        likedBook_id: bookId
                    }
                }, );
                return {
                    success: 'Book Successfully removed '
                };
            } catch (error) {
                throw new Error(error);
            }
        },
    },


    Book: {
        async author(root, args) {
            if (!root.author_id || root.author_id == "") return null;
            return await Author.findById(root.author_id)
                .then(result => result)
                .catch(error => new Error(error));
        },
    },



    Author: {
        async books(root, args) {
            return await Book.find({
                    author_id: root._id
                })
                .then(result => result)
                .catch(error => new Error(error));
        }
    },

    User: {
        async likedBook(root, args) {
            const booksId = await root.likedBook_id.map(async (id) => {
                try {
                    const book = await Book.findById(id);
                    return book;
                } catch (error) {
                    console.error(error);
                }
            });
            return booksId;
        }
    }
}
module.exports = resolvers;