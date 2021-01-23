import React,{useState} from 'react'
import "./styles.css";

const App = ()=>{

const[fullName,setFullName] = useState({
fname: "",
lname: "",
email: "",
phone:""
})

const inputEvent = (event)=>{

// const value = event.target.value;
// const name = event.target.name;
// Distructuring
const {value,name} = event.target;


setFullName((prevValue)=>{
  console.log(value)

  return{
    ...prevValue,
      [name]:value,
  };
 
/////before above code you have to write all these code
///power of array destructuring.

// if(name === 'fname'){
//   return{fname: value,
//          lname: prevValue.lname,
//          email: prevValue.email,
//          phone: prevValue.phone}
// }else if(name === 'lname'){
//   return{fname: prevValue.fname,
//          lname: value,
//          email: prevValue.email,
//          phone: prevValue.phone}
// }else if(name === 'email'){
//   return{fname: prevValue.fname,
//          lname: prevValue.lname,
//          email: value,
//          phone: prevValue.phone}
// }else if(name === 'phone'){
//   return{fname: prevValue.fname,
//          lname: prevValue.lname,
//          email: prevValue.email,
//          phone: value}
// }


})
}

const onSubmits = (event)=>{ 
event.preventDefault();
} 


  return(
 
    <form onSubmit={onSubmits}>
    <div className="main_div">
    <h1>Hello <br/>{fullName.fname} {fullName.lname}</h1>
    <h2>{fullName.email} <br/>{fullName.phone}</h2>
    <input 
    type="text"
    placeholder = "enter your fistname"
    name="fname"
    value={fullName.fname}
    onChange={inputEvent}
    />
  
    <input 
    type="text"
    placeholder = "enter your lastname"
    name="lname"
    value={fullName.lname}
    onChange={inputEvent}
    />
    <br />
    <input 
    type="email"
    placeholder = "enter your email address"
    name="email"
    value={fullName.email}
    onChange={inputEvent}
    required/>
    <br />
    <input 
    type="tel"
    placeholder = "enter your phone num"
    name="phone"
    value={fullName.phone}
    onChange={inputEvent}
    required/>

    <button>Submit</button>
      </div>
    </form> 

  )
}

export default App;