//Working with arrays

const numbers = [1, 2, 3];
//Adding
const added = [...numbers, 4]
console.log(added)

const inBeg = [0, ...numbers];
console.log(inBeg);

//what if i wanted to add in the middle
const numberss = [1, 2, 3];
const index = numberss.indexOf(2);
const addedd = [
    ...numberss.slice(0, index),
    4,
    ...numberss.slice(index)
];

console.log(added);

//Removing
const removed = numberss.filter(n => n !== 2);
console.log(removed)

//updating
const upadated = numberss.map(n => n === 2 ? 20 : n);
console.log(upadated);