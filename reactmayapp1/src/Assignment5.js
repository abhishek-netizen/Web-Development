import React from 'react';
import './index.css'


class Assignment5 extends React.Component {
	constructor(){
		super();
		this.state = {
			todos:['Prajwal','Umesh'],
			indextoEdit:-1,
			editMode:false
		}
		this.addTodo = this.addTodo.bind(this);
		this.clearAll = this.clearAll.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	    this.editTodo = this.editTodo.bind(this);
	    this.changeTodo = this.changeTodo.bind(this); 
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
	editTodo(indextoEdit){
		// this function is called when edit button
		//is clicked.It sets two state variable,one index of array.
		this.setState({editMode:true})
		this.setState({indextoEdit:indextoEdit})
	} 
	changeTodo(todoNewValue){
      this.setState(function(prevState){
      	let newTodos = [...prevState.todos]; 
      	//clonig array,means array is copied inti newTodos.
      	newTodos[this.state.indextoEdit] = todoNewValue;
      	//we find the value which we were editing by indesToEdit value.
      	//we then set the value to the value passed which is the new todo value.
      	return {
      		todos:newTodos
      		//setting the todos to new todos.
      	}
      })
	}
  render(){
  return (
    <div id="student">
      <h2> Students of the class</h2> <br/>
      {
      	this.state.editMode?<input type="text" value = {this.state.todos[this.state.indextoEdit]}
      	onChange = {(e)=>{this.changeTodo(e.target.value)}}
      	/>:""
      }
      <ul>
      {
      	    this.state.todos.map((val,index)=>{
      		return <li>{val}  <button onClick = {()=>{this.deleteTodo(index)}}> Delete </button> 
            <button onClick = {()=>{this.editTodo(index)}}>Edit</button>
      		</li>
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

export default Assignment5;