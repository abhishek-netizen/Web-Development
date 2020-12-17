import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

function handleChange(event){
  //destructuring concept
const{name,value} = event.target

setContact((prevValue)=>{
  if(name === "fName"){
    return{
     fName:value,
     lName:prevValue.lName,
     email:prevValue.email

    } 
  }else if (name === "lName"){
    return{
     fName:prevValue.fName,
     lName:value,
     email:prevValue.email
    }


  }else if (name === "email"){
   return{
    fName:prevValue.fName,
    lName:prevValue.lName,
    email:value
   }
    
  }
})



}



  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} value={contact.fname}    name="fName" placeholder="First Name" />
        <input onChange={handleChange} value={contact.lname}    name="lName" placeholder="Last Name" />
        <input onChange={handleChange} value={contact.email}    name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
