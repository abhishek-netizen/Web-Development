import React,{useState} from 'react'
import "./styles.css";

const App = () =>{

const [name,setName] = useState("");
const [fullName, setFullname] = useState()

 const clickHandler = ()=>{
  setFullname(name);

 }

 const changeHandler = (event)=>{
  console.log(event.target.value) 
  setName(event.target.value);
   
 }

  return (
     <>
    <div className="App">
    
      <h1> HELLO {fullName}</h1>

      <input type="text" 
      placeholder="" 
      value={name}
      onChange={changeHandler}
      />
      <button onClick={clickHandler}>Click-me 👍</button>
      

     
    </div>
    </>
  );
}

export default App;