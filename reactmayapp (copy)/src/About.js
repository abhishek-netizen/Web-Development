import React from 'react';
import './index.css';

class About extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div id="about">
			<h1>COMPANY INFO</h1>
			<h3>Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt 
			Disney Company, is one of the world's most prominent character-based 
			entertainment companies, built on a proven library of more than 8,000 
			characters featured in a variety of media over seventy-five years. 
			Marvel utilizes its character franchises in entertainment, licensing
			 and publishing. For more information visit marvel.com. © 2020 MARVEL</h3>
			</div>
			)
	}
}
export default About;