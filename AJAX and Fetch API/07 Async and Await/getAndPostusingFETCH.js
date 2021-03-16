const fetch = require('node-fetch');

///Get request using fetch api

const someThing = async () => {           // const someThing is a promise
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
}

someThing().then(someThing => console.log(someThing))


const someThing = async () => {          
    const response = await fetch('https://jsonplaceholder.typicode.com/user')
    if (response.ok) {
        const data = await response.json()
        return data
    } else {
        throw new Error('someThing really went wrong, hangtight we will fix that')
    }
    
}

someThing().then(someThing => console.log(someThing)
).catch(err => console.log(err))



/// Post request in fetch api

const fetch = require('node-fetch');
fetch('https://jsonplaceholder.typicode.com/posts/', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({name: "rakesh", place: "bangalore", age:18})
}).then(res => res.json())
  .then(res => console.log(res));