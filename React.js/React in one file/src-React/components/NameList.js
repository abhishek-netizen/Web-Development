import React from 'react'
//import Person from './Person'
function NameList() {
    const names = ['bruce','clark','diana','bruce']

//     const persons = [
//     {
//       id:1,
//       name:'Bruce',
//       age:30,
//       skills:'react'
//     },
//     {
//         id:2,
//         name:'clark',
//         age:25,
//         skills:'vue',
//     },
//     {
//         id:3,
//         name:'ragnar',
//         age:55,
//         skills:'native'
//     }
// ]

// const personList = persons.map(person =><Person 
// key={person.id} person = {person} /> )
//     return (
//         <div>{personList}</div>
//     )
// }

const nameList = names.map((name,index) =><h2 key={index}>  {name}</h2>)
    return <div>{nameList}</div>
 
}

export default  NameList






