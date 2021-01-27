// compare Syncronus vs Asyncrounous
const fs = require('fs')

//Syncronus
const syncReader = fs.readFileSync('test.txt', 'UTF-8')
console.log('first')                //output as first and then syncReader output
console.log(syncReader)

//Asyncronus
const asyncReader = fs.readFile('test.txt','UTF-8',(err,data)=>{
    console.log(data)            //output as something else and then asyncReader output
})
console.log('something else')