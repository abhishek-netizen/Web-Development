import React from 'react';
import ShowCount from './ShowCount';
import CountForm from './CountForm'
class Count extends React.Component {
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
  increase(e){
    e.preventDefault();
    this.setState(function(prevState){ 
      return {
        count:prevState.count + 1
      }
    })
  }
  decrease(){
    this.setState(function(prevState){
      return{
        count:prevState.count - 1
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
      
      <ShowCount count = {this.state.count} msg = "hell of" />
      <CountForm increaseCount = {this.increase}
       decreaseCount = {this.decrease} 
       resetCount ={this.reset} />
    </div>
  )
}
}

export default Count;