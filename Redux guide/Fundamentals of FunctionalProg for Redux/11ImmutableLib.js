//JS does not prevent object mutation because it is not pure functional langauge so,
//we have to use 3rd party libraries

//Enforcing Immutability

//some of the popular once are
//1.Immutable 2.Immer 3.Mori


//Immutable.JS
const immut = require('immutable');

let book = immut.Map({ title: "Haary potter" });

// function publish(book) {
//     book.isPublished = true;
// }

// publish(book);
// console.log(book.get("title"));
// console.log(book.toJS()) //to convert it into plain js

//On book function

// let book = Map({ title: "Harry potter" })

// function publish(book) {
//     return book.set("isPublished", true)
// }

// book = publish(book)
// console.log(book.toJS());