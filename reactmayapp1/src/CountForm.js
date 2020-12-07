import React from 'react';
class CountForm extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
			 <button onClick = {this.props.increaseCount}>Increase</button><br/>
             <button onClick = {this.props.decreaseCount}>Decrease</button><br/>
             <button onClick = {this.props.resetCount}>Reset</button>
	        </div>	
		)
	}
}
export default CountForm;