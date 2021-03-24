// Pure Functions:-
// We say a function is pure everytime we call given the same arguments its always return same result
// In pure functions we should not have
// 1. No random values 2. No current date and time 3. No global site(DOM, files, db etc) 4.No mutation of parameters

//Benifits of pure function:-
//1. Self Documenting - funcion myFunc(a,b){return a+b } so its self explanotary
//2. Easily Testable - we dont use global state so easier to test
//3. Concurrency - as we not use global state we can run this thing in parallel
//4. Cacheable - if you two arguments, its result 3, we can store it in cache

//Example for pure funtion
function myFunction(number) {
    return number * 2;
}

//Example for impure funtion, every time we call output changes
function myFunction(number) {
    return number * Math.random();
}
