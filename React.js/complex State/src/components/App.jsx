import React,{useState} from "react";

function App() {
  
  const[fullName, setFullName] = useState({
   fNames:"",
   lNames:""
  })

function handleChange(event){
  //const newValue = event.target.value;
  //const inputName = event.target.name;
  //destructuring concept
  const {value,name} = event.target;


  setFullName(prevValue => {
   if (name === "fName"){
     return {
       fName:value,
       lName:prevValue.lName
     };
   } else if(name ==="lName"){
     return {
       fName:prevValue.fName,
       lName:value
     }
   }
  });

}



  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input 
        onChange={handleChange} 
        name="fName" placeholder="First Name" 
        value={fullName.fNames} 
        />
        <input 
        onChange={handleChange} 
        name="lName" placeholder="Last Name" 
        value={fullName.lNames} 
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
