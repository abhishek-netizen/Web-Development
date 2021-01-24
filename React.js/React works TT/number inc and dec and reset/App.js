import React,{useState} from 'react';
import "./styles.css";

function App() {

const[inc,setInc] = useState(0)

const increment = ()=>{ 
setInc(inc + 1)
}

const decrement = ()=>{ 
  if(inc>0){
    setInc(inc - 1)
  }else{
    setInc(0)
  }
}

const resett = ()=>{ 
  setInc(0)
}


  return (
    <div className="App">
      <h1>{inc}</h1>
     <button onClick={increment}>inc</button>
     <button onClick={decrement}>dec</button>
     <button onClick={resett}>reset</button>
    </div>
  );
}

export default App;