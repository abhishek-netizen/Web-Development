import React, { useState } from "react";
import ReactDOM from "react-dom"

function App(){
//const state = React.useState();
const [count,setCount] = useState(0);

//DESTRUCTURING from concept ES6
//const [red,blue,yellow] = [241,196,15]
//console.log(yellow)


function increase() {
  setCount(count+1)
}

function decrease(){
  setCount(count-1)
}

return( <div className="container">
<h1>{count}</h1>
<button onClick={increase}>+</button>
<button onClick={decrease}>-</button>
</div>)

}

export default App;
