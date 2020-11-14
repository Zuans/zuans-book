// const Book = require('./model/book');


// const qryBookFIlter = async (key,author,filter) => {
//     try {
//         const data = await Book.find({
//             $or : [
//                 {
//                     name : {
//                         $regex : new RegExp(key),
//                         $options : "i"
//                     }
//                 },
//                 {
//                     "genre" : 
//                 }
//             ]
//         })
//     } catch(err) {
//         console.log(err);
//     }
// } 