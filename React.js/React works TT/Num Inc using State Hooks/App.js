import React,{useState} from "react";
import "./styles.css";

const App = () => { 

const[count,setCount] = useState(0)

const handleClick = ()=> { 
   setCount(count + 1)
}

  return(
    <>
    <h1>{count}</h1>
    <button onClick={handleClick}>Click here</button>
    </>
  )
}


export default App;