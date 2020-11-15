// Import all model
const Book = require('../model/book');
const Author = require('../model/author');
const User = require('../model/user');
const Genre = require('../model/genre');
const Logs = require('../model/logs');
const Visitor = require('../model/visitor');


// Import package
const Path = require('path');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const {
    createWriteStream,
    mkdir,
    unlinkSync
} = require('fs');
const shortid = require('shortid');

// Import helper

const { 
    sendLog, 
    compareDay, 
    getGenre,
    newDay, 
    delFromLiked
} = require('./helper');

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
        } = await processUpload(value);
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


const unlinkImg = async(filename,folder) => {
    try {
        const path = Path.join(__dirname, `../images/${folder}/${filename}`);
        await unlinkSync(path);
        console.log(`${filename} telah berhasil dihapus di file ${folder}`);
    } catch(err) {
        console.log(err)
    }
    return;
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
            const limit = args.limit;
            if(limit) {
                try {
                    const data = await Book.find({})
                        .sort({ "date" : -1 })
                        .limit(limit);
                    return data;
                } catch(err) {
                    new Error(err);
                }
            } else {
                try {
                    const data = await Book.find({})
                        .sort({ "date" : -1 });
                    return data;
                }catch(err) {
                    new Error(err);
                }
            }
        },

        async booksPage(root,{
            limit,
            page,
            key,
            genre,
            author
        }) {
            try {
                const pageSelect = page > 0 ? page - 1 : 0;
                const genreName = await getGenre(genre);
                let data;
                if(genre !== "" && author !== "") {
                     data = await Book.find({

                        $and : [
                            {
                                "name" : {
                                    "$regex" : new RegExp(key),
                                    "$options" : 'i'
                                },
                            },
                            {
                                "genre" : genreName,
                            },
                            {
                                "author_id" : author
                            }
                        ]
                     }).sort({ "date" : -1 })
                        .skip( pageSelect * limit)
                        .limit(limit);
                } else if( genre !==  "") {
                    data = await Book.find({
                        $and : [
                            {
                                "name" : {
                                    "$regex" : new RegExp(key),
                                    "$options" : 'i'
                                }
                            },
                            {
                                "genre" : genreName
                            }
                        ]
                    }).sort({ "date" : -1 })
                      .skip( pageSelect * limit)
                      .limit(limit)
                } else if( author !== "" ) {
                    data = await Book.find({
                        $and : [
                            {
                                "name" : {
                                    "$regex" : new RegExp(key),
                                    "$options" : 'i'
                                }
                            },
                            {
                                "author_id" : author
                            }
                        ]
                    }).sort({ "date" : -1 })
                      .skip( pageSelect * limit)
                      .limit(limit)
                } else if(key) {
                    data = await Book.find({
                        name : {
                            $regex : new RegExp(key),
                            $options : 'i'
                        }
                    }).sort({ "date" : -1 })
                      .skip( pageSelect * limit)
                      .limit(limit);
                } else {
                    data = await Book.find({})
                               .sort({ "date" : -1 })
                               .skip( pageSelect * limit)
                               .limit(limit);
                }
                // data = data.sort({ "date" : -1 })
                //            .skip( pageSelect * limit)
                //            .limit(limit);
                const hasNextPage = await Book.find({})
                    .sort({ "date" : -1 })
                    .skip((pageSelect + 3) * limit )
                    .limit(limit).then( result => result.length <= 0 ? false : true );
                const result = {
                    books : data,
                    pageInfo : {
                        hasNextPage,
                    }
                }
                return result;
            }catch(err) {
                console.log(err);
            }
        },


        async authorsPage(root,{
            limit,
            page,
            key
        }) {
            try {
                if(!key) {
                    const pageSelect = page > 0 ? page - 1 : 0;
                    const authorsData = await Author.find()
                                    .sort({ "name" : 1  })
                                    .skip( pageSelect * limit )
                                    .limit(limit);
                    const hasNextPage = await Author.find({})
                                            .sort({"name" : 1 })
                                            .skip( (page + 3) * limit )
                                            .limit(limit)
                                            .then( result => result.length == 0 ? false : true );
                    return {
                        authors : authorsData,
                        pageInfo : {
                            hasNextPage,
                        },
                    }
                }else {
                    const pageSelect = page > 0 ? page - 1 : 0;
                    const authorsData = await Author.find({
                                        "name" : {
                                            $regex: new RegExp(key),
                                            $options: 'i'
                                        },
                                    })
                                    .sort({ "name" : 1  })
                                    .skip( pageSelect * limit )
                                    .limit(limit);
                    const hasNextPage = await Author.find({
                                                name: {
                                                    $regex: new RegExp(key),
                                                    $options: 'i'
                                                }
                                            })
                                            .sort({"name" : 1 })
                                            .skip( (page + 3) * limit )
                                            .limit(limit)
                                            .then( result => result.length == 0 ? false : true);
                    return {
                        authors : authorsData,
                        pageInfo : {
                            hasNextPage,
                        },
                    }
                }
            } catch(err) {
                console.log(err);
            }
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
                .sort({ "name" : 1 })
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
            const description = `${user.username} has signed in..`;
            await sendLog(description);
            return {
                accessToken: token,
                userId: user._id,
                tokenExpire: 2,
                userType : user.user_type,
            }
        },

        async logoutUser(root,args) {
            const desc = args.username;
            if(!typeof desc == undefined ) {
                try {
                    const description = `${args.description} has logged out..`
                    const log = new Logs({
                        description,
                    });
                    log.save()
                } catch(err) {
                    console.error(err);
                }   
            }
            return;
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
        },

        async allLogs(root) {
            try {
                let logs = await Logs.find({})
                    .sort({ 'date' : -1 })
                    .limit(10);
                logs.forEach( (log,index )=> {
                    const splitLog = log.description.split(" ");
                    const resultLog = [];
                    for( let i = 0; i < splitLog.length; i++ ) {
                        if( splitLog[i].length < 11 && i < 10 ) {
                            resultLog.push(splitLog[i]);
                        } else if(splitLog[i].length >= 11 && i < 10  ) {
                            const shortWord = splitLog[i].slice(0,10);
                            resultLog.push(`${shortWord}...`)
                        } else {
                            resultLog.push('...');
                            break;
                        }
                    }
                    logs[index].description = resultLog.join(" ");
                });
                return logs
            } catch(err) {
                console.log(err);
            }
        },

        async manyBooks(root) {
            const thisMonth = new Date().getMonth() + 1;
            // cuz i use less than equal for get this month data 
            // so the month have selected is mnthSelected + 1
            const mnthSelected = 3;
            const monthIndex = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sept',
                'Okt',
                'Nov',
                'Des'
            ];
            const data = [];
            try {
                for (let i = thisMonth - mnthSelected;  i <= thisMonth ; i++) {
                    if ( i < 1 ) continue;
                    const result = await Book.aggregate([
                        {
                            $project : {
                                month : { $month : "$date" }
                            }
                        },
                        {
                            $match : { month : i }
                        }
                    ]);
                    data.push({
                        month : monthIndex[i-1],
                        count : result.length == 0 ? 0 : result.length + 1,
                    });
                }
                return data;
            } catch(err) {
                console.log(err);
            }
            return ;
        },

        async manyVisitor(root) {
            const d = new Date();
            const rangeSelect = 7;
            const dateStart =  d.getDate() - rangeSelect > 0 ? ( d.getDate() + 1 )  - rangeSelect : 1;
            const end = new Date(d.getFullYear(),d.getMonth(),d.getDate() + 1);
            const start = new Date(d.getFullYear(),d.getMonth(),dateStart);
            try {
                const data = await Visitor.find({
                    "date" : {
                        "$gte" : start,
                        "$lte" : end,
                    }
                });
                return data;
            } catch(err) {
                console.log(err);
            }
        },

        async verifyAdmin(root,{
            password
        },{
            req
        }) {
            try {

                const admin = await User.findOne({
                    "_id" : req.userId,
                    "user_type" : "admin"
                });
                if(!admin) throw new Error("You're not admin!");
                const isValid = await bcrypt.compare(password,admin.password);
                if(isValid) {
                    return {
                        success : "true"
                    }
                } else {
                    return {
                        error : "true"
                    }
                }
            } catch(err) {
                console.log(err);
            }
        }
    },

    Mutation: {
        async addBook(root, {
            name,
            genre,
            description,
            user_add,
            author_id,
            photo
        }) {
            console.log('add nbook function trigger');
            // img uploaded
            const hasImg = await photo;
            try {
                if (hasImg) {
                    const detailPhoto = await uploadFile(hasImg, 'img-card');
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
            } finally {
                await sendLog(`${user_add} has added book '${name}'`);
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
            // If img has upload lets save it
            if (avatarImg) avatarData = await uploadFile(avatarImg, dirImg);
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
                });
                const description = `${username} has signed up`;
                await sendLog(description);
                return await user.save();
            } catch (error) {
                const path = Path.join(__dirname, `../images/${dirImg}/${avatarData.filename}`);
                if (avatarImg) await unlinkSync(path,
                    function (err) {
                        if (err) throw Error(err);
                        console.log('delete file successfully');
                    })
                return error;
            }
        },

        async updateBook(root,args) {
            try {
                const oldBook = await Book.findById(args.bookId);
                const dirImg = "img-card";
                if(oldBook.photo && !args.imgDefault ) {
                    // If user already has a photo lest remove it
                    const filename = oldBook.photo.filename;
                    await unlinkImg(filename,dirImg);
                }
                // Check if user input image
                if(args.photo) {
                    // If user input use has image
                    const photo = await args.photo;
                    const photoData = await uploadFile(photo,dirImg);
                    const bookData = {
                        name : args.name,
                        genre : args.genre,
                        description : args.description,
                        author_id : args.author_id,
                        date : Date.now(),
                        photo : {
                            filename : photoData.filename,
                            description : 'Ngga tau'
                        }      
                    }
                    const { ok } = await Book.updateOne(
                        { _id : args.bookId },
                        { "$set": bookData }
                    );
                    if(ok) return await Book.findById(args.bookId);
                } else if(args.imgDefault) {
                    console.log('pake gambar sebelumnya');
                    const bookData = {
                        name : args.name,
                        genre : args.genre,
                        description : args.description,
                        author_id : args.author_id,
                        date : Date.now(),
                    }
                    const { ok } = await Book.updateOne(
                        { _id : args.bookId },
                        { "$set" : bookData }
                    );
                    if(ok) return await Book.findById(args.bookId);
                } else {
                    console.log('gapake gambar');
                    const bookData = {
                        name : args.name,
                        genre : args.genre,
                        description : args.description,
                        author_id : args.author_id,
                        date : Date.now(),
                    }
                    const { ok } = await Book.updateOne(
                        { _id : args.bookId },
                        { "$set" : bookData,
                          "$unset" : { photo : 1 }
                        },
                    );
                    if(ok) return await Book.findById(args.bookId)
                }
            }catch(err) {
                console.log(err);
            } finally {
                const description = `${args.name} has updated`
                await sendLog(description);
            }
        },

        async deleteBook(root,{ bookId }) {
            console.log('Work');
            try {
                const delBook = await Book.findById(bookId);
                const filename = delBook.photo.filename;
                if(filename) {
                    const folder = 'img-card';
                    await unlinkImg(filename,folder);
                }
                const ok = await delBook.deleteOne();
                if(!ok) throw new Error('Something went wrong');
                await delFromLiked(bookId);
                const description = `Author has deleted ${delBook.name}`;
                await sendLog(description); 
                return { 
                    success :true,
                    error : false,
                }
            } catch(err) {
                console.log(error);
                return { 
                    success : false,
                    error : true 
                }
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

        async addVisitor() {
            try {
                const result = await Visitor.findOne({})
                                    .sort({ "date" : -1 })
                                    .limit(1);
                            // Compare last data date with this date
                if(!result) return await newDay();
                const isSame = compareDay(result.date,new Date());
                if(isSame) {
                    await result.updateOne({
                        $inc : { 
                            "count" :1 
                        }
                    });
                    return;
                }else {
                    const visitor = new Visitor({
                        count : 1,
                        date : Date.now(),
                    });
                    visitor.save();
                    return;
                }
            } catch(err) {
                console.log(err);
            }
        },

        async addAuthor(root,{
            name,
            age,
        }) {
            try {
                const isExit = await Author.findOne({
                    "name" : name,
                });
                if(isExit) return new Error('Author already exist');
                const author = new Author({
                    name,
                    age
                });
                const desc = `Author with name : ${name} has added`;
                await sendLog(desc);
                return await author.save();
            } catch(err) {
                console.log(err);
            }
        },

        async updateAuthor(root,{
            author_id,
            name,
            age
        }) {
            try {
                const isExist = await Author.find({
                    "_id" : {
                        "$ne" : author_id
                    },
                    "name" : name,
                });
                if(isExist.length > 0 ) return new Error('Author Already exist');
                await Author.updateOne(
                    { _id : author_id },
                    { "$set" : {
                        name,
                        age,
                    }}
                );
                return await Author.findById(author_id);
            } catch(err) {
                console.log(err);
            }
        },

        async deleteAuthor(root,{
            author_id,
        }) {
            try {
                const authorDel = await Author.deleteOne({
                    _id : author_id,
                });
                console.log(authorDel);
                return {
                    success : 'Success delete Author',
                }
            } catch(err) {
                console.log(err);
                return {
                    error : err,
                }
            }
        },

        async addGenre(root,{ name }){
            const genre = new Genre({
                name,
            });
            genre.save();
            return genre; 
        },

        async deleteGenre(root,{
            genreId
        }) {
            try {
                const { ok } = await Genre.deleteOne({
                    _id : genreId,
                });
                if(ok) return {
                    success : 'Genre was deleted'
                }
            }catch(err) {
                console.log(err);
                return {
                    error : err,
                }
            }
        },

        async updateAdmin(root,{
            username,
            email,
            password,
            avatar,
            imgDefault
        },{
            req : {
                userId
            }
        }) {
            try {
                // Query admin info
                const admin = await User.findOne({
                    "_id" : userId,
                    "user_type" : "admin" 
                });
                if(!admin) throw new Error("You aren't admin ");
                const filter = { _id : userId };
                // Hashing the password
                const getSalt = await bcrypt.genSalt(10);
                const hashPassword = await bcrypt.hash(password,getSalt);
                if(imgDefault) {
                    try {
                        console.log('pake default gambar');
                        const update = new User({
                            username,
                            email,
                            password : hashPassword
                        });
                        const upsertData = update.toObject();
                        delete upsertData._id
                        const admin = await User.findOneAndUpdate(filter,upsertData,(err,docs) => {
                            if(err) throw new Error(err);
                            return console.log('berhasil update');
                        });
                        return admin;
                    } catch (err) {
                        console.log(err);   
                    }
                }                
                const dirImg = "img-avatar"
                // unlink img
                if(admin.avatar) {
                    const filename =  admin.avatar.filename;
                    await unlinkImg(filename,dirImg);
                } 
                if(avatar) {
                    console.log('menggunakan avatar');
                    const imgAvatar = await avatar;
                    const imgData = await uploadFile(imgAvatar,dirImg);
                    const adminData = {
                        username,
                        email,
                        password : hashPassword,
                        avatar : {
                            filename : imgData.filename,
                        }
                    }
                    const { ok } = await User.updateOne(
                        { "_id" : userId },
                        { "$set" : adminData }
                    );
                    console.log(ok);
                    if(!ok) throw new Error('Something wrong when updating')
                } else {
                    console.log('tidak ada gambar');
                    const adminData = {
                        username,
                        email,
                        password : hashPassword,
                    }
                    const { ok } = await User.updateOne(
                        { _id : userId },
                        { "$set" : adminData,
                          "$unset" : { avatar : 1 }
                        },
                    );
                    if(!ok) throw new Error('Error when updating! ')
                }
            } catch(err) {
                console.log(err);
            } finally {
                return await User.findById(userId);
            }
        }
    },


    Book: {
        async author(root, args) {
            if (!root.author_id || root.author_id == "") return null;
            return await Author.findById(root.author_id)
                .then(result => result )
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