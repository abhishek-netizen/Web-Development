import React from "react";
import Form from "./Form";

var isLoggedIn = false;

const currentTime = new Date().getHours()
console.log(currentTime)

function App() {
  return (
    <div className="container">
     {
//ternery operator
currentTime > 12 ? <h1>Why are you still working </h1> : null
//above code works same as below code
//currentTime < 12 && <h1>Why are you still working </h1> 
//isLoggedIn ? <h1>HI </h1> : <Form />

}
  </div>
  );
}

export default App;
