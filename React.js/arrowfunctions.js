import React from "react";
import ReactDOM from "react-dom";
import emojipedia from "../src/emojipedia";

//var numbers = [1,2,3,4,5,6]

//function double(x){
//return x * 2;
//}
//console.log(numbers);

//const newNumbers = numbers.map(double);
//console.log(newNumbers);

//var numbers = [1,2,3,4,5,6]

//var newNumbers = [];
//function double(x){
//newNumbers.push(x * 2);
//}
//numbers.forEach(double);
//console.log(newNumbers)

// lets create above function as anonymous

//var numbers = [1,2,3,4,5,6]
//var newNumbers = [];

//numbers.forEach(function (x){
//newNumbers.push(x * 2);
//});
//console.log(newNumbers)

//var numbers = [1,2,3,4,5,6,10,12,15]

//numbers.filter(function (num){
//return num>10
//})

//console.log(numbers);

//var numbers = [3,56,2,48,5];
//var newNumbers = 0;
//numbers.forEach(function(currentNumber){
//newNumber += currentNumber;
//})

//var newNumber = numbers.reduce(function(accumulator,currentNumber){
//return accumulator + currentNumber;
//})

//var numbers = [3,56,2,48,5]

//const newNumber = numbers.find(function(num){
//return num>10;
//})

//console.log(newNumber);

//var numbers = [2,56,31,25,20]
//const newNumber = numbers.findIndex(function(num){
//return num>10;
//})
//console.log(newNumber)

//const newEmojipedia = emojipedia.map(function(emojiEntry){
//return emojiEntry.meaning.substring(0,100);
//})
//console.log(newEmojipedia)

var numbers = [3, 56, 2, 48, 5];
//Normal function
//const newNumbers = numbers.map(function (x){
//return x * x;
//});
//Arrow function one
//const newNumbers = numbers.map((x)=>{
//return x * x;
//});
//Arrow functiom Two
//const newNumbers = numbers.map(x=>{
//  return x * x;
//});
//Arrow function Three
//const newNumbers = numbers.map(x=>{
//  return x * x;
//});
//Arrow function Four (when you have a single return statement)
//const newNumbers = numbers.map(x => x * x);

//const newNumbers = numbers.map(function(x){
//  return x * 2;
//})

//the arrow incoming
//const newNumbers = numbers.map(x=>x*2);

console.log(newNumbers);

ReactDOM.render(<h1>HI</h1>, document.getElementById("root"));
