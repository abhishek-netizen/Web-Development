import React from 'react';
import './index.css';

class Homepage extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div id="Homepage">
			  <h2>Marvel</h2>
			  <h3>Films :</h3>
             <ul>
			  <li>Spider Man </li>
			  <li>Avengers</li>
			  <li>Thor</li>
			  <li>Wolvorine</li>
			 </ul> 
			 <h2>Actors</h2>
			 <ul>
			 <li>Scarlet Jonson</li>
			 <li>Robwer Downey</li>
			 <li>Chris Hamworth</li>
			 <li>Chris Evens</li>
			 </ul>
			</div>
			)
	}
}
export default Homepage;