import React from 'react';
import './form.css';

class  Formassignment extends React.Component{
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
                            <input type="Checkbox" value="option1"></input>
                            <label>Option A </label>
                            <input type="Checkbox" value="option2"></input>
                            <label>Option B </label>
                            <input type="Checkbox" value="option3"></input>
                            <label>Option C </label>
                            <input type="Checkbox" value="option4"></input>
                            <label>Option D </label>
                            <input type="Checkbox" value="option5"></input>
                            <label>Option E. </label> 
                            <button> Add Other</button>
                        </div>
                    )
                    case 3:
                      return (
                         <div>
                             <input type="radio" value="option1"></input>
                            <label>Option A </label>
                            <input type="radio" value="option2"></input>
                            <label>Option B </label>
                            <input type="radio" value="option3"></input>
                            <label>Option C </label>
                            <input type="radio" value="option4"></input>
                            <label>Option D </label>
                            <input type="radio" value="option5"></input>
                            <label>Option E. </label> 
                            <button>Add Other</button>
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
	                <div class="answer">
	                 
	                </div>
	                <div id="multiplechoise">
                      
	                </div>
				</div>
		)
	}
}

export default Formassignment;
