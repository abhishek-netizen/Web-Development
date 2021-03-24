//Function as First-Class Citizens
 //Which means, we can
 //1.Assign to a variable 2.Pass as an argument 3.Return from other functions


//1.Storing to an variable

function sayHello() {
    return "Hello world";
}
 
let func = sayHello; 
console.log(func()) //Calling that aliases
 
//2.Passing function as argument to another function

function greet(message) {
    console.log(message)
}

greet(sayHello); //Not calling sayHello just passing


//3. Return from other functions

function sayHello() {
    return function () {
        return "Hello World";
    }
}

let fn = sayHello();
let message = fn();
console.log(message)
