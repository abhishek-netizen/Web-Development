import React from 'react';
import './index.css';
class Assgn4 extends React.Component {
	constructor(){
		super();
		this.state = {
			hobbies:['Cricket','VollyBall','Music']
		}
		this.addTodo = this.addTodo.bind(this);
		this.clearAll = this.clearAll.bind(this)
	}
	addTodo(e){
		e.preventDefault();
		let todoValue = e.target.todo.value;
		this.setState(function(prevState){
			let newTodos = prevState.hobbies.concat(todoValue)
			return {
				hobbies:newTodos
			}
		})
	}
	clearAll(){
		this.setState(function(){
			return{
				hobbies:[]
			}
		})
	}
  render(){
  return (
    <div id="assgn4">
      <h2> Hobbies </h2> <br/>
      <ul>
      {
      	this.state.hobbies.map(function(val){
      		return <li>{val}</li>
      	})
      }
      </ul>
      <form onSubmit = {this.addTodo}>
      <input type= "text" name="todo"/> <br/>
      <button>Add Hobbies </button> <br/>
      </form>  <br/> 
      <button onClick = {this.clearAll}> Clear All </button>  
    </div>
  )
}
}

export default Assgn4;