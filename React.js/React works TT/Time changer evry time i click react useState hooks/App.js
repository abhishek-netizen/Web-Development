import React,{useState} from "react";
import "./styles.css";

const App = ()=>{ 
   
  let present  = new Date().toLocaleTimeString();

  const[time,setTime] = useState(present)
 
   const handleClick = ()=>{ 
    let present  = new Date().toLocaleTimeString();
     setTime(present)

     console.log(time)
   }

  return(
   <>

    <h1>{time}</h1>
    <button onClick = {handleClick} >here</button>

   </>
  )

}

export default App;