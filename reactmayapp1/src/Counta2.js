import React from 'react';

class Counta2 extends React.Component {
  constructor(){
    super();
    //create a count variable and store it in the state.set starting value to zero.
    //we are storing the variable in state variable  for to call the render
    //again for the change of the render which will apper to the user
    // in the browser.
    
   
    this.decrease = this.decrease.bind(this);
    this.count = 100;
  }
  
  decrease(){
    let newNumber2 = parseInt(document.getElementById("number2").value);
    this.count = this.count - newNumber2
    this.forceUpdate()
    if(this.count<0){
      this.count = 0
    }
   } 
  render(){
  return (
    <div id="count">
      Count = {this.count}<br/>
      <input id="number2"type="number" placeholder="Enter the number" name="number2" /><br/>
      <button onClick = {this.decrease}>Decrease</button><br/>
    </div>
  )
}
}

export default Counta2;