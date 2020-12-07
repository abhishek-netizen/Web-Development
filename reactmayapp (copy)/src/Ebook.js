import React from 'react';
import './index.css'


class Ebook extends React.Component {
	constructor(){
		super();
		this.state = {
			todos:[]
		}
		this.addTodo = this.addTodo.bind(this);
		this.clearAll = this.clearAll.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
    this.setting = this.setting.bind(this);	
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
    setting(){
      
    }
  render(){
  return (
    <div id="books">
      <h2> Knowledge Is The Power</h2> <br/>
      <ul>
      {
      	    this.state.todos.map((val,index)=>{
      		return <li>{val} <button onClick = {()=>{this.deleteTodo(index)}}> Delete Book</button> </li>
      	})
      }
      </ul>
      <form onSubmit = {this.addTodo}>
      <input type= "text" name="todo"/><br/>
      <button id="addbook">Add Book</button><br/>
      </form>
      <button id="collections">Books Collections</button> <br/>
      <button id="library">Library</button><br/>
      <button id="setting" onClick={()=>{this.setting()}}>Settings</button><br/>
    </div>
    
  )
}

}

export default Ebook;