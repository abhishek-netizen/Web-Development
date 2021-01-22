import React, { useState } from "react";
import "./styles.css";

const App = () => {

const green = "green";
const boom = "click-me"
const [bg,setBg] = useState(green);
const [txt,setTxt] = useState(boom);

const bgChange = () => { 
  let newColors = "orange"
   setBg(newColors)
   let newBoom = "Ouch 🤣"   
   setTxt(newBoom)
}

const bgBack = () => { 
  const green = "green";
  const boom = "click-me"
   setBg(green);
   setTxt(boom);
}


  return(
  <div style={{backgroundColor:bg}}>
    <p>Double click to go back</p>
   <button className="butStyle" onClick={bgChange} onDoubleClick={bgBack}>{txt}</button>
  </div>
  );
};

export default App;
