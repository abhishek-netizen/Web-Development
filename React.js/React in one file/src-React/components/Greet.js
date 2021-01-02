// import React from 'react';

// const Greet = props =>{
// console.log(props)
// return( <div>
//         <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//         {props.children}
//         </div>
// )
// }


// export default Greet


// import React from 'react';

// const Greet = ({name,heroName}) =>{
// console.log(props)
// return( <div>
//         <h1>Hello {name} a.k.a {heroName}</h1>
//         {props.children}
//         </div>
// )
// }
// export default Greet

//Destructuing in fuction body

import React from 'react';

const Greet = props =>{
const {name,heroName} = props
return( <div>
        <h1>Hello {name} a.k.a {heroName}</h1>
        {props.children}
        </div>
)
}
export default Greet