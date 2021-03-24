//Practise immutability while working with objects

//Method  one:- Object.assign()
const person = { name : "John" };
const modified = Object.assign({},person,{name: "stepe miochich", age: 45})
console.log(modified);

//Method two:- using spread operator
const person1 = { name: "dana white" };
const alteredObj = { ...person1, name: "ufc president", age: 105 }
alteredObj.city = "NYC"
console.log(alteredObj)


// But spread operator gives us the shallow copy
const person3 = { name: "dana white", address: { country: "usa", city: "nyc" } }
const updatedObj = { ...person3 }
updatedObj.address.city = "florida";
console.log(person3) // { name: 'dana white', address: { country: 'usa', city: 'florida' } }
//Its overwrited the original object because of SHALLOW COPY.

//To solve this problem we have to use DEEP COPY.
const person4 = { name: "dana white", address: { country: "usa", city: "nyc" } }
const deepObejct = { ...person4, address:{...person4.address,country: "japan", city: "tokyo" }}
console.log(person4); //{ name: 'dana white', address: { country: 'usa', city: 'nyc' }
console.log(deepObejct); //{ name: 'dana white', address: { country: 'japan', city: 'tokyo' }}

