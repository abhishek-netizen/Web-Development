import React from "react";
import "./styles.css";

let Greet = ""; //scope scope everything is scope

let cssStyle = { 
 color:""
}

let currentTime = new Date().getHours();
if(currentTime > 1 && currentTime <= 11){
   Greet = "Good Morning"
   cssStyle.color = 'Green'
}else if(currentTime>= 12 && currentTime <= 19){
   Greet = "Good Afternoon"
   cssStyle.color = 'Orange'
}else{ 
   Greet = "Good Night"
   cssStyle.color = 'Black'
}

const fancy = { 
  color: "blue",
  fontFamily:"Helvetica",
  padding: '30px 30px',
  borderRadius: '25px',
  backgroundColor: '#eb6383'
}

const divStyle ={ 
   width: '100%',
   height: '100%',
   display: 'flex',
   justifyContent: 'center',
   textAlign:"center",
   alignItems: 'center',
   marginTop: '210px'
}

export default function App() {
  return (
    <>
    <div style={divStyle}>
      <h1 style={fancy}>Hello Sir, <span style={cssStyle}>{Greet}</span></h1>
      <p>made with ❤️ by Abhishek</p>
    </div>
    </>
  );
}
