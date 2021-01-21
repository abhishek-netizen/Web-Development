import React,{useState} from "react";
import "./styles.css";

const App = ()=>{

let presentTime = new Date().toLocaleTimeString();

let [time, setTime] = useState(presentTime);

const handleClick = ()=>{ 
  presentTime = new Date().toLocaleTimeString();
  setTime(presentTime)
}

setInterval(handleClick, 1000);

return(
  <>
  <h1>{time}</h1>
  </>
)

}

export default App;