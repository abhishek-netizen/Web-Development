// For immutablility lets import immer 
const immer = require("immer");

let book = { title: "harry potter" };

function publish(book) {
    // book.isPublished = true; //before - mutating
    return immer.produce(book, draftBook => {
        draftBook.isPublished = true;
    });

}

let updated = publish(book);
console.log(updated)  //modified 
console.log(book); // original { title: 'harry potter' }