//With the help of lodash library
// we can make our code easier

// import { compose, pipe } from 'lodash/fp';

var fp = require('lodash/fp');

const trim = function trim(str) {
    return str.trim();
}

const wrapDiv = function wrapDiv(str) {
    return `<div>${str}</div>`
}

const toLowerCase = function toLowerCase(str) {
    return str.toLowerCase();
}

const transform = fp.compose(wrapDiv, toLowerCase, trim) //from lodash
// const transform = fp.pipe(wrapDiv,toLowerCase,trim) 

const result = transform("JAVASCRIPT")
console.log(result);