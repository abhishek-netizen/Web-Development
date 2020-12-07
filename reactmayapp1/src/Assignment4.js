import React from 'react';
import './index.css'


class Assignment4 extends React.Component {
	constructor(){
		super();
		this.state = {
			todos:['Prajwal','Umesh']
		}
		this.addTodo = this.addTodo.bind(this);
		this.clearAll = this.clearAll.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}
	addTodo(e){
		e.preventDefault();
		let todoValue = e.target.todo.value;
		this.setState(function(prevState){
			let newTodos = prevState.todos.concat(todoValue)
			return {
				todos:newTodos
			}
		})
	}
	clearAll(){
		this.setState(function(){
			return{
				todos:[]
			}
		})
	}
	   deleteTodo(indexToDelete){
     this.setState((prevState)=>{
         let newTodos = prevState.todos.filter((val,index)=>{
         	if(index == indexToDelete)
         		return false;
         	return true;
         })
         return {
         	todos:newTodos
         }
     })
	} 
  render(){
  return (
    <div id="student">
      <h2> Students of the class</h2> <br/>
      <ul>
      {
      	    this.state.todos.map((val,index)=>{
      		return <li>{val},index={index} <button onClick = {()=>{this.deleteTodo(index)}}> Delete </button> </li>
      	})
      }
      </ul>
      <form onSubmit = {this.addTodo}>
      <input type= "text" name="todo"/><br/>
      <button>Add Students </button><br/>
      </form>  <br/>  
       <button onClick = {this.clearAll}> Clear All </button>  
    </div>
  )
}
}

export default Assignment4;