import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props){
        super(props)
        this.state = {
        isLoggedIn:true
        }
    }


////////below line FIRST approaches WRITING IF AND ELSE OUTSIDE OF THE JSX /////////////

//     render() {
//         if(this.state.isLoggedIn === false){
//             return (
//                 <div>
//                     Welcome Peoples
//                 </div>
//             )
//         }else{
//             return (
//                 <div>
//                    Lets Drink:  technically return statement is a JSX we cannot write if else inside of it 
//                 </div>
//             )
//         }
//         // return (
//         //     <div>
//         //         <div><h1>WELCOME PEOPLES</h1></div>
//         //         <div><h1>LETS DRINK</h1></div>
//         //     </div>
//         // )
//     }
// }


////// SECOND approch ELEMENT VARIABLE APPROACH //////////

// render(){
//     let message
//     if(this.state.isLoggedIn){
//         message = <div>Welcome myself 2000000000 times</div>
//     }else{
//         message = <div>Welcome Guests</div>
//     }
//     return (message)
// }
// }

///export default UserGreeting

//////////////// THIRD APPRCH TERNARY APPROCH: HERE YOU CAN WRITE IF ELSE INSIDE THE JSX ////////////

// render(){
//     return this.state.isLoggedIn ? 
//     (<h1> Hi myself</h1>) : (<h1> hello all peopples</h1>)
// }
// }

///export default UserGreeting

////////// FOURTH and FINAL APPROACHES THE SHORT CIRUIT OPERATOR////////////

// render(){
//     return this.state.isLoggedIn && <div>Welcome myself</div>  ////on;y if it is true then only it works, it doesnot even bother to check out the false condition
// }
// }
// export default UserGreeting