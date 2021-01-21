import React from "react";
import "./styles.css";
import SlotM from './Slotter'

export default function App() {

  return (
    <div className="App">
      <h1 className="heading">
        Welcome to <span style={{fontWeight:'BOLD',color:'brown'}}>SLOT MACHINE GAME </span>
        </h1>
        
     <div className="cardGuy">   
      <SlotM x="😃" y="🥰" z="🤗"/>
      <hr />
      <SlotM x="🤠" y="🤠" z="🤠"/>
      <hr />
      <SlotM x="🤩" y="🤩" z="🤩"/>
      </div>
      <footer className="footer"> made by abhishek</footer>
    </div>
  );
}
