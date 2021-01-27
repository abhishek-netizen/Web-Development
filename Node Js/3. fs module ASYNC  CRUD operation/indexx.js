//1. Create a folder named tonyStark
const fs = require('fs')

fs.mkdir('tonyStarkk',(err,data)=>{
    console.log(err)
    console.log(data)
})

//2. create a file in it named bio.txt and data into it

fs.writeFile('tonyStark/bio.txt',"i am iron man",(err)=>{
console.log(err)
})

//3. Add more data at the end of existing data

fs.appendFile('tonyStark/bio.txt',' and i am inevitable',(err)=>{
console.log(err)
})

//4. Read data without getting buffer data at first

fs.readFile('tonyStark/bio.txt','UTF-8',(err,data)=>{
    console.log(err)
    console.log(data)
})

//5. rename the file name to mybio.txt

fs.rename('tonyStark/bio.txt','mybio.txt',(err)=>{
    console.log(err)
})
console.log('rename completed')

//6. now delete both the file and the folder

// unlinking the file
fs.unlink('mybio.txt',(err)=>{
    console.log(err)
})

//deleteing the folder

fs.rmdir('tonyStark',(err)=>{
console.log(err)
})