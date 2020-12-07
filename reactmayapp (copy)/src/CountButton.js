import React from 'react';
import {connect} from 'react-redux';
import {increaseCount,resetCount,decreaseCount,increaseBy} from './actions/actions';

class CountButton extends React.Component{
	constructor(props){
		super(props)
			this.increase = this.increase.bind(this)
			this.decrease = this.decrease.bind(this)
			this.reset = this.reset.bind(this);
			this.increaseValueBy = this.increaseValueBy.bind(this);
			
		}
		increase(){
			this.props.dispatch(increaseCount());
		}
		decrease(){
			this.props.dispatch(decreaseCount());
		}
		reset(){
			this.props.dispatch(resetCount())
		}
		increaseValueBy(e){
           e.preventDefault()
           let increasebyValue = e.target.increaseby.value;
           this.props.dispatch(increaseBy(increasebyValue));
		}
		render(){
			return(
				<div>
				<button onClick = {this.increase}>Increase Count</button>
				<button onClick = {this.decrease}> Derease Count</button>
				<button onClick = {this.reset}> Reset Count</button>
				<form onSubmit = {this.increaseValueBy}>
				<input type="text" name = "increaseby"/>
				<button>Increase By</button>
				</form>
				</div>
				)
		}
	}

export default connect((state)=>{
	return state;
})(CountButton);