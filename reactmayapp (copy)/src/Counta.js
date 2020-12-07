
import React from 'react';

class Counta extends React.Component {
  constructor(){
    super();
    //create a count variable and store it in the state.set starting value to zero.
    //we are storing the variable in state variable  for to call the render
    //again for the change of the render which will apper to the user
    // in the browser.
    this.state = {
      count:0
    }
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
  }
  increase(){
    let newNumber1 = parseInt(document.getElementById("number1").value);
 this.setState(function(prevState){ 
      return {
        count:prevState.count+ newNumber1
      }
    })
  }
  decrease(){
    let newNumber2 = parseInt(document.getElementById("number2").value);
    this.setState(function(prevState){
      return{
        count:prevState.count - newNumber2
      }
    })
  }
  reset(){
    this.setState(function(prevState){
      return{
        count:prevState.count = 0
      }
    })
  }
  render(){
  return (
    <div id="count">
      Count = {this.state.count}<br/>
      <button onClick = {this.increase}>Increase</button><br/>
      <button onClick = {this.decrease}>Decrease</button><br/>
      <button onClick = {this.reset}>Reset</button><br/>

        <input id="number1" type="number" placeholder="Enter the number" name="number1" /><br/>
        <input id="number2"type="number" placeholder="Enter the number" name="number2" /><br/>
  
    </div>
  )
}
}

export default Counta;