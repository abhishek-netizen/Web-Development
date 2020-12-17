import React,{useState} from "react";

function App() {

  const [name,setName] = useState("")
  const [head,setHead] = useState("")

   function handleChange(event){
     setName(event.target.value)
   }
   
   function handleClick(){
     setHead(name)
     //remeber if you use curly braces then it becames js objects
     //console.log({name})
     event.preventDefault(); // prevents forms getting refresh
   }



  return (
    <div className="container">
      <h1>hello {head}</h1>
      <form onSubmit={handleClick}>
      <input 
      onChange={handleChange} 
      type="text" 
      placeholder="What's your name?" 
      value={name}
      />
      <button type="submit" onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
