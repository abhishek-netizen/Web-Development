import React from 'React'
import './form.css';
class  Formassignment extends React.Component{
	constructor(){
		super();
		this.state = {
			todos:[option1]
		}
		this.add = this.add.bind(this)
	}
	add(e){
		e.preventDefault();
		let todoValue = e.target.todo.value;
		this.setState(function(prevState){
			let newTodos = prevState.todos.concat(todoValue);
			return {
              todos:newTodos
			}
		})
	}
	state={
        current:1
    }
    changeCurrent=(e)=>{
        this.setState({current:parseInt(e.target.value)});
    }
    renderComponent=(value)=>{
        switch(value)
        {
            case 1:
                return <input type="text" placeholder="Enter short answer"/>
                case 2:
                    return (
                        <div>
                          <ul>
                           {
                           this.state.todos.map((val)=>{
                           	return <li>{val} <button onClick = {()=>{this.add()}}>Add Other</button></li>
                           })
                           }
                          </ul> 
                        </div>
                    )
                    case 3:
                      return (
                         <div>
                             <input type="radio" value="option1"></input>
                            <label>Option A </label>
                           
                            <button onClick = {this.add()}> Other</button>
                         </div>
                      )
                    
        }
    }
	render(){
		return (
				<div class = "mainbody" >
	                <div class = "headline" >
                          <h1>Form Title Entered</h1>
                          <h6>Form describtion entered</h6>
	                </div>
	                <div class = "question">
                          <h1>Question Entered</h1>
	                </div>
	                <div class = "input">
	                                <show count = {this.state.option} msh = "fuck off" /> 
		                            <select value={this.state.current} 
		                                onChange={this.changeCurrent} >
					                    <option value="1">Short Answer</option>
					                    <option value="2">Checkbox</option>
					                    <option value="3">Multiple Choise</option>
                                    </select>
                                    <div>
                                    {this.renderComponent(this.state.current)}
                                    </div>
	                </div>
	                
				</div>
		)
	}
}

export default Formassignment;
