import React,{useState} from 'react'
import "./styles.css";

const App = ()=> { 

const [name, setName] = useState("");
const [fullname, setFullName] = useState("");
const [lastname, setLastName] = useState("");

const changeHandler =(event)=> { 
  setName(event.target.value)
}

const changeHandlerTwo = (event)=>{ 
  setLastName(event.target.value)
}


const onSubmits = (event)=>{ 
  event.preventDefault()
  setFullName(name);
  setLastName(lastname);
}

return(

  <form onSubmit={onSubmits}>
    
  <div className="main_div">
  <h1>Hello {fullname} {lastname}</h1>
    <input type="text"
     placeholder="enter your first name"
     Value={fullname} onChange={changeHandler}
     />
    <input type="text"
     placeholder="enter your last name"
     Value={lastname} onChange={changeHandlerTwo}
     />
    <button type="submit">Click here</button>
    </div>
  </form>
)

}

export default App;