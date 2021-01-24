import React,{useEffect, useState} from 'react';
import "./styles.css";

export default function App() {

 const [count,setCount] = useState(0);

 //use effect will help us to do a task once after the another task is done.
//here first do increment and then alert 
 useEffect(()=>{
    // alert("I am clicked")
 },[]) // [] helps us to not to Repeat alert everytime i clicked. alert only once when browser refreshes

  return (
    <div className="App">
      <h1>count:{count} </h1>
      <button onClick={()=>{setCount(count+1)}}>Click here</button>
    </div>
  );
}
