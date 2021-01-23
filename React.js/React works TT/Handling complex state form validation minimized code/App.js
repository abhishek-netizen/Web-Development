import React,{useState} from 'react'
import "./styles.css";


const App = ()=>{

const[fullName,setFullName] = useState({
fname: "",
lname: ""
})

const inputEvent = (event)=>{
const value = event.target.value;
const name = event.target.name;

setFullName((prevValue)=>{
  console.log(value)
if(name === 'fname'){
  return{fname: value,
         lname: prevValue.lname}
}else if(name === 'lname'){
  return{fname: prevValue.fname,
         lname: value}
}
})
}



const onSubmits = (event)=>{ 
event.preventDefault();
} 


  return(
 
    <form onSubmit={onSubmits}>
    <div className="main_div">
    <h1>Hello {fullName.fname} {fullName.lname} </h1>
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
    <button>Submit</button>
      </div>
    </form> 

  )
}

export default App;