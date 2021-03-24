//Currying should always has to take a single parameter

var fp = require('lodash/fp');

function add(a) {
    return function(b) {
        return a + b;
    }
}

console.log(add(5)(10)) //currying arguments passed in parenthesis instaed of , separation

// in arrow
const add2 = (a) => (b) => a + b;
console.log(add2(5)(5))


// Application of Currying //

const trim = str => str.trim();
//Before currying
// Two arguments
// const wrap = (type,str) => `<${type}>${str}</${type}>`
const wrap = type => str => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase();

const transform = fp.pipe(trim, toLowerCase, wrap("div"))
console.log(transform("JAVASCRIPT")) // <div>javascript</div>