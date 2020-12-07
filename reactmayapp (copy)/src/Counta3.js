import React from 'react';

class Counta3 extends React.Component {
  constructor(){
    super();
    //create a count variable and store it in the state.set starting value to zero.
    //we are storing the variable in state variable  for to call the render
    //again for the change of the render which will apper to the user
    // in the browser.
    this.increase = this.increase.bind(this);
    this.count = 1;
  }
  increase(){
    let newNumber1 = parseInt(document.getElementById("number1").value);
     this.count = this.count+newNumber1;
     this.forceUpdate()
     if(this.count>5){
      this.count =5
     }
    } 
  render(){ 
  return (
    <div id="count">
      Count = {this.count}
      <input id="number1" type="number" placeholder="Enter the number" name="number1" /><br/>
      <button onClick = {this.increase}>Increase</button><br/>  
    </div>
  )
}
}

export default Counta3;