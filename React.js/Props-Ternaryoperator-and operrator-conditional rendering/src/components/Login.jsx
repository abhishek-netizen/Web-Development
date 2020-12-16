import React from "react"
import Input from "./Input"

function Login(){
  return (
    <form className="form">
      <Input 
      type = "text"
      placeholder = "Username"
      />
      <Input
      type = "password"
      placeholder = "Password"    
      />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default Login;