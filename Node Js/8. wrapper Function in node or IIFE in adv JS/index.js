//in nodeJs individual files we call them as module and they became private/local scope
//How did they became local scope? it is because of IIFE.
// IIFE called as constructor function (in nodeJS)
// IIFE (immediate invoke function expression) (in advanced JS)

//when we write module.exports and all
//behind the scenes it writes 

//when we write this in nodejs 
console.log(__dirname);

//behind the scenes it works as this
(function (exports,require,module,__filename,__dirname){
    const a = require("fs");
    const name = "vinodh";
    console.log(name);
    module.exports = {sjdhssa}
})

